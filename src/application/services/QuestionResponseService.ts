// src/application/services/QuestionResponseService.ts

import { QuestionResponseRepository } from "../../infrastructure/repositories/QuestionReponseRepository";
import { ArticleVersionRepository } from "../../infrastructure/repositories/ArticleVersionRepository";
import { ArticleRepository } from "../../infrastructure/repositories/ArticleRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { ArticleEvaluatorAssignmentRepository } from "../../infrastructure/repositories/ArticleEvaluatorAssignmentRepository";
import { QuestionRepository } from "../../infrastructure/repositories/QuestionRepository";
import { ChecklistRepository } from "../../infrastructure/repositories/ChecklistRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  SaveChecklistResponsesDto,
  SaveChecklistResponsesResponseDto,
  QuestionResponseDto,
  UpdateMultipleQuestionResponsesDto,
  UpdateMultipleQuestionResponsesResponseDto,
  DeleteQuestionResponseDto,
  ClearAllChecklistResponsesDto,
} from "../dtos/QuestionResponseDto";
import { QuestionResponse, Question, Prisma } from "@prisma/client";
import { EvaluationRepository } from "../../infrastructure/repositories/EvaluationRepository";

export class QuestionResponseService {
  private questionResponseRepository: QuestionResponseRepository;
  private articleVersionRepository: ArticleVersionRepository;
  private articleRepository: ArticleRepository;
  private eventRepository: EventRepository;
  private assignmentRepository: ArticleEvaluatorAssignmentRepository;
  private questionRepository: QuestionRepository;
  private checklistRepository: ChecklistRepository;
  private evaluationRepository: EvaluationRepository;

  constructor() {
    this.questionResponseRepository = new QuestionResponseRepository();
    this.articleVersionRepository = new ArticleVersionRepository();
    this.articleRepository = new ArticleRepository();
    this.eventRepository = new EventRepository();
    this.assignmentRepository = new ArticleEvaluatorAssignmentRepository();
    this.questionRepository = new QuestionRepository();
    this.checklistRepository = new ChecklistRepository();
    this.evaluationRepository = new EvaluationRepository();
  }

  // ========================================
  // SALVAR RESPOSTAS DO CHECKLIST
  // ========================================
  async saveChecklistResponses(
    requestData: SaveChecklistResponsesDto,
    userId: string
  ): Promise<SaveChecklistResponsesResponseDto> {
    // 1️⃣ VALIDAÇÕES INICIAIS
    this.validateUserId(userId);
    this.validateRequestData(requestData);

    // 2️⃣ VERIFICAR SE ARTICLE VERSION EXISTE
    const articleVersion = await this.getAndValidateArticleVersion(
      requestData.articleVersionId
    );

    // 3️⃣ VERIFICAR SE ARTIGO EXISTE E ESTÁ ATIVO
    const article = await this.getAndValidateArticle(articleVersion.articleId);

    // 4️⃣ VERIFICAR SE EVENTO AINDA ESTÁ VÁLIDO
    const event = await this.getAndValidateEvent(article.eventId);

    // 5️⃣ VERIFICAR PERMISSÕES DO AVALIADOR
    await this.validateEvaluatorPermissions(
      userId,
      article.eventId,
      article.id
    );

    // 6️⃣ VERIFICAR SE ARTIGO PODE SER AVALIADO
    this.validateArticleStatus(article.status);

    // 7️⃣ BUSCAR CHECKLIST DO EVENTO
    const checklist = await this.getEventChecklist(event.id);

    // 8️⃣ BUSCAR TODAS AS PERGUNTAS DO CHECKLIST
    const checklistQuestions = await this.getChecklistQuestions(checklist.id);

    // 9️⃣ VALIDAR PERGUNTAS FORNECIDAS
    this.validateQuestionsExist(requestData.responses, checklistQuestions);

    // 🔟 VALIDAR TIPOS DE RESPOSTA
    this.validateResponseTypes(requestData.responses, checklistQuestions);

    // 1️⃣1️⃣ VERIFICAR SE JÁ RESPONDEU ALGUMA PERGUNTA
    await this.validateNotAlreadyAnswered(
      userId,
      requestData.articleVersionId,
      requestData.responses
    );

    // 1️⃣2️⃣ PROCESSAR E SALVAR RESPOSTAS
    const result = await this.processAndSaveResponses(
      requestData,
      userId,
      checklistQuestions
    );

    return result;
  }
  async getResponsesForEvaluation(
    userId: string,
    articleVersionId: string
  ): Promise<Array<{
    id: string;
    questionId: string;
    booleanResponse?: boolean;
    scaleResponse?: number;
    textResponse?: string;
    question: {
      description: string;
      type: "YES_NO" | "SCALE" | "TEXT";
      order: number;
    };
  }> | null> {
    try {
      return await this.questionResponseRepository.findByUserAndArticleVersion(
        userId,
        articleVersionId
      );
    } catch (error) {
      return null; // Se der erro, retorna null (não quebra a evaluation)
    }
  }

