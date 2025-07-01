// src/infrastructure/repositories/ArticleRepository.ts

import { Article, ArticleStatus, ArticleEvaluatorAssignment } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

interface CreateArticleData {
  title: string;
  summary: string;
  thematicArea?: string;
  eventId: string;
  userId: string;
  currentVersion: number;
  status:
    | "SUBMITTED"
    | "IN_EVALUATION"
    | "APPROVED"
    | "IN_CORRECTION"
    | "REJECTED";
}

export class ArticleRepository {
  // ========================================
  // CREATE
  // ========================================
  async create(articleData: CreateArticleData): Promise<Article> {
    return await prisma.article.create({
      data: articleData
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar por ID
  async findById(id: string): Promise<Article | null> {
    return await prisma.article.findUnique({
      where: { id },
    });
  }

  // Buscar artigo ativo por ID
  async findActiveById(id: string): Promise<Article | null> {
    return await prisma.article.findUnique({
      where: {
        id,
        isActive: true,
      },
    });
  }

  // Buscar artigo ativo por ID de usuario
  async findByUserId(userId: string): Promise<(Article)[]> {
    return await prisma.article.findMany({
      where: {
        userId,
        isActive: true,
      },
    });
  }

  // Buscar artigo ativo por ID de evento e ID de usuario
  async findByEventIdAndUserId(eventId: string, userId: string): Promise<(Article)[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        userId,
        isActive: true,
      },
    });
  }

  // Buscar artigo ativo por ID de evento
  async findByEventId(eventId: string): Promise<(Article)[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        isActive: true,
      },
    });
  }

  async findByEventIdAndStatus(eventId: string, status: ArticleStatus): Promise<(Article)[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        status,
        isActive: true,
      },
    });
  }

  async findArticlesPending(eventId: string): Promise<(Article)[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        status: 'SUBMITTED',
        isActive: true,
        evaluatorAssignments: {
          none: {}, // Nenhuma entrada na tabela de junção
        },
      },
    });
  }

  // ========================================
  // UPDATE
  // ========================================
  async update(id: string, data: Partial<CreateArticleData>): Promise<Article> {
    return await prisma.article.update({
      where: { id },
      data,
    });
  }

  // ========================================
  // DELETE
  // ========================================

  // Soft delete
  async softDelete(id: string): Promise<Article> {
    return await prisma.article.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async incrementEvaluationsDone(id: string): Promise<Article> {
    const article = await this.findById(id);

    if (!article) {
      throw new Error("Article not found");
    }

    const newEvaluationsDone = (article.evaluationsDone || 0) + 1;

    return await prisma.article.update({
      where: { id },
      data: { evaluationsDone: newEvaluationsDone },
    });
  }
  // Hard delete
  async hardDelete(id: string): Promise<Article> {
    return await prisma.article.delete({
      where: { id },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Verificar se existe
  async exists(id: string): Promise<boolean> {
    const article = await prisma.article.findUnique({
      where: { id },
      select: { id: true },
    });
    return !!article;
  }
}
