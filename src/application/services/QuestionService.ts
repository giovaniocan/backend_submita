// src/application/services/QuestionService.ts

import { QuestionRepository } from "../../infrastructure/repositories/QuestionRepository";
import { ChecklistRepository } from "../../infrastructure/repositories/ChecklistRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  CreateQuestionDto,
  QuestionResponseDto,
  CreateQuestionsDto,
  CreateQuestionsResponseDto,
  QuestionDto,
} from "../dtos/QuestionDto";
import { Question } from "@prisma/client";

export class QuestionService {
  private questionRepository: QuestionRepository;
  private checklistRepository: ChecklistRepository;

  constructor() {
    this.questionRepository = new QuestionRepository();
    this.checklistRepository = new ChecklistRepository();
  }

  // ========================================
  // CREATE SINGLE QUESTION
  // ========================================
  async createQuestion(
    questionData: CreateQuestionDto
  ): Promise<QuestionResponseDto> {
    // 1️⃣ VALIDAR DADOS DE ENTRADA
    this.validateCreateData(questionData);

    // 2️⃣ VERIFICAR SE O CHECKLIST EXISTE E ESTÁ ATIVO
    const checklist = await this.checklistRepository.findActiveById(
      questionData.checklistId
    );
    if (!checklist) {
      throw new AppError("Checklist not found or inactive", 404);
    }

    // 3️⃣ DEFINIR ORDER AUTOMÁTICA SE NÃO FORNECIDA
    if (questionData.order === undefined) {
      const nextOrder = await this.questionRepository.getNextOrderNumber(
        questionData.checklistId
      );
      questionData.order = nextOrder;
    } else {
      // 4️⃣ VERIFICAR SE A ORDER JÁ EXISTE
      const existingQuestion = await this.questionRepository.findByOrder(
        questionData.checklistId,
        questionData.order
      );
      if (existingQuestion) {
        throw new AppError(
          `A question with order ${questionData.order} already exists in this checklist`,
          409
        );
      }
    }

    // 5️⃣ CRIAR A PERGUNTA
    const question = await this.questionRepository.create(questionData);

    // 6️⃣ RETORNAR RESPOSTA FORMATADA
    return this.toQuestionResponse(question);
  }

  // ========================================
  // CREATE MULTIPLE QUESTIONS
  // ========================================
  async createMultipleQuestions(
    checklistId: string,
    questionsData: CreateQuestionsDto
  ): Promise<CreateQuestionsResponseDto> {
    // 1️⃣ VALIDAR CHECKLIST ID
    if (!checklistId || !this.isValidUUID(checklistId)) {
      throw new AppError("Valid checklist ID is required", 400);
    }

    // 2️⃣ VERIFICAR SE O CHECKLIST EXISTE E ESTÁ ATIVO
    const checklist = await this.checklistRepository.findActiveById(
      checklistId
    );
    if (!checklist) {
      throw new AppError("Checklist not found or inactive", 404);
    }

    // 3️⃣ VALIDAR SE TEM PERGUNTAS
    if (!questionsData.questions || !Array.isArray(questionsData.questions)) {
      throw new AppError("Questions array is required", 400);
    }

    if (questionsData.questions.length === 0) {
      throw new AppError("At least one question is required", 400);
    }

    // 4️⃣ PROCESSAR CADA PERGUNTA
    const added: QuestionResponseDto[] = [];
    let errors = 0;

    // Obter próximo número de order disponível
    let nextOrder = await this.questionRepository.getNextOrderNumber(
      checklistId
    );

    for (const questionData of questionsData.questions) {
      try {
        // Validar dados da pergunta
        this.validateQuestionData(questionData);

        // Definir order automática se não fornecida
        if (questionData.order === undefined) {
          questionData.order = nextOrder++;
        }

        // Criar pergunta individual
        const questionToCreate: CreateQuestionDto = {
          ...questionData,
          checklistId,
          isRequired:
            questionData.isRequired !== undefined
              ? questionData.isRequired
              : true,
        };

        const question = await this.questionRepository.create(questionToCreate);
        added.push(this.toQuestionResponse(question));
      } catch (error) {
        errors++;
        // Continue processando as outras perguntas
      }
    }

    // 5️⃣ MONTAR RESPOSTA
    const summary = {
      totalProcessed: questionsData.questions.length,
      totalAdded: added.length,
      totalErrors: errors,
    };

    return { added, summary };
  }

  async deleteQuestion(
    checklistId: string,
    questionId: string
  ): Promise<QuestionResponseDto> {
    if (!this.isValidUUID(checklistId)) {
      throw new AppError("Invalid checklist ID format", 400);
    }

    const checklist = await this.checklistRepository.findActiveById(
      checklistId
    );
    if (!checklist) {
      throw new AppError("Checklist not found or inactive", 404);
    }

    const question = await this.questionRepository.findById(questionId);
    if (!question) {
      throw new AppError("Question not found", 404);
    }

    if (question.checklistId !== checklistId) {
      throw new AppError("Question does not belong to this checklist", 400);
    }

    if (!question.isActive) {
      throw new AppError("Question is already inactive", 400);
    }

    // 5️⃣ SOFT DELETE - DESATIVAR A PERGUNTA
    const deletedQuestion = await this.questionRepository.softDelete(
      questionId
    );

    // 6️⃣ REORGANIZAR ORDERS DAS PERGUNTAS RESTANTES (OPCIONAL)
    await this.questionRepository.reorderQuestions(checklistId);

    // 7️⃣ RETORNAR RESPOSTA FORMATADA
    return this.toQuestionResponse(deletedQuestion);
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================

  private validateCreateData(questionData: CreateQuestionDto): void {
    this.validateQuestionData(questionData);

    // Validar checklistId
    if (
      !questionData.checklistId ||
      !this.isValidUUID(questionData.checklistId)
    ) {
      throw new AppError("Valid checklist ID is required", 400);
    }
  }

  private validateQuestionData(questionData: QuestionDto): void {
    // Validar descrição
    if (
      !questionData.description ||
      questionData.description.trim().length < 3
    ) {
      throw new AppError(
        "Question description must have at least 3 characters",
        400
      );
    }

    if (questionData.description.length > 200) {
      throw new AppError(
        "Question description cannot exceed 200 characters",
        400
      );
    }

    // Validar tipo
    if (!["YES_NO", "SCALE", "TEXT"].includes(questionData.type)) {
      throw new AppError("Question type must be YES_NO, SCALE, or TEXT", 400);
    }

    // Validar order (se fornecida)
    if (questionData.order !== undefined && questionData.order < 1) {
      throw new AppError("Question order must be greater than 0", 400);
    }
  }

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  private toQuestionResponse(question: Question & any): QuestionResponseDto {
    return {
      id: question.id,
      description: question.description,
      type: question.type,
      isRequired: question.isRequired,
      order: question.order,
      isActive: question.isActive,
      checklistId: question.checklistId,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
      checklist: question.checklist,
    };
  }
}
