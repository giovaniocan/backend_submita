// src/presentation/controllers/ArticleController.ts

import { Request, Response, NextFunction } from "express";
import {
  CreateArticleDto,
  UpdateArticleDto,
} from "../../application/dtos/ArticleDto";
import { ArticleService } from "../../application/services/ArticleService";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

export class ArticleController {
  private articleService: ArticleService;

  constructor() {
    this.articleService = new ArticleService();
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

    if (!articleId || !userId) {
      res
        .status(400)
        .json(ApiResponse.error("Article ID and evaluator are required", 400));
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

    console.error(`❌ ${context}:`, error);
    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
