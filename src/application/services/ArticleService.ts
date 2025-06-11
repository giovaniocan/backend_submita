// src/application/services/ArticleService.ts

import { ArticleRepository } from "../../infrastructure/repositories/ArticleRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { AuthRepository } from "../../infrastructure/repositories/AuthRepository";
import { ArticleKeywordService } from "./ArticleKeywordService";
import { RelatedAuthorService } from "./RelatedAuthorService";
import { ArticleVersionService } from "./ArticleVersionService";
import { AppError } from "../../shared/errors/AppError";
import { CreateArticleDto, ArticleResponseDto } from "../dtos/ArticleDto";
import {
  AssignedEvaluatorDto,
  AssignEvaluatorsResponseDto,
} from "../dtos/AssignEvaluatorToArticleDto";
import { EventEvaluatorRepository } from "../../infrastructure/repositories/EventEvaluatorRepository";
import { ArticleEvaluatorAssignmentRepository } from "../../infrastructure/repositories/ArticleEvaluatorAssignmentRepository";

export class ArticleService {
  private articleRepository: ArticleRepository;
  private eventRepository: EventRepository;
  private authRepository: AuthRepository;
  private keywordService: ArticleKeywordService;
  private relatedAuthorService: RelatedAuthorService;
  private versionService: ArticleVersionService;
  private eventEvaluatorRepository: EventEvaluatorRepository;
  private assignmentRepository: ArticleEvaluatorAssignmentRepository;

  constructor() {
    this.articleRepository = new ArticleRepository();
    this.eventRepository = new EventRepository();
    this.authRepository = new AuthRepository();
    this.keywordService = new ArticleKeywordService();
    this.relatedAuthorService = new RelatedAuthorService();
    this.versionService = new ArticleVersionService();
    this.eventEvaluatorRepository = new EventEvaluatorRepository();
    this.assignmentRepository = new ArticleEvaluatorAssignmentRepository();
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

  async assignEvaluatorsToArticle(
    articleId: string,
    evaluatorIds: string[]
  ): Promise<AssignEvaluatorsResponseDto> {
    const article = await this.articleRepository.findById(articleId);
    if (!article) {
      throw new AppError("Article not found", 404);
    }

    if (article.status !== "SUBMITTED") {
      throw new AppError(
        "Article must be in SUBMITTED status to assign evaluators",
        400
      );
    }

    if (!Array.isArray(evaluatorIds) || evaluatorIds.length === 0) {
      throw new AppError("Evaluators must be a non-empty array", 400);
    }

    const event = await this.eventRepository.findActiveById(article.eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    const maxEvaluators = this.getMaxEvaluatorsByType(event.evaluationType);

    const currentAssignments = await this.assignmentRepository.countByArticleId(
      articleId
    );
    const remainingSlots = maxEvaluators - currentAssignments;

    if (remainingSlots <= 0) {
      throw new AppError(
        `Article already has maximum evaluators for ${event.evaluationType} evaluation (${maxEvaluators})`,
        400
      );
    }

    const requestedIds = evaluatorIds.slice(0, remainingSlots);

    if (requestedIds.length < evaluatorIds.length) {
      console.warn(
        `Only ${remainingSlots} slots available, limiting assignment`
      );
    }

    // 7️⃣ PROCESSAR CADA AVALIADOR
    const assigned: AssignedEvaluatorDto[] = [];
    const skipped: string[] = [];
    const errors: string[] = [];

    for (const evaluatorId of requestedIds) {
      if (!this.isValidUUID(evaluatorId)) {
        errors.push(`Invalid evaluator ID format: ${evaluatorId}`);
        continue;
      }

      try {
        // Verificar se o avaliador está no evento
        const eventEvaluator =
          await this.eventEvaluatorRepository.findByEventAndUser(
            article.eventId,
            evaluatorId
          );

        if (!eventEvaluator || !eventEvaluator.isActive) {
          errors.push(`Evaluator ${evaluatorId} not found in this event`);
          continue;
        }

        // Verificar se já está atribuído
        const existingAssignment =
          await this.assignmentRepository.findByArticleAndUser(
            articleId,
            evaluatorId
          );

        if (existingAssignment) {
          skipped.push(evaluatorId);
          continue;
        }

        // Criar atribuição
        const newAssignment = await this.assignmentRepository.create({
          eventEvaluatorId: eventEvaluator.id,
          articleId,
          userId: evaluatorId,
        });

        assigned.push({
          id: newAssignment.id,
          eventEvaluatorId: newAssignment.eventEvaluatorId,
          articleId: newAssignment.articleId,
          userId: newAssignment.userId,
          isCorrected: newAssignment.isCorrected,
          assignedAt: newAssignment.assignedAt,
        });
      } catch (error) {
        console.error(`Error assigning evaluator ${evaluatorId}:`, error);
        errors.push(`Error assigning evaluator ${evaluatorId}`);
      }
    }

    // Always return a response at the end
    const response: AssignEvaluatorsResponseDto = {
      articleId,
      eventId: article.eventId,
      evaluationType: event.evaluationType,
      maxEvaluators,
      assignedEvaluators: assigned,
      summary: {
        totalRequested: evaluatorIds.length,
        totalAssigned: assigned.length,
        totalSkipped: skipped.length,
        totalErrors: errors.length,
      },
      skipped,
      errors,
    };

    return response;
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

  private getMaxEvaluatorsByType(evaluationType: string): number {
    switch (evaluationType) {
      case "DIRECT":
        return 1;
      case "PAIR":
        return 2;
      case "PANEL":
        return 5; // Você pode ajustar este número
      default:
        return 1;
    }
  }

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
}
