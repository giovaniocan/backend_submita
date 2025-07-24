// src/presentation/controllers/ArticleController.ts

import { Request, Response, NextFunction } from "express";
import {
  CreateArticleDto,
  UpdateArticleDto,
} from "../../application/dtos/ArticleDto";
import { ArticleService } from "../../application/services/ArticleService";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";
import { CreateNewVersionDto } from "../../application/dtos/ArticleVersionDto";
import { ArticleVersionService } from "../../application/services/ArticleVersionService";
import { ArticleStatus } from "@prisma/client";

export class ArticleController {
  private articleService: ArticleService;
  private articleVersionService: ArticleVersionService; // Assuming this is the service for handling article versions

  constructor() {
    this.articleService = new ArticleService();
    this.articleVersionService = new ArticleVersionService();
  }

  async createArticle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const articleData: CreateArticleDto = req.body;

      // Validações básicas
      if (
        !articleData.title ||
        !articleData.summary ||
        !articleData.pdfPath ||
        !articleData.eventId ||
        !articleData.userId
      ) {
        res
          .status(400)
          .json(
            ApiResponse.error(
              "Title, summary, pdfPath, eventId and userId are required",
              400
            )
          );
        return;
      }

      if (!articleData.keywords || !Array.isArray(articleData.keywords)) {
        res
          .status(400)
          .json(ApiResponse.error("Keywords must be an array", 400));
        return;
      }

      if (
        !articleData.relatedAuthors ||
        !Array.isArray(articleData.relatedAuthors)
      ) {
        res
          .status(400)
          .json(ApiResponse.error("RelatedAuthors must be an array", 400));
        return;
      }

      const article = await this.articleService.createArticle(articleData);