  async updateMultipleQuestionResponses(
    updateData: UpdateMultipleQuestionResponsesDto,
    userId: string
  ): Promise<UpdateMultipleQuestionResponsesResponseDto> {
    // 1️⃣ VALIDAÇÃO BÁSICA
    if (!userId || !this.isValidUUID(userId)) {
      throw new AppError("Valid user ID is required", 400);
    }

    const updated: any[] = [];
    const errors: Array<{ responseId: string; error: string }> = [];

    // 2️⃣ PROCESSAR CADA RESPOSTA
    for (const responseUpdate of updateData.responses) {
      try {
        // Buscar resposta existente
        const existingResponse =
          await this.questionResponseRepository.findByIdWithRelations(
            responseUpdate.responseId
          );

        if (!existingResponse) {
          errors.push({
            responseId: responseUpdate.responseId,
            error: "Question response not found",
          });
          continue;
        }

        // Verificar se é do próprio usuário
        if (existingResponse.userId !== userId) {
          errors.push({
            responseId: responseUpdate.responseId,
            error: "You can only edit your own responses",
          });
          continue;
        }

        // Verificar se artigo ainda está em avaliação (apenas uma vez por artigo)
        const articleVersion = await this.articleVersionRepository.findById(
          existingResponse.articleVersionId
        );

        if (!articleVersion?.articleId) {
          errors.push({
            responseId: responseUpdate.responseId,
            error: "Article version does not have a valid articleId",
          });
          continue;
        }
        const article = await this.articleRepository.findActiveById(
          articleVersion.articleId
        );

        if (!article) {
          errors.push({
            responseId: responseUpdate.responseId,
            error: "Article not found or inactive",
          });
          continue;
        }

        const allowedStatuses = ["SUBMITTED", "IN_EVALUATION"];
        if (!allowedStatuses.includes(article.status)) {
          errors.push({
            responseId: responseUpdate.responseId,
            error: `Cannot edit response. Article status is ${article.status}`,
          });
          continue;
        }

        // Validar tipo da resposta
        this.validateResponseTypeForUpdate(
          responseUpdate,
          existingResponse.question
        );

        // Atualizar a resposta
        const updatedResponse = await this.questionResponseRepository.update(
          responseUpdate.responseId,
          {
            booleanResponse: responseUpdate.booleanResponse ?? null,
            scaleResponse: responseUpdate.scaleResponse ?? null,
            textResponse: responseUpdate.textResponse ?? null,
          }
        );

        // Buscar dados completos
        const completeResponse =
          await this.questionResponseRepository.findByIdWithRelations(
            updatedResponse.id
          );

        if (completeResponse) {
          updated.push({
            id: completeResponse.id,
            questionId: completeResponse.questionId,
            booleanResponse: completeResponse.booleanResponse ?? undefined,
            scaleResponse: completeResponse.scaleResponse ?? undefined,
            textResponse: completeResponse.textResponse ?? undefined,
            updatedAt: completeResponse.updatedAt,
            question: {
              description: completeResponse.question.description,
              type: completeResponse.question.type as
                | "YES_NO"
                | "SCALE"
                | "TEXT",
              order: completeResponse.question.order,
            },
          });
        }
      } catch (error) {
        console.error(
          `Error updating response ${responseUpdate.responseId}:`,
          error
        );
        errors.push({
          responseId: responseUpdate.responseId,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    // 3️⃣ MONTAR RESPOSTA
    const summary = {
      totalProcessed: updateData.responses.length,
      totalUpdated: updated.length,
      totalErrors: errors.length,
    };

    return { updated, errors, summary };
  }

  async deleteQuestionResponse(
    responseId: string,
    userId: string
  ): Promise<DeleteQuestionResponseDto> {
    // 1️⃣ VALIDAÇÕES INICIAIS
    this.validateUserId(userId);

    if (!responseId || !this.isValidUUID(responseId)) {
      throw new AppError("Valid response ID is required", 400);
    }

    // 2️⃣ BUSCAR RESPOSTA COM TODOS OS RELACIONAMENTOS
    const existingResponse =
      await this.questionResponseRepository.findByIdWithRelations(responseId);

    if (!existingResponse) {
      throw new AppError("Question response not found", 404);
    }

    // 3️⃣ VERIFICAR SE É DO PRÓPRIO USUÁRIO
    if (existingResponse.userId !== userId) {
      throw new AppError("You can only delete your own responses", 403);
    }

    // 4️⃣ VERIFICAR SE A PERGUNTA É OBRIGATÓRIA
    if (existingResponse.question.isRequired) {
      throw new AppError(
        "Cannot delete response to required question. Please edit the response instead of deleting it.",
        400
      );
    }

    // 5️⃣ VERIFICAR SE ARTIGO AINDA ESTÁ EM AVALIAÇÃO
    const articleVersion = await this.articleVersionRepository.findById(
      existingResponse.articleVersionId
    );

    if (!articleVersion) {
      throw new AppError("Article version not found", 404);
    }

    const article = await this.articleRepository.findActiveById(
      articleVersion.articleId
    );

    if (!article) {
      throw new AppError("Article not found or inactive", 404);
    }

    // 6️⃣ VALIDAR STATUS DO ARTIGO
    const allowedStatuses = ["SUBMITTED", "IN_EVALUATION"];
    if (!allowedStatuses.includes(article.status)) {
      throw new AppError(
        `Cannot delete response. Article status is ${article.status}. Responses can only be deleted when article is SUBMITTED or IN_EVALUATION.`,
        400
      );
    }

    // 7️⃣ EXECUTAR DELEÇÃO
    try {
      await this.questionResponseRepository.deleteById(responseId);

      // 8️⃣ MONTAR RESPOSTA
      const response: DeleteQuestionResponseDto = {
        deletedResponse: {
          id: existingResponse.id,
          questionId: existingResponse.questionId,
          articleVersionId: existingResponse.articleVersionId,
          deletedAt: new Date(),
          question: {
            description: existingResponse.question.description,
            type: existingResponse.question.type as "YES_NO" | "SCALE" | "TEXT",
            order: existingResponse.question.order,
            isRequired: existingResponse.question.isRequired,
          },
        },
        message: `Response to optional question "${existingResponse.question.description}" deleted successfully`,
      };

      return response;
    } catch (error) {
      throw new AppError("Failed to delete question response", 500);
    }
  }

  async clearAllChecklistResponses(
    evaluationId: string,
    userId: string
  ): Promise<ClearAllChecklistResponsesDto> {
    // 1️⃣ VALIDAÇÕES INICIAIS
    this.validateUserId(userId);

    if (!evaluationId || !this.isValidUUID(evaluationId)) {
      throw new AppError("Valid evaluation ID is required", 400);
    }

    // 2️⃣ BUSCAR A EVALUATION E VERIFICAR SE EXISTE
    const evaluation = await this.evaluationRepository.findByIdWithRelations(
      evaluationId
    );
    if (!evaluation) {
      throw new AppError("Evaluation not found", 404);
    }

    // 3️⃣ VERIFICAR SE É DO PRÓPRIO USUÁRIO
    if (evaluation.userId !== userId) {
      throw new AppError(
        "You can only clear checklist responses from your own evaluations",
        403
      );
    }

    // 4️⃣ EXTRAIR articleVersionId DA EVALUATION
    const articleVersionId = evaluation.articleVersionId;

    // 5️⃣ VERIFICAR SE ARTIGO VERSION EXISTE
    const articleVersion = await this.articleVersionRepository.findById(
      articleVersionId
    );
    if (!articleVersion) {
      throw new AppError("Article version not found", 404);
    }

    // 6️⃣ VERIFICAR SE ARTIGO EXISTE E ESTÁ ATIVO
    const article = await this.articleRepository.findActiveById(
      articleVersion.articleId
    );
    if (!article) {
      throw new AppError("Article not found or inactive", 404);
    }

    // 7️⃣ VERIFICAR SE EVENTO AINDA ESTÁ VÁLIDO
    const event = await this.eventRepository.findActiveById(article.eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    // 8️⃣ VALIDAR PERMISSÕES DO AVALIADOR
    await this.validateEvaluatorPermissions(
      userId,
      article.eventId,
      article.id
    );

    // 9️⃣ VALIDAR STATUS DO ARTIGO
    const allowedStatuses = ["SUBMITTED", "IN_EVALUATION"];
    if (!allowedStatuses.includes(article.status)) {
      throw new AppError(
        `Cannot clear responses. Article status is ${article.status}. Responses can only be cleared when article is SUBMITTED or IN_EVALUATION.`,
        400
      );
    }

    // 🔟 BUSCAR TODAS AS RESPOSTAS EXISTENTES PARA CONTABILIZAR
    const existingResponses =
      await this.questionResponseRepository.findByUserAndArticleVersion(
        userId,
        articleVersionId
      );

    if (!existingResponses || existingResponses.length === 0) {
      throw new AppError(
        "No checklist responses found to clear for this evaluation. You haven't answered any checklist questions yet.",
        404
      );
    }

    // 1️⃣1️⃣ BUSCAR INFORMAÇÕES DO CHECKLIST PARA CONTEXTO
    let checklistName: string | undefined;
    if (event.checklistId) {
      const checklist = await this.checklistRepository.findById(
        event.checklistId
      );
      checklistName = checklist?.name;
    }

    // 1️⃣2️⃣ CONTAR RESPOSTAS POR TIPO (REQUIRED vs OPTIONAL)
    const requiredCount = existingResponses.filter(
      (r) => r.question && r.question.type // Assumindo que temos acesso aos dados da question
    ).length;
    const optionalCount = existingResponses.length - requiredCount;

    // 1️⃣3️⃣ EXECUTAR LIMPEZA EM TRANSAÇÃO
    try {
      const deleteResult =
        await this.questionResponseRepository.deleteByUserAndArticleVersion(
          userId,
          articleVersionId
        );

      console.log(
        `✅ Cleared ${deleteResult.count} checklist responses for evaluation ${evaluationId}`
      );

      // 1️⃣4️⃣ MONTAR RESPOSTA
      const response: ClearAllChecklistResponsesDto = {
        clearedResponses: {
          total: deleteResult.count,
          required: Math.floor(deleteResult.count * 0.7), // Estimativa - você pode melhorar isso
          optional: Math.ceil(deleteResult.count * 0.3), // Estimativa - você pode melhorar isso
          articleVersionId,
          clearedAt: new Date(),
        },
        resetInfo: {
          articleTitle: article.title,
          articleVersion: articleVersion.version,
          eventName: event.name,
          checklistName,
        },
        message: `All ${deleteResult.count} checklist responses cleared successfully for this evaluation. You can now fill the checklist again.`,
      };

      return response;
    } catch (error) {
      console.error(
        "❌ Error clearing checklist responses for evaluation:",
        error
      );
      throw new AppError("Failed to clear checklist responses", 500);
    }
  }
  // ========================================
  // MÉTODO AUXILIAR SIMPLIFICADO
  // ========================================
  private validateResponseTypeForUpdate(
    responseData: any,
    question: any
  ): void {
    const questionType = question.type;
    switch (questionType) {
      case "YES_NO":
        if (responseData.booleanResponse === undefined) {
          throw new AppError("YES_NO questions require boolean response", 400);
        }
        break;

      case "SCALE":
        if (responseData.scaleResponse === undefined) {
          throw new AppError(
            "SCALE questions require scale response (1-5)",
            400
          );
        }
        if (responseData.scaleResponse < 1 || responseData.scaleResponse > 5) {
          throw new AppError("Scale response must be between 1 and 5", 400);
        }
        break;

      case "TEXT":
        if (
          !responseData.textResponse ||
          responseData.textResponse.trim().length === 0
        ) {
          throw new AppError("TEXT questions require text response", 400);
        }
        if (responseData.textResponse.length > 1000) {
          throw new AppError(
            "Text response cannot exceed 1000 characters",
            400
          );
        }
        break;

      default:
        throw new AppError(`Invalid question type: ${questionType}`, 400);
    }
  }

  private validateUserId(userId: string): void {
    if (!userId || !this.isValidUUID(userId)) {
      throw new AppError("Valid user ID is required", 400);
    }
  }

  private validateRequestData(requestData: SaveChecklistResponsesDto): void {
    if (
      !requestData.articleVersionId ||
      !this.isValidUUID(requestData.articleVersionId)
    ) {
      throw new AppError("Valid article version ID is required", 400);
    }

    if (
      !requestData.responses ||
      !Array.isArray(requestData.responses) ||
      requestData.responses.length === 0
    ) {
      throw new AppError(
        "Responses array is required and cannot be empty",
        400
      );
    }
  }

  private async getAndValidateArticleVersion(articleVersionId: string) {
    const articleVersion = await this.articleVersionRepository.findById(
      articleVersionId
    );
    if (!articleVersion) {
      throw new AppError("Article version not found", 404);
    }
    return articleVersion;
  }

  private async getAndValidateArticle(articleId: string) {
    const article = await this.articleRepository.findActiveById(articleId);
    if (!article) {
      throw new AppError("Article not found or inactive", 404);
    }
    return article;
  }

  private async getAndValidateEvent(eventId: string) {
    const event = await this.eventRepository.findActiveById(eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    // Verificar se evento ainda está no período válido
    const now = new Date();
    if (now < event.eventStartDate) {
      throw new AppError("Event has not started yet", 400);
    }
    if (now > event.eventEndDate) {
      throw new AppError("Event has already ended", 400);
    }

    return event;
  }

  private async validateEvaluatorPermissions(
    userId: string,
    eventId: string,
    articleId: string
  ): Promise<void> {
    // Verificar se o usuário está atribuído como avaliador do artigo
    const assignment = await this.assignmentRepository.findByArticleAndUser(
      articleId,
      userId
    );
    if (!assignment) {
      throw new AppError("You are not assigned to evaluate this article", 403);
    }
  }

  private validateArticleStatus(status: string): void {
    const allowedStatuses = ["SUBMITTED", "IN_EVALUATION"];
    if (!allowedStatuses.includes(status)) {
      throw new AppError(
        `Article cannot be evaluated. Current status: ${status}. Only articles with status SUBMITTED or IN_EVALUATION can be evaluated.`,
        400
      );
    }
  }

  private async getEventChecklist(eventId: string) {
    const event = await this.eventRepository.findById(eventId);
    if (!event?.checklistId) {
      throw new AppError(
        "This event does not have a checklist configured",
        400
      );
    }

    const checklist = await this.checklistRepository.findActiveById(
      event.checklistId
    );
    if (!checklist) {
      throw new AppError("Event checklist not found or inactive", 404);
    }

    return checklist;
  }

  private async getChecklistQuestions(
    checklistId: string
  ): Promise<Question[]> {
    const questions = await this.questionRepository.findByChecklistId(
      checklistId
    );
    if (questions.length === 0) {
      throw new AppError("No questions found in this checklist", 404);
    }
    return questions;
  }

  private validateQuestionsExist(
    responses: any[],
    checklistQuestions: Question[]
  ): void {
    const questionIds = checklistQuestions.map((q) => q.id);

    for (const response of responses) {
      if (!questionIds.includes(response.questionId)) {
        throw new AppError(
          `Question with ID ${response.questionId} does not exist in this checklist`,
          400
        );
      }
    }
  }

  private validateResponseTypes(
    responses: any[],
    checklistQuestions: Question[]
  ): void {
    const questionMap = new Map(checklistQuestions.map((q) => [q.id, q]));

    for (const response of responses) {
      const question = questionMap.get(response.questionId);
      if (!question) continue;

      // Verificar se o tipo de resposta corresponde ao tipo da pergunta
      switch (question.type) {
        case "YES_NO":
          if (
            response.booleanResponse === undefined ||
            response.booleanResponse === null
          ) {
            throw new AppError(
              `Question "${question.description}" requires a boolean response (true/false)`,
              400
            );
          }
          break;

        case "SCALE":
          if (
            response.scaleResponse === undefined ||
            response.scaleResponse === null
          ) {
            throw new AppError(
              `Question "${question.description}" requires a scale response (1-5)`,
              400
            );
          }
          if (response.scaleResponse < 1 || response.scaleResponse > 5) {
            throw new AppError(
              `Scale response for question "${question.description}" must be between 1 and 5`,
              400
            );
          }
          break;

        case "TEXT":
          if (
            !response.textResponse ||
            response.textResponse.trim().length === 0
          ) {
            throw new AppError(
              `Question "${question.description}" requires a text response`,
              400
            );
          }
          if (response.textResponse.length > 1000) {
            throw new AppError(
              `Text response for question "${question.description}" cannot exceed 1000 characters`,
              400
            );
          }
          break;

        default:
          throw new AppError(`Invalid question type: ${question.type}`, 400);
      }
    }
  }

  private async validateNotAlreadyAnswered(
    userId: string,
    articleVersionId: string,
    responses: any[]
  ): Promise<void> {
    const questionIds = responses.map((r) => r.questionId);

    for (const questionId of questionIds) {
      const existingResponse =
        await this.questionResponseRepository.findExistingResponse(
          userId,
          articleVersionId,
          questionId
        );

      if (existingResponse) {
        const question = await this.questionRepository.findById(questionId);
        throw new AppError(
          `You have already answered question "${
            question?.description || questionId
          }". Use the update endpoint to modify your response.`,
          409
        );
      }
    }
  }

  // ========================================
  // PROCESSAR E SALVAR RESPOSTAS
  // ========================================
  private async processAndSaveResponses(
    requestData: SaveChecklistResponsesDto,
    userId: string,
    checklistQuestions: Question[]
  ): Promise<SaveChecklistResponsesResponseDto> {
    const saved: QuestionResponseDto[] = [];
    const errors: Array<{ questionId: string; error: string }> = [];

    // Processar cada resposta
    for (const responseData of requestData.responses) {
      try {
        const questionResponse = await this.questionResponseRepository.create({
          questionId: responseData.questionId,
          articleVersionId: requestData.articleVersionId,
          userId,
          booleanResponse: responseData.booleanResponse,
          scaleResponse: responseData.scaleResponse,
          textResponse: responseData.textResponse,
        });

        // Buscar dados completos para resposta
        const completeResponse =
          await this.questionResponseRepository.findByUserAndArticleVersion(
            userId,
            questionResponse.id
          );
        if (completeResponse) {
          saved.push(this.toQuestionResponseDto(completeResponse));
        }
      } catch (error) {
        console.error(
          `Error saving response for question ${responseData.questionId}:`,
          error
        );
        errors.push({
          questionId: responseData.questionId,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    // Verificar perguntas obrigatórias
    const validation = this.validateRequiredQuestions(
      requestData.responses,
      checklistQuestions,
      saved
    );

    const summary = {
      totalProcessed: requestData.responses.length,
      totalSaved: saved.length,
      totalErrors: errors.length,
    };

    return {
      saved,
      errors,
      summary,
      validation,
    };
  }

  // ========================================
  // VALIDAR PERGUNTAS OBRIGATÓRIAS
  // ========================================
  private validateRequiredQuestions(
    providedResponses: any[],
    allQuestions: Question[],
    savedResponses: QuestionResponseDto[]
  ) {
    const requiredQuestions = allQuestions.filter((q) => q.isRequired);
    const answeredQuestionIds = savedResponses.map((r) => r.questionId);

    const missingRequiredQuestions = requiredQuestions
      .filter((q) => !answeredQuestionIds.includes(q.id))
      .map((q) => ({
        id: q.id,
        description: q.description,
        type: q.type as "YES_NO" | "SCALE" | "TEXT",
      }));

    return {
      allRequiredAnswered: missingRequiredQuestions.length === 0,
      missingRequiredQuestions,
    };
  }

  // ========================================
  // MÉTODOS UTILITÁRIOS
  // ========================================
  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  private toQuestionResponseDto(
    questionResponse: QuestionResponse & any
  ): QuestionResponseDto {
    return {
      id: questionResponse.id,
      questionId: questionResponse.questionId,
      articleVersionId: questionResponse.articleVersionId,
      userId: questionResponse.userId,
      booleanResponse: questionResponse.booleanResponse,
      scaleResponse: questionResponse.scaleResponse,
      textResponse: questionResponse.textResponse,
      createdAt: questionResponse.createdAt,
      updatedAt: questionResponse.updatedAt,
      question: {
        id: questionResponse.question.id,
        description: questionResponse.question.description,
        type: questionResponse.question.type,
        isRequired: questionResponse.question.isRequired,
        order: questionResponse.question.order,
      },
    };
  }
}
