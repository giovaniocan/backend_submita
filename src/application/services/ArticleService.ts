// src/application/services/ArticleService.ts

import { ArticleRepository } from "../../infrastructure/repositories/ArticleRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { AuthRepository } from "../../infrastructure/repositories/AuthRepository";
import { ArticleKeywordService } from "./ArticleKeywordService";
import { RelatedAuthorService } from "./RelatedAuthorService";
import { ArticleVersionService } from "./ArticleVersionService";
import { AppError } from "../../shared/errors/AppError";
import { CreateArticleDto, ArticleResponseDto } from "../dtos/ArticleDto";

export class ArticleService {
  private articleRepository: ArticleRepository;
  private eventRepository: EventRepository;
  private authRepository: AuthRepository;
  private keywordService: ArticleKeywordService;
  private relatedAuthorService: RelatedAuthorService;
  private versionService: ArticleVersionService;

  constructor() {
    this.articleRepository = new ArticleRepository();
    this.eventRepository = new EventRepository();
    this.authRepository = new AuthRepository();
    this.keywordService = new ArticleKeywordService();
    this.relatedAuthorService = new RelatedAuthorService();
    this.versionService = new ArticleVersionService();
  }

  // ========================================
  // CREATE ARTICLE
  // ========================================
  async createArticle(
    articleData: CreateArticleDto
  ): Promise<ArticleResponseDto> {
    // 1️⃣ VALIDAR DADOS DE ENTRADA
    this.validateCreateData(articleData);

    // 2️⃣ VERIFICAR SE EVENTO EXISTE E ESTÁ ATIVO
    const event = await this.eventRepository.findActiveById(
      articleData.eventId
    );
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    // 3️⃣ VERIFICAR SE USUÁRIO EXISTE E É ATIVO
    const user = await this.authRepository.findActiveById(articleData.userId);
    if (!user) {
      throw new AppError("User not found or inactive", 404);
    }

    try {
      // 5️⃣ CRIAR O ARTIGO PRINCIPAL
      const articleCreateData = {
        title: articleData.title.trim(),
        summary: articleData.summary.trim(),
        thematicArea: articleData.thematicArea?.trim(),
        eventId: articleData.eventId,
        userId: articleData.userId,
        currentVersion: 1, // Primeira versão
        status: "SUBMITTED" as const, // Status padrão
      };

      const createdArticle = await this.articleRepository.create(
        articleCreateData
      );

      // 6️⃣ CRIAR KEYWORDS (se fornecidas)
      let keywords: any[] = [];
      if (articleData.keywords.length > 0) {
        keywords = await this.keywordService.createMultipleKeywords(
          createdArticle.id,
          articleData.keywords
        );
      }

      // 7️⃣ CRIAR AUTORES RELACIONADOS (se fornecidos)
      let relatedAuthors: any[] = [];
      if (articleData.relatedAuthors.length > 0) {
        relatedAuthors =
          await this.relatedAuthorService.createMultipleRelatedAuthors(
            createdArticle.id,
            articleData.relatedAuthors
          );
      }

      // 8️⃣ CRIAR PRIMEIRA VERSÃO DO ARTIGO
      const firstVersion = await this.versionService.createArticleVersion({
        articleId: createdArticle.id,
        version: 1,
        pdfPath: articleData.pdfPath,
      });

      // 🔟 MONTAR RESPOSTA COMPLETA
      const response: ArticleResponseDto = {
        id: createdArticle.id,
        title: createdArticle.title,
        summary: createdArticle.summary,
        thematicArea: createdArticle.thematicArea ?? undefined,
        currentVersion: createdArticle.currentVersion,
        evaluationsDone: createdArticle.evaluationsDone,
        status: createdArticle.status,
        eventId: createdArticle.eventId,
        userId: createdArticle.userId,
        isActive: createdArticle.isActive,
        createdAt: createdArticle.createdAt,
        updatedAt: createdArticle.updatedAt,
        keywords: keywords.map((k) => ({
          id: k.id,
          name: k.name,
        })),
        relatedAuthors: relatedAuthors.map((ra) => ({
          id: ra.id,
          coAuthorName: ra.coAuthorName,
        })),
        versions: [
          {
            id: firstVersion.id,
            version: firstVersion.version,
            pdfPath: firstVersion.pdfPath,
            createdAt: firstVersion.createdAt,
          },
        ],
      };

      return response;
    } catch (error) {
      console.error("❌ Error creating article:", error);
      throw new AppError("Failed to create article", 500);
    }
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================
  private validateCreateData(articleData: CreateArticleDto): void {
    if (!articleData.title || articleData.title.trim().length < 3) {
      throw new AppError("Title must have at least 3 characters", 400);
    }

    if (articleData.title.length > 150) {
      throw new AppError("Title cannot exceed 150 characters", 400);
    }

    if (!articleData.summary || articleData.summary.trim().length < 10) {
      throw new AppError("Summary must have at least 10 characters", 400);
    }

    if (articleData.summary.length > 300) {
      throw new AppError("Summary cannot exceed 300 characters", 400);
    }

    if (articleData.thematicArea && articleData.thematicArea.length > 150) {
      throw new AppError("Thematic area cannot exceed 150 characters", 400);
    }

    if (!articleData.pdfPath || articleData.pdfPath.trim().length === 0) {
      throw new AppError("PDF path is required", 400);
    }

    if (!this.isValidUUID(articleData.eventId)) {
      throw new AppError("Invalid event ID format", 400);
    }

    if (!this.isValidUUID(articleData.userId)) {
      throw new AppError("Invalid user ID format", 400);
    }

    // Validar keywords
    if (articleData.keywords.length > 10) {
      throw new AppError("Maximum 10 keywords allowed", 400);
    }

    for (const keyword of articleData.keywords) {
      if (!keyword || keyword.trim().length === 0) {
        throw new AppError("Keywords cannot be empty", 400);
      }
      if (keyword.length > 45) {
        throw new AppError("Keywords cannot exceed 45 characters", 400);
      }
    }

    // Validar related authors
    if (articleData.relatedAuthors.length > 20) {
      throw new AppError("Maximum 20 related authors allowed", 400);
    }

    for (const author of articleData.relatedAuthors) {
      if (!author || author.trim().length === 0) {
        throw new AppError("Related author names cannot be empty", 400);
      }
      if (author.length > 100) {
        throw new AppError(
          "Related author names cannot exceed 100 characters",
          400
        );
      }
    }
  }

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
}
