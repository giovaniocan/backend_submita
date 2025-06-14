import { Request, Response, NextFunction } from "express";
import { EvaluationService } from "../../application/services/EvaluationService";
import { CreateEvaluationDto } from "../../application/dtos/EvaluationDto";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

export class EvaluationController {
  private evaluationService: EvaluationService;

  constructor() {
    this.evaluationService = new EvaluationService();
  }

  async createEvaluation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {
        articleVersionId,
        grade,
        evaluationDescription,
        status,
      }: CreateEvaluationDto = req.body;
      const user = req.user;

      console.log("Request body:", req.body);
      console.log("User from token:", user);

      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      if (grade === undefined || grade === null) {
        res.status(400).json(ApiResponse.error("Grade is required", 400));
        return;
      }

      if (!articleVersionId) {
        res
          .status(400)
          .json(ApiResponse.error("Article version ID is required", 400));
        return;
      }

      if (typeof grade !== "number" || grade < 0 || grade > 10) {
        res
          .status(400)
          .json(
            ApiResponse.error("Grade must be a number between 0 and 10", 400)
          );
        return;
      }

      const validStatuses = ["APPROVED", "TO_CORRECTION", "REJECTED"];
      if (!validStatuses.includes(status?.trim())) {
        res
          .status(400)
          .json(
            ApiResponse.error(
              "Invalid evaluation status. Must be: APPROVED, TO_CORRECTION, or REJECTED",
              400
            )
          );
        return;
      }

      const evaluationData: CreateEvaluationDto = {
        grade: Number(grade), // Garantir que é número
        evaluationDescription: evaluationDescription?.trim() || undefined,
        articleVersionId: articleVersionId.trim(),
        status: status,
      };

      // 5️⃣ CHAMAR O SERVICE (passa o userId do token)
      const result = await this.evaluationService.createEvaluation(
        evaluationData,
        user.id // userId do token
      );

      // 6️⃣ DETERMINAR MENSAGEM DE RESPOSTA
      let message = "Evaluation submitted successfully!";
      let statusCode = 201;

      if (result.articleFinalized) {
        message = `Evaluation submitted successfully! Article has been ${result.finalStatus?.toLowerCase()} with final grade ${
          result.finalGrade
        }`;
        statusCode = 201; // Criado com sucesso + artigo finalizado
      }

      // 7️⃣ RETORNAR RESPOSTA
      res.status(statusCode).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Error creating evaluation");
    }
  }

  async deleteEvaluation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // 1️⃣ VERIFICAR AUTENTICAÇÃO
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      // 2️⃣ EXTRAIR E VALIDAR ID
      const { evaluationId } = req.params;

      if (!evaluationId) {
        res
          .status(400)
          .json(ApiResponse.error("Evaluation ID is required", 400));
        return;
      }

      if (!this.isValidUUID(evaluationId)) {
        res
          .status(400)
          .json(ApiResponse.error("Invalid evaluation ID format", 400));
        return;
      }

      // 3️⃣ CHAMAR O SERVICE
      const result = await this.evaluationService.deleteEvaluation(
        evaluationId,
        user.id,
        user.role
      );

      // 4️⃣ DETERMINAR MENSAGEM PERSONALIZADA
      let message = "Evaluation deleted successfully!";

      // ✅ MENSAGENS ESPECÍFICAS BASEADAS NO IMPACTO
      if (result.impactSummary.requiresReassignment) {
        message +=
          " Article returned to SUBMITTED status and requires new evaluation assignment.";
      } else if (result.impactSummary.articleStatusChanged) {
        message += ` Article status changed to ${result.impactSummary.newArticleStatus}.`;
      }

      if (result.impactSummary.wasFinalized) {
        message +=
          " The article was previously finalized and has been returned to evaluation.";
      }

      // 5️⃣ INFORMAÇÕES ADICIONAIS PARA DEBUGGING
      const additionalInfo = {
        evaluationsRemaining: result.impactSummary.evaluationsRemaining,
        statusChanged: result.impactSummary.articleStatusChanged,
        questionResponsesDeleted: true, // Sempre deleta conforme regra
        rulesApplied: {
          "Only own evaluations": "✅ Verified",
          "Version restrictions": "✅ Only current version allowed",
          "Time restrictions": "✅ Applied based on article status",
          "Question responses": "✅ Deleted together",
        },
      };

      // 6️⃣ RESPOSTA FINAL
      res.status(200).json(
        ApiResponse.success(
          {
            ...result,
            additionalInfo,
          },
          message
        )
      );
    } catch (error) {
      this.handleError(error, res, "Delete evaluation error");
    }
  }

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

    console.error(`❌ ${context}:`, error);
    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
