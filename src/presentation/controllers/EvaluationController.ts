import { Request, Response, NextFunction } from "express";
import { EvaluationService } from "../../application/services/EvaluationService";
import {
  CreateEvaluationDto,
  ListEvaluationsDto,
  UpdateEvaluationDto,
} from "../../application/dtos/EvaluationDto";
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

  async getEvaluationById(
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
      const evaluation = await this.evaluationService.getEvaluationById(
        evaluationId,
        user.id,
        user.role
      );

      // 4️⃣ RESPOSTA
      res
        .status(200)
        .json(
          ApiResponse.success(evaluation, "Evaluation retrieved successfully!")
        );
    } catch (error) {
      this.handleError(error, res, "Get evaluation by ID error");
    }
  }

  // ========================================
  // GET EVALUATIONS WITH FILTERS
  // ========================================
  async getEvaluationsWithFilters(
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

      // 2️⃣ EXTRAIR FILTROS DA QUERY STRING
      const filters: ListEvaluationsDto = {
        page: req.query.page ? parseInt(req.query.page as string) : undefined,
        limit: req.query.limit
          ? parseInt(req.query.limit as string)
          : undefined,
        articleId: req.query.articleId as string,
        articleVersionId: req.query.articleVersionId as string,
        evaluatorId: req.query.evaluatorId as string,
        status: req.query.status as "TO_CORRECTION" | "APPROVED" | "REJECTED",
        eventId: req.query.eventId as string,
        gradeMin: req.query.gradeMin
          ? parseFloat(req.query.gradeMin as string)
          : undefined,
        gradeMax: req.query.gradeMax
          ? parseFloat(req.query.gradeMax as string)
          : undefined,
        dateFrom: req.query.dateFrom
          ? new Date(req.query.dateFrom as string)
          : undefined,
        dateTo: req.query.dateTo
          ? new Date(req.query.dateTo as string)
          : undefined,
      };

      // 3️⃣ VALIDAÇÕES BÁSICAS (as principais são feitas no service)
      if (filters.page && filters.page < 1) {
        res
          .status(400)
          .json(ApiResponse.error("Page must be greater than 0", 400));
        return;
      }

      if (filters.limit && (filters.limit < 1 || filters.limit > 100)) {
        res
          .status(400)
          .json(ApiResponse.error("Limit must be between 1 and 100", 400));
        return;
      }

      // Validar datas se fornecidas
      if (filters.dateFrom && isNaN(filters.dateFrom.getTime())) {
        res.status(400).json(ApiResponse.error("Invalid dateFrom format", 400));
        return;
      }

      if (filters.dateTo && isNaN(filters.dateTo.getTime())) {
        res.status(400).json(ApiResponse.error("Invalid dateTo format", 400));
        return;
      }

      // 4️⃣ CHAMAR O SERVICE
      const result = await this.evaluationService.getEvaluationsWithFilters(
        filters,
        user.id,
        user.role
      );

      // 5️⃣ MENSAGEM PERSONALIZADA
      let message = `${result.total} evaluation(s) retrieved successfully!`;

      // Adicionar contexto baseado nos filtros aplicados
      const appliedFilters = [];
      if (result.filters.articleId) appliedFilters.push("specific article");
      if (result.filters.evaluatorId) appliedFilters.push("specific evaluator");
      if (result.filters.eventId) appliedFilters.push("specific event");
      if (result.filters.status)
        appliedFilters.push(`status: ${result.filters.status}`);
      if (result.filters.gradeRange) {
        const { min, max } = result.filters.gradeRange;
        if (min !== undefined && max !== undefined) {
          appliedFilters.push(`grades: ${min}-${max}`);
        } else if (min !== undefined) {
          appliedFilters.push(`grades ≥ ${min}`);
        } else if (max !== undefined) {
          appliedFilters.push(`grades ≤ ${max}`);
        }
      }

      if (appliedFilters.length > 0) {
        message += ` (Filtered by: ${appliedFilters.join(", ")})`;
      }

      // 6️⃣ RESPOSTA
      res.status(200).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Get evaluations with filters error");
    }
  }

  // ========================================
  // MÉTODO DE CONVENIÊNCIA - MINHAS AVALIAÇÕES (Para Evaluators)
  // ========================================
  async getMyEvaluations(
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

      // Verificar se é EVALUATOR
      if (user.role !== "EVALUATOR") {
        res
          .status(403)
          .json(
            ApiResponse.error("Only evaluators can use this endpoint", 403)
          );
        return;
      }

      // Extrair filtros básicos
      const filters: ListEvaluationsDto = {
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
        evaluatorId: user.id, // Forçar apenas avaliações do usuário atual
        status: req.query.status as "TO_CORRECTION" | "APPROVED" | "REJECTED",
        eventId: req.query.eventId as string,
        dateFrom: req.query.dateFrom
          ? new Date(req.query.dateFrom as string)
          : undefined,
        dateTo: req.query.dateTo
          ? new Date(req.query.dateTo as string)
          : undefined,
      };

      const result = await this.evaluationService.getEvaluationsWithFilters(
        filters,
        user.id,
        user.role
      );

      res
        .status(200)
        .json(
          ApiResponse.success(
            result,
            `Your ${result.total} evaluation(s) retrieved successfully!`
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get my evaluations error");
    }
  }

  // ========================================
  // MÉTODO DE CONVENIÊNCIA - AVALIAÇÕES DE UM ARTIGO
  // ========================================
  async getArticleEvaluations(
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

      const { articleId } = req.params;
      if (!articleId || !this.isValidUUID(articleId)) {
        res
          .status(400)
          .json(ApiResponse.error("Valid article ID is required", 400));
        return;
      }

      const filters: ListEvaluationsDto = {
        articleId: articleId,
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
      };

      const result = await this.evaluationService.getEvaluationsWithFilters(
        filters,
        user.id,
        user.role
      );

      console.log("Result:", result);

      res
        .status(200)
        .json(
          ApiResponse.success(
            result,
            `${result.total} evaluation(s) found for article ${articleId}`
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get article evaluations error");
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

  async updateEvaluation(
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
      if (!evaluationId || !this.isValidUUID(evaluationId)) {
        res
          .status(400)
          .json(ApiResponse.error("Valid evaluation ID required", 400));
        return;
      }

      // Extrair dados de atualização
      const updateData: UpdateEvaluationDto = {};

      if (req.body.grade !== undefined) {
        const grade = Number(req.body.grade);
        if (isNaN(grade) || grade < 0 || grade > 10) {
          res
            .status(400)
            .json(ApiResponse.error("Grade must be between 0 and 10", 400));
          return;
        }
        updateData.grade = grade;
      }

      if (req.body.evaluationDescription !== undefined) {
        updateData.evaluationDescription =
          req.body.evaluationDescription.trim();
      }

      if (req.body.status) {
        const validStatuses = ["TO_CORRECTION", "APPROVED", "REJECTED"];
        if (!validStatuses.includes(req.body.status)) {
          res.status(400).json(ApiResponse.error("Invalid status", 400));
          return;
        }
        updateData.status = req.body.status;
      }

      // Verificar se há dados para atualizar
      if (Object.keys(updateData).length === 0) {
        res
          .status(400)
          .json(ApiResponse.error("No data provided for update", 400));
        return;
      }

      // Chamar service
      const result = await this.evaluationService.updateEvaluation(
        evaluationId,
        updateData,
        user.id,
        user.role
      );

      // Mensagem simples
      let message = "Evaluation updated successfully!";
      if (result.articleUpdated) {
        message += ` Article status updated to ${result.newArticleStatus}`;
      }

      res.status(200).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Update evaluation error");
    }
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
