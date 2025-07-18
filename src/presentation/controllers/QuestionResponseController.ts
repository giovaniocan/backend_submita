// src/presentation/controllers/QuestionResponseController.ts

import { Request, Response, NextFunction } from "express";
import { QuestionResponseService } from "../../application/services/QuestionResponseService";
import {
  SaveChecklistResponsesDto,
  UpdateMultipleQuestionResponsesDto,
} from "../../application/dtos/QuestionResponseDto";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

export class QuestionResponseController {
  private questionResponseService: QuestionResponseService;

  constructor() {
    this.questionResponseService = new QuestionResponseService();
  }

  // ========================================
  // SALVAR RESPOSTAS DO CHECKLIST
  // ========================================
  async saveChecklistResponses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const { articleVersionId, responses } = req.body;

      // ========================================
      // VALIDAÇÕES BÁSICAS
      // ========================================
      if (!articleVersionId) {
        res
          .status(400)
          .json(ApiResponse.error("Article Version ID is required", 400));
        return;
      }

      if (!this.isValidUUID(articleVersionId)) {
        res
          .status(400)
          .json(ApiResponse.error("Invalid Article Version ID format", 400));
        return;
      }

      if (!responses || !Array.isArray(responses)) {
        res
          .status(400)
          .json(ApiResponse.error("Responses array is required", 400));
        return;
      }

      if (responses.length === 0) {
        res
          .status(400)
          .json(ApiResponse.error("Responses array cannot be empty", 400));
        return;
      }

      // ========================================
      // VALIDAR CADA RESPOSTA NO ARRAY
      // ========================================
      for (const [index, response] of responses.entries()) {
        // Validar questionId
        if (!response.questionId) {
          res
            .status(400)
            .json(
              ApiResponse.error(
                `Response ${index + 1}: Question ID is required`,
                400
              )
            );
          return;
        }

        if (!this.isValidUUID(response.questionId)) {
          res
            .status(400)
            .json(
              ApiResponse.error(
                `Response ${index + 1}: Invalid Question ID format`,
                400
              )
            );
          return;
        }

        // Validar que apenas um tipo de resposta foi fornecido
        const responseValues = [
          response.booleanResponse,
          response.scaleResponse,
          response.textResponse,
        ].filter((r) => r !== undefined && r !== null && r !== "");

        if (responseValues.length === 0) {
          res
            .status(400)
            .json(
              ApiResponse.error(
                `Response ${
                  index + 1
                }: At least one response value is required`,
                400
              )
            );
          return;
        }

        if (responseValues.length > 1) {
          res
            .status(400)
            .json(
              ApiResponse.error(
                `Response ${
                  index + 1
                }: Only one type of response can be provided`,
                400
              )
            );
          return;
        }

        // Validar resposta de escala (1-5)
        if (response.scaleResponse !== undefined) {
          if (
            typeof response.scaleResponse !== "number" ||
            response.scaleResponse < 1 ||
            response.scaleResponse > 5
          ) {
            res
              .status(400)
              .json(
                ApiResponse.error(
                  `Response ${
                    index + 1
                  }: Scale response must be a number between 1 and 5`,
                  400
                )
              );
            return;
          }
        }

        // Validar resposta de texto (não pode ser vazia se fornecida)
        if (response.textResponse !== undefined) {
          if (
            typeof response.textResponse !== "string" ||
            response.textResponse.trim().length === 0
          ) {
            res
              .status(400)
              .json(
                ApiResponse.error(
                  `Response ${index + 1}: Text response cannot be empty`,
                  400
                )
              );
            return;
          }
        }

        // Validar resposta boolean
        if (response.booleanResponse !== undefined) {
          if (typeof response.booleanResponse !== "boolean") {
            res
              .status(400)
              .json(
                ApiResponse.error(
                  `Response ${
                    index + 1
                  }: Boolean response must be true or false`,
                  400
                )
              );
            return;
          }
        }
      }

