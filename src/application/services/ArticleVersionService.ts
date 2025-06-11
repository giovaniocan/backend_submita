// src/application/services/ArticleVersionService.ts

import { ArticleVersionRepository } from "../../infrastructure/repositories/ArticleVersionRepository";
import { AppError } from "../../shared/errors/AppError";
import { ArticleVersion } from "../../generated/prisma";
import { CreateArticleVersionDto } from "../dtos/ArticleVersionDto";

export class ArticleVersionService {
  private versionRepository: ArticleVersionRepository;

  constructor() {
    this.versionRepository = new ArticleVersionRepository();
  }

  // ========================================
  // CREATE ARTICLE VERSION
  // ========================================
  async createArticleVersion(
    versionData: CreateArticleVersionDto
  ): Promise<ArticleVersion> {
    // Validações
    if (!this.isValidUUID(versionData.articleId)) {
      throw new AppError("Invalid article ID format", 400);
    }

    if (!versionData.pdfPath || versionData.pdfPath.trim().length === 0) {
      throw new AppError("PDF path is required", 400);
    }

    if (versionData.version < 1) {
      throw new AppError("Version must be greater than 0", 400);
    }

    try {
      const createdVersion = await this.versionRepository.create({
        articleId: versionData.articleId,
        version: versionData.version,
        pdfPath: versionData.pdfPath.trim(),
      });

      return createdVersion;
    } catch (error) {
      console.error("❌ Error creating article version:", error);
      throw new AppError("Failed to create article version", 500);
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
}
