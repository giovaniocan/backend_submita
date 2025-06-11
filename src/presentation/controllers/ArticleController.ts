// src/presentation/controllers/ArticleController.ts

import { Request, Response, NextFunction } from "express";
import { CreateArticleDto } from "../../application/dtos/ArticleDto";
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