      res
        .status(201)
        .json(ApiResponse.success(article, "Article created successfully!"));
    } catch (error) {
      this.handleError(error, res, "Create article error");
    }
  }

  async getArticlesByEventIdAndUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const body: Object = req.body;
      const { eventId } = req.params;

      if (!eventId) {
        res.status(400).json(ApiResponse.error("Event ID is required", 400));
        return;
      }

      let userId;
      if (!userId) {
        res.status(400).json(ApiResponse.error("User ID is required", 400));
        return;
      }

      const articlesByEventId =
        await this.articleService.getArticlesByEventIdAndUserId(
          eventId,
          userId
        );

      res
        .status(200)
        .json(
          ApiResponse.success(
            articlesByEventId,
            "Articles retrieved successfully"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get articles by user error");
    }
  }

  async getArticlesById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { articleId } = req.params;
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const articlesByEventId = await this.articleService.getArticlesById(
        articleId
      );

      res
        .status(200)
        .json(
          ApiResponse.success(
            articlesByEventId,
            "Articles retrieved successfully"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get articles by user error");
    }
  }

  async getArticlesByEventId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { eventId } = req.params;

      if (!eventId) {
        res.status(400).json(ApiResponse.error("Event ID is required", 400));
        return;
      }

      const articlesByEventId = await this.articleService.getArticlesByEventId(
        eventId
      );
      
      const articlesStats = await this.articleService.getArticlesStatsByEventId(
        eventId
      );

      res
        .status(200)
        .json(
          ApiResponse.success(
            {
              articles: articlesByEventId.articles,
              stats: articlesStats
            },
            "Articles retrieved successfully"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get articles by event id error");
    }
  }

  async getArticlesByEventIdAndStatus(
    status: ArticleStatus,
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { eventId } = req.params;

      if (!eventId) {
        res.status(400).json(ApiResponse.error("Event ID is required", 400));
        return;
      }

      const articlesByEventIdAndStatus =
        await this.articleService.getArticlesByEventIdAndStatus(
          eventId,
          status
        );

      res
        .status(200)
        .json(
          ApiResponse.success(
            articlesByEventIdAndStatus,
            "Articles retrieved successfully"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get articles by event id error");
    }
  }

  async getArticlesPending(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { eventId } = req.params;

      if (!eventId) {
        res.status(400).json(ApiResponse.error("Event ID is required", 400));
        return;
      }

      const articlesByEventIdAndStatus =
        await this.articleService.getArticlesPending(eventId);

      res
        .status(200)
        .json(
          ApiResponse.success(
            articlesByEventIdAndStatus,
            "Pending articles retrieved successfully"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get pending articles by event id error");
    }
  }

  async assignEvaluatorsToArticle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { articleId } = req.params;
      const { evaluators } = req.body;

      if (!articleId || !evaluators || !Array.isArray(evaluators)) {
        res
          .status(400)
          .json(
            ApiResponse.error("Article ID and evaluators are required", 400)
          );
        return;
      }

      if (evaluators.length === 0) {
        res
          .status(400)
          .json(ApiResponse.error("At least one evaluator is required", 400));
        return;
      }

      const result = await this.articleService.assignEvaluatorsToArticle(
        articleId,
        evaluators
      );

      // Determinar status code baseado no resultado
      const statusCode = result.summary.totalAssigned > 0 ? 201 : 400;

      // Mensagem personalizada
      let message = "";
      if (result.summary.totalAssigned === result.summary.totalRequested) {
        message = `All ${result.summary.totalAssigned} evaluator(s) assigned successfully!`;
      } else if (result.summary.totalAssigned > 0) {
        message = `${result.summary.totalAssigned} of ${result.summary.totalRequested} evaluator(s) assigned successfully!`;
      } else {
        message = "No evaluators were assigned";
      }

      res.status(statusCode).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Assign evaluators to article error");
    }
  }

  async getArticlesByUserId(
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

      const articlesByUserId = await this.articleService.getArticlesByUserId(
        user.id
      );

      res
        .status(200)
        .json(
          ApiResponse.success(
            articlesByUserId,
            "Articles retrieved successfully"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get articles by user error");
    }
  }

  async getArticlesForEvaluator(
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
            ApiResponse.error("Only evaluators can access this endpoint", 403)
          );
        return;
      }

      // Extrair filtros da query string
      const filters = {
        search: req.query.search as string,
        status: req.query.status as string,
        eventId: req.query.eventId as string,
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
      };

      // Validações básicas
      if (filters.page < 1) {
        res
          .status(400)
          .json(ApiResponse.error("Page must be greater than 0", 400));
        return;
      }

      if (filters.limit < 1 || filters.limit > 100) {
        res
          .status(400)
          .json(ApiResponse.error("Limit must be between 1 and 100", 400));
        return;
      }

      const result = await this.articleService.getArticlesForEvaluator(
        user.id,
        filters
      );

      // Mensagem personalizada
      let message = `${result.total} article(s) assigned for evaluation`;
      if (filters.search) {
        message += ` (searching: "${filters.search}")`;
      }
      if (filters.status) {
        message += ` (status: ${filters.status})`;
      }
      if (filters.eventId) {
        message += ` (event: ${filters.eventId})`;
      }

      res.status(200).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Get articles for evaluator error");
    }
  }

  async updateArticle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const updateData: UpdateArticleDto = req.body;
    const { articleId } = req.params;
    const currentUser = req.user;

    if (!articleId) {
      res.status(400).json(ApiResponse.error("Article ID is required", 400));
      return;
    }

    if (!currentUser) {
      res.status(401).json(ApiResponse.error("User not authenticated", 401));
      return;
    }

    try {
      const updatedArticle = await this.articleService.updateArticle(
        articleId,
        updateData,
        currentUser.id
      );

      if (!updatedArticle) {
        res.status(404).json(ApiResponse.error("Article not found", 404));
        return;
      }

      res
        .status(200)
        .json(
          ApiResponse.success(updatedArticle, "Article updated successfully!")
        );
    } catch (error) {
      this.handleError(error, res, "Update article error");
    }
  }

  async removeEvaluatorFromArticle(req: Request, res: Response): Promise<void> {
    const { articleId } = req.params;
    const { userId } = req.body;
    const currentUser = req.user;

    if (!currentUser) {
      res.status(401).json(ApiResponse.error("User not authenticated", 401));
      return;
    }

    if (!articleId || !userId) {
      res
        .status(400)
        .json(ApiResponse.error("Article ID and evaluator are required", 400));
      return;
    }

    // Coordenadores podem remover qualquer avaliador
    // Avaliadores podem remover apenas a si mesmos
    if (currentUser.role === "EVALUATOR" && currentUser.id !== userId) {
      res
        .status(403)
        .json(ApiResponse.error("Evaluators can only remove themselves", 403));
      return;
    }

    try {
      const result = await this.articleService.removeEvaluatorFromArticle(
        articleId,
        userId
      );

      if (result) {
        res
          .status(200)
          .json(ApiResponse.success(null, "Evaluator removed successfully!"));
      }
    } catch (error) {
      this.handleError(error, res, "Remove evaluators from article error");
    }
  }

  async createNewVersion(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { articleId } = req.params;
      const versionData: CreateNewVersionDto = req.body;
      const currentUser = req.user;

      // Validações básicas
      if (!articleId) {
        res.status(400).json(ApiResponse.error("Article ID is required", 400));
        return;
      }

      if (!currentUser) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      if (!versionData.pdfPath || versionData.pdfPath.trim().length === 0) {
        res.status(400).json(ApiResponse.error("PDF path is required", 400));
        return;
      }

      const result = await this.articleVersionService.createNewVersion(
        articleId,
        {
          articleId: articleId,
          pdfPath: versionData.pdfPath.trim(),
        },
        currentUser.id
      );

      res
        .status(201)
        .json(ApiResponse.success(result, "New version created successfully!"));
    } catch (error) {
      this.handleError(error, res, "Create new version error");
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
