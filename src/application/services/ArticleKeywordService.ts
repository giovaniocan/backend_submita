// src/application/services/ArticleKeywordService.ts

import { ArticleKeywordRepository } from "../../infrastructure/repositories/ArticleKeywordRepository";
import { AppError } from "../../shared/errors/AppError";
import { ArticleKeyword } from "@prisma/client";

export class ArticleKeywordService {
  private keywordRepository: ArticleKeywordRepository;

  constructor() {
    this.keywordRepository = new ArticleKeywordRepository();
  }

  // ========================================
  // CREATE MULTIPLE KEYWORDS
  // ========================================
  async createMultipleKeywords(
    articleId: string,
    keywords: string[]
  ): Promise<ArticleKeyword[]> {
    // Validações
    if (!this.isValidUUID(articleId)) {
      throw new AppError("Invalid article ID format", 400);
    }

    if (!keywords || keywords.length === 0) {
      throw new AppError("Keywords array cannot be empty", 400);
    }

    // Filtrar keywords vazias e duplicadas
    const cleanKeywords = [
      ...new Set(keywords.map((k) => k.trim()).filter((k) => k.length > 0)),
    ];

    if (cleanKeywords.length === 0) {
      throw new AppError("No valid keywords provided", 400);
    }

    try {
      const createdKeywords = await this.keywordRepository.createMultiple(
        articleId,
        cleanKeywords
      );

      return createdKeywords;
    } catch (error) {
      throw new AppError("Failed to create keywords", 500);
    }
  }

  async updateKeywords(articleId: string, keywords: string[]): Promise<void> {
    await this.keywordRepository.deleteByArticleId(articleId);
    await this.keywordRepository.createMultiple(articleId, keywords);
  }

  async deleteAllKeywords(articleId: string): Promise<void> {
    await this.keywordRepository.deleteByArticleId(articleId);
  }

  async getKeywordsByArticleId(articleId: string): Promise<ArticleKeyword[]> {
    return await this.keywordRepository.findByArticleId(articleId);
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================
  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
}