      // ========================================
      // VERIFICAR QUESTIONIDS DUPLICADOS
      // ========================================
      const questionIds = responses.map((r) => r.questionId);
      const uniqueQuestionIds = new Set(questionIds);

      if (questionIds.length !== uniqueQuestionIds.size) {
        res
          .status(400)
          .json(
            ApiResponse.error("Duplicate question IDs are not allowed", 400)
          );
        return;
      }

      // ========================================
      // PREPARAR DADOS E CHAMAR SERVICE
      // ========================================
      const requestData: SaveChecklistResponsesDto = {
        articleVersionId: articleVersionId.trim(),
        responses: responses.map((r) => ({
          questionId: r.questionId.trim(),
          booleanResponse: r.booleanResponse,
          scaleResponse: r.scaleResponse,
          textResponse: r.textResponse?.trim(),
        })),
      };

      const result = await this.questionResponseService.saveChecklistResponses(
        requestData,
        user.id
      );

      // ========================================
      // DETERMINAR STATUS CODE E MENSAGEM
      // ========================================
      let statusCode = 201;
      let message = "";

      if (result.summary.totalSaved === result.summary.totalProcessed) {
        // Todas as respostas foram salvas
        if (result.validation.allRequiredAnswered) {
          message = `All ${result.summary.totalSaved} response(s) saved successfully! Checklist is complete.`;
        } else {
          message = `All ${result.summary.totalSaved} response(s) saved successfully! Warning: ${result.validation.missingRequiredQuestions.length} required question(s) still missing.`;
          statusCode = 201; // Ainda é sucesso, mas com aviso
        }
      } else if (result.summary.totalSaved > 0) {
        // Algumas respostas foram salvas
        message = `${result.summary.totalSaved} of ${result.summary.totalProcessed} response(s) saved successfully!`;
        statusCode = 207; // Multi-status (sucesso parcial)
      } else {
        // Nenhuma resposta foi salva
        message = "No responses were saved due to errors";
        statusCode = 400;
      }

