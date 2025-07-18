// src/presentation/controllers/QuestionController.ts

import { Request, Response, NextFunction } from "express";
import { QuestionService } from "../../application/services/QuestionService";
import {
  CreateQuestionDto,
  CreateQuestionsDto,
} from "../../application/dtos/QuestionDto";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";
import { sanitizeUuidOrThrow } from "../../shared/utils/uuidSanitazer";

export class QuestionController {
  private questionService: QuestionService;

  constructor() {
    this.questionService = new QuestionService();
  }

  // ========================================
  // CREATE SINGLE QUESTION (Apenas COORDINATOR)
  // ========================================
  async createQuestion(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // 1️⃣ EXTRAIR DADOS DO BODY E PARAMS
      const { description, type, isRequired, order } = req.body;
      const { checklistId } = req.params;

      // 2️⃣ VALIDAR SE OS DADOS FORAM FORNECIDOS
      if (!description) {
        res
          .status(400)
          .json(ApiResponse.error("Question description is required", 400));
        return;
      }

      if (!type) {
        res
          .status(400)
          .json(ApiResponse.error("Question type is required", 400));
        return;
      }

      if (!checklistId) {
        res
          .status(400)
          .json(ApiResponse.error("Checklist ID is required", 400));
        return;
      }

      // 3️⃣ VALIDAR TIPO DA PERGUNTA
      if (!["YES_NO", "SCALE", "TEXT"].includes(type)) {
        res
          .status(400)
          .json(
            ApiResponse.error(
              "Question type must be YES_NO, SCALE, or TEXT",
              400
            )
          );
        return;
      }

      // 4️⃣ MONTAR DTO
      const questionData: CreateQuestionDto = {
        description: description.trim(),
        type: type as "YES_NO" | "SCALE" | "TEXT",
        isRequired: isRequired !== undefined ? isRequired : true,
        order: order || undefined,
        checklistId,
      };

      // 5️⃣ CHAMAR O SERVICE
      const question = await this.questionService.createQuestion(questionData);

      // 6️⃣ RETORNAR SUCESSO
      res
        .status(201)
        .json(
          ApiResponse.success(
            question,
            `Question '${question.description}' added to checklist successfully!`
          )
        );
    } catch (error) {
      this.handleError(error, res, "Create question error");
    }
  }

  // ========================================
  // CREATE MULTIPLE QUESTIONS (Apenas COORDINATOR)
  // ========================================
  async createMultipleQuestions(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // 1️⃣ EXTRAIR DADOS DO PARAMS E BODY
      const { checklistId } = req.params;
      const questionsData: CreateQuestionsDto = req.body;

      // 2️⃣ VALIDAR SE OS DADOS FORAM FORNECIDOS
      if (!checklistId) {
        res
          .status(400)
          .json(ApiResponse.error("Checklist ID is required", 400));
        return;
      }

      if (
        !questionsData ||
        !questionsData.questions ||
        !Array.isArray(questionsData.questions)
      ) {
        res
          .status(400)
          .json(ApiResponse.error("Questions array is required", 400));
        return;
      }

      if (questionsData.questions.length === 0) {
        res
          .status(400)
          .json(ApiResponse.error("At least one question is required", 400));
        return;
      }

      // 3️⃣ CHAMAR O SERVICE
      const result = await this.questionService.createMultipleQuestions(
        checklistId,
        questionsData
      );

      // 4️⃣ DETERMINAR STATUS CODE BASEADO NO RESULTADO
      const statusCode = result.summary.totalAdded > 0 ? 201 : 400;

      // 5️⃣ MENSAGEM PERSONALIZADA BASEADA NO RESULTADO
      let message = "";
      if (result.summary.totalAdded === result.summary.totalProcessed) {
        message = `All ${result.summary.totalAdded} question(s) added successfully!`;
      } else if (result.summary.totalAdded > 0) {
        message = `${result.summary.totalAdded} of ${result.summary.totalProcessed} question(s) added successfully!`;
      } else {
        message = "No questions were added";
      }

      // 6️⃣ RETORNAR RESPOSTA
      res.status(statusCode).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Create multiple questions error");
    }
  }

  async deleteQuestion(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const checklistId = sanitizeUuidOrThrow(
        req.params.checklistId,
        "Checklist ID"
      );
      const questionId = sanitizeUuidOrThrow(
        req.params.questionId,
        "Question ID"
      );

      if (!checklistId) {
        res
          .status(400)
          .json(ApiResponse.error("Checklist ID is required", 400));
        return;
      }

      if (!questionId) {
        res.status(400).json(ApiResponse.error("Question ID is required", 400));
        return;
      }

      const result = await this.questionService.deleteQuestion(
        checklistId,
        questionId
      );

      res
        .status(200)
        .json(
          ApiResponse.success(
            result,
            `Question '${result.description}' removed from checklist successfully!`
          )
        );
    } catch (error) {
      this.handleError(error, res, "Delete question error");
    }
  }
  // ========================================
  // MÉTODO PRIVADO PARA TRATAMENTO DE ERROS
  // ========================================
  private handleError(error: unknown, res: Response, context: string): void {
    if (error instanceof AppError) {
      res
        .status(error.statusCode)
        .json(ApiResponse.error(error.message, error.statusCode));
      return;
    }

    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
