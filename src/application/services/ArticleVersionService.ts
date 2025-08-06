// src/application/services/ArticleVersionService.ts

import { ArticleVersionRepository } from "../../infrastructure/repositories/ArticleVersionRepository";
import { AppError } from "../../shared/errors/AppError";
import { ArticleVersion } from "@prisma/client";
import {
  CreateArticleVersionDto,
  NewVersionResponseDto,
} from "../dtos/ArticleVersionDto";
import { ArticleRepository } from "../../infrastructure/repositories/ArticleRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { ArticleEvaluatorAssignmentRepository } from "../../infrastructure/repositories/ArticleEvaluatorAssignmentRepository";

export class ArticleVersionService {
  private versionRepository: ArticleVersionRepository;
  private articleRepository: ArticleRepository;
  private eventRepository: EventRepository;
  private assignmentService: ArticleEvaluatorAssignmentRepository;

  constructor() {
    this.versionRepository = new ArticleVersionRepository();
    this.articleRepository = new ArticleRepository();
    this.eventRepository = new EventRepository(); // Initialize the event repository
    this.assignmentService = new ArticleEvaluatorAssignmentRepository(); // Initialize the assignment service
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
      throw new AppError("Failed to create article version", 500);
    }
  }

  async getLastVersionByArticleId(articleId: string): Promise<ArticleVersion> {
    // Validações
    if (!this.isValidUUID(articleId)) {
      throw new AppError("Invalid article ID format", 400);
    }

    try {
      const lastVersion = await this.versionRepository.findLatestByArticleId(
        articleId
      );

      if (!lastVersion) {
        throw new AppError("No versions found for this article", 404);
      }

      return lastVersion;
    } catch (error) {
      throw new AppError("Failed to fetch last version", 500);
    }
  }

  async createNewVersion(
    articleId: string,
    versionData: {
      articleId: string;
      version?: number; // Optional, will be auto-incremented
      pdfPath: string;
    },
    userId: string
  ): Promise<NewVersionResponseDto> {
    if (!this.isValidUUID(articleId)) {
      throw new AppError("Invalid article ID format", 400);
    }

    if (!this.isValidUUID(userId)) {
      throw new AppError("Invalid user ID format", 400);
    }

    if (!versionData.pdfPath || versionData.pdfPath.trim().length === 0) {
      throw new AppError("PDF path is required", 400);
    }

    const article = await this.articleRepository.findActiveById(articleId);
    if (!article) {
      throw new AppError("Article not found or inactive", 404);
    }

    if (article.userId !== userId) {
      throw new AppError(
        "You can only create new versions for your own articles",
        403
      );
    }

    if (
      article.status !== "TO_CORRECTION" &&
      article.status !== "APPROVED_WITH_REMARKS"
    ) {
      throw new AppError(
        "New version can only be created when article status is TO_CORRECTION or APPROVED_WITH_REMARKS",
        400
      );
    }

    const event = await this.eventRepository.findActiveById(article.eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    const now = new Date();
    if (now < event.submissionStartDate || now > event.submissionEndDate) {
      throw new AppError(
        "New versions can only be created during the event submission period",
        400
      );
    }

    try {
      // 5️⃣ BUSCAR PRÓXIMA VERSÃO
      const nextVersion = await this.versionRepository.getNextVersionNumber(
        articleId
      );

      // 6️⃣ CRIAR NOVA VERSÃO
      const newVersion = await this.versionRepository.create({
        articleId,
        version: nextVersion,
        pdfPath: versionData.pdfPath.trim(),
      });

      // 7️⃣ ATUALIZAR CURRENT_VERSION NO ARTIGO E STATUS
      await this.articleRepository.update(articleId, {
        currentVersion: nextVersion,
        status: "SUBMITTED", // Volta para SUBMITTED para nova avaliação
      });

      // 8️⃣ RESETAR TODOS OS ASSIGNMENTS (isCorrected = false)
      await this.assignmentService.resetAssignmentsByArticle(articleId);

      // 9️⃣ BUSCAR DADOS ATUALIZADOS
      const updatedArticle = await this.articleRepository.findById(articleId);
      if (!updatedArticle) {
        throw new AppError(
          "Failed to fetch updated article after version creation",
          500
        );
      }

      // 🔟 MONTAR RESPOSTA
      const response: NewVersionResponseDto = {
        article: {
          id: updatedArticle.id,
          title: updatedArticle.title,
          currentVersion: updatedArticle.currentVersion,
          status: updatedArticle.status,
          updatedAt: updatedArticle.updatedAt,
        },
        newVersion: {
          id: newVersion.id,
          version: newVersion.version,
          pdfPath: newVersion.pdfPath,
          createdAt: newVersion.createdAt,
        },
      };

      return response;
    } catch (error) {
      throw new AppError("Failed to create new version", 500);
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