      res.status(statusCode).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Save checklist responses error");
    }
  }

  async updateMultipleQuestionResponses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      // VALIDAÇÕES BÁSICAS
      const { responses } = req.body;

      // ========================================
      // VALIDAÇÕES BÁSICAS
      // ========================================
      if (!responses || !Array.isArray(responses) || responses.length === 0) {
        res
          .status(400)
          .json(
            ApiResponse.error(
              "Responses array is required and cannot be empty",
              400
            )
          );
        return;
      }

      // Validar cada resposta no array
      for (const [index, response] of responses.entries()) {
        // Validar responseId
        if (!response.responseId || !this.isValidUUID(response.responseId)) {
          res
            .status(400)
            .json(
              ApiResponse.error(
                `Response ${index + 1}: Valid response ID is required`,
                400
              )
            );
          return;
        }

        // Verificar se pelo menos um valor foi fornecido
        const responseValues = [
          response.booleanResponse,
          response.scaleResponse,
          response.textResponse,
        ].filter((r) => r !== undefined && r !== null && r !== "");

        if (responseValues.length === 0) {
          res
            .status(400)
            .json(
              ApiResponse.error(
                `Response ${
                  index + 1
                }: At least one response value is required`,
                400
              )
            );
          return;
        }

        if (responseValues.length > 1) {
          res
            .status(400)
            .json(
              ApiResponse.error(
                `Response ${
                  index + 1
                }: Only one type of response can be provided`,
                400
              )
            );
          return;
        }

        // Validar scale response
        if (response.scaleResponse !== undefined) {
          if (
            typeof response.scaleResponse !== "number" ||
            response.scaleResponse < 1 ||
            response.scaleResponse > 5
          ) {
            res
              .status(400)
              .json(
                ApiResponse.error(
                  `Response ${
                    index + 1
                  }: Scale response must be a number between 1 and 5`,
                  400
                )
              );
            return;
          }
        }

        // Validar text response
        if (response.textResponse !== undefined) {
          if (
            typeof response.textResponse !== "string" ||
            response.textResponse.trim().length === 0
          ) {
            res
              .status(400)
              .json(
                ApiResponse.error(
                  `Response ${index + 1}: Text response cannot be empty`,
                  400
                )
              );
            return;
          }
        }

        // Validar boolean response
        if (response.booleanResponse !== undefined) {
          if (typeof response.booleanResponse !== "boolean") {
            res
              .status(400)
              .json(
                ApiResponse.error(
                  `Response ${
                    index + 1
                  }: Boolean response must be true or false`,
                  400
                )
              );
            return;
          }
        }
      }

      // ========================================
      // VERIFICAR RESPONSEIDS DUPLICADOS
      // ========================================
      const responseIds = responses.map((r) => r.responseId);
      const uniqueResponseIds = new Set(responseIds);

      if (responseIds.length !== uniqueResponseIds.size) {
        res
          .status(400)
          .json(
            ApiResponse.error("Duplicate response IDs are not allowed", 400)
          );
        return;
      }

      // ========================================
      // PREPARAR DADOS E CHAMAR SERVICE
      // ========================================
      const updateData: UpdateMultipleQuestionResponsesDto = {
        responses: responses.map((r) => ({
          responseId: r.responseId.trim(),
          booleanResponse: r.booleanResponse,
          scaleResponse: r.scaleResponse,
          textResponse: r.textResponse?.trim(),
        })),
      };

      const result =
        await this.questionResponseService.updateMultipleQuestionResponses(
          updateData,
          user.id
        );

      // ========================================
      // DETERMINAR STATUS CODE E MENSAGEM
      // ========================================
      let statusCode = 200;
      let message = "";

      if (result.summary.totalUpdated === result.summary.totalProcessed) {
        message = `All ${result.summary.totalUpdated} response(s) updated successfully!`;
      } else if (result.summary.totalUpdated > 0) {
        message = `${result.summary.totalUpdated} of ${result.summary.totalProcessed} response(s) updated successfully!`;
        statusCode = 207; // Multi-status (sucesso parcial)
      } else {
        message = "No responses were updated due to errors";
        statusCode = 400;
      }

      res.status(statusCode).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Update multiple question responses error");
    }
  }

  async deleteQuestionResponse(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const { responseId } = req.params;

      // ========================================pqest
      // VALIDAÇÕES BÁSICAS
      // ========================================
      if (!responseId) {
        res.status(400).json(ApiResponse.error("Response ID is required", 400));
        return;
      }

      if (!this.isValidUUID(responseId)) {
        res
          .status(400)
          .json(ApiResponse.error("Invalid Response ID format", 400));
        return;
      }

      // ========================================
      // CHAMAR SERVICE
      // ========================================
      const result = await this.questionResponseService.deleteQuestionResponse(
        responseId,
        user.id
      );

      // ========================================
      // RESPOSTA DE SUCESSO
      // ========================================
      res.status(200).json(ApiResponse.success(result, result.message));
    } catch (error) {
      this.handleError(error, res, "Delete question response error");
    }
  }

  async clearAllChecklistResponses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const { evaluationId } = req.params;

      // ========================================
      // VALIDAÇÕES BÁSICAS
      // ========================================
      if (!evaluationId) {
        res
          .status(400)
          .json(ApiResponse.error("EvaluationID is required", 400));
        return;
      }

      if (!this.isValidUUID(evaluationId)) {
        res
          .status(400)
          .json(ApiResponse.error("Invalid Evaluation ID format", 400));
        return;
      }

      // ========================================
      // CHAMAR SERVICE
      // ========================================
      const result =
        await this.questionResponseService.clearAllChecklistResponses(
          evaluationId,
          user.id
        );

      // ========================================
      // RESPOSTA DE SUCESSO
      // ========================================
      res.status(200).json(ApiResponse.success(result, result.message));
    } catch (error) {
      this.handleError(error, res, "Clear all checklist responses error");
    }
  }
  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================
  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

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
