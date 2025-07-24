// src/infrastructure/repositories/ArticleRepository.ts

import {
  Article,
  ArticleStatus,
  ArticleEvaluatorAssignment,
} from "@prisma/client";
import { prisma } from "../../lib/prisma";

interface CreateArticleData {
  title: string;
  summary: string;
  thematicArea?: string;
  eventId: string;
  userId: string;
  currentVersion: number;
  status: ArticleStatus;
}

export class ArticleRepository {
  // ========================================
  // CREATE
  // ========================================
  async create(articleData: CreateArticleData): Promise<Article> {
    return await prisma.article.create({
      data: articleData,
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
  // Buscar por ID
  async findByIdComplex(id: string): Promise<Article | null> {
    return await prisma.article.findUnique({
      where: {
        id,
      },
      include: {
        event: {
          select: {
            id: true,
            name: true,
            banner: true,
            description: true,
            eventStartDate: true,
            eventEndDate: true,
            submissionStartDate: true,
            submissionEndDate: true,
            status: true,
            evaluationType: true,
            isActive: true,
          },
        },
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
          },
        },
        keywords: {
          select: {
            id: true,
            name: true,
          },
        },
        relatedAuthors: {
          select: {
            id: true,
            coAuthorName: true,
          },
        },
        versions: {
          orderBy: {
            version: "desc",
          },
        },
        evaluatorAssignments: true,
      },
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
  async findByUserId(
    userId: string
  ): Promise<(Article & { event: { name: string } })[]> {
    return await prisma.article.findMany({
      where: {
        userId,
        isActive: true,
      },
      include: {
        event: {
          select: {
            id: true,
            name: true,
          },
        },
        keywords: true,
        relatedAuthors: true,
        versions: {
          orderBy: {
            version: "desc",
          },
          take: 1,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // Buscar artigo ativo por ID de evento e ID de usuario
  async findByEventIdAndUserId(
    eventId: string,
    userId: string
  ): Promise<Article[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        userId,
        isActive: true,
      },
    });
  }

  // Buscar artigo ativo por ID de evento
  async findByEventId(eventId: string): Promise<Article[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        isActive: true,
      },
    });
  }

  async findByEventIdAndStatus(
    eventId: string,
    status: ArticleStatus
  ): Promise<Article[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        status,
        isActive: true,
      },
    });
  }

  async findArticlesPending(eventId: string): Promise<Article[]> {
    return await prisma.article.findMany({
      where: {
        eventId,
        status: "SUBMITTED",
        isActive: true,
        evaluatorAssignments: {
          none: {}, // Nenhuma entrada na tabela de junção
        },
      },
    });
  }

  async findArticlesForEvaluator(
    evaluatorId: string,
    filters: {
      search?: string;
      status?: string;
      eventId?: string;
      page: number;
      limit: number;
    }
  ): Promise<{ articles: any[]; total: number }> {
    const skip = (filters.page - 1) * filters.limit;

    // PRIMEIRO: Verificar se o avaliador tem atribuições
    const assignments = await prisma.articleEvaluatorAssignment.findMany({
      where: {
        userId: evaluatorId,
      },
      include: {
        article: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
      },
    });

    // ✅ NOVO: Só mostrar artigos que podem ser avaliados
    // Artigos com status SUBMITTED ou IN_EVALUATION
    const where: any = {
      isActive: true,
      evaluatorAssignments: {
        some: {
          userId: evaluatorId,
          // ✅ NOVO: Só mostrar assignments não corrigidos (não avaliados ainda)
          isCorrected: false,
        },
      },
      // ✅ IMPORTANTE: Só mostrar artigos que estão prontos para avaliação
      status: {
        in: ["SUBMITTED", "IN_EVALUATION"],
      },
    };

    // Filtro por evento
    if (filters.eventId) {
      where.eventId = filters.eventId;
    }

    // Filtro por status do artigo (se especificado)
    if (filters.status) {
      where.status = filters.status;
    }

    // Filtro de busca (título)
    if (filters.search && filters.search.trim()) {
      where.title = {
        contains: filters.search.trim(),
        mode: "insensitive",
      };
    }

    // Executar consultas em paralelo
    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where,
        include: {
          event: {
            select: {
              id: true,
              name: true,
              evaluationType: true,
            },
          },
          // REMOVIDO: dados do usuário autor para privacidade
          versions: {
            // ✅ BUSCAR VERSÃO MAIS RECENTE (sempre a currentVersion)
            orderBy: {
              version: "desc",
            },
            take: 1,
            select: {
              id: true,
              version: true,
              pdfPath: true,
              createdAt: true,
            },
          },
          evaluatorAssignments: {
            where: {
              userId: evaluatorId,
            },
            select: {
              id: true,
              assignedAt: true,
              isCorrected: true,
            },
          },
        },
        skip,
        take: filters.limit,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.article.count({ where }),
    ]);

    return { articles, total };
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

  async updateStatus(
    id: string,
    articleStatus: ArticleStatus
  ): Promise<Article> {
    return await prisma.article.update({
      where: { id },
      data: {
        status: articleStatus,
      },
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

  async decrementEvaluationsDone(id: string): Promise<Article> {
    const article = await this.findById(id);

    if (!article) {
      throw new Error("Article not found");
    }

    const newEvaluationsDone = article.evaluationsDone - 1;

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

  // Obter estatísticas por evento
  async getStatsByEventId(eventId: string): Promise<{
    totalSubmissions: number;
    underReview: number;
    approved: number;
    evaluators: number;
  }> {
    // Total de submissões ativas para o evento
    const totalSubmissions = await prisma.article.count({
      where: {
        eventId,
        isActive: true,
      },
    });

    // Artigos em avaliação (IN_EVALUATION)
    const underReview = await prisma.article.count({
      where: {
        eventId,
        status: "IN_EVALUATION",
        isActive: true,
      },
    });

    // Artigos aprovados
    const approved = await prisma.article.count({
      where: {
        eventId,
        status: "APPROVED",
        isActive: true,
      },
    });

    // Número de avaliadores únicos do evento
    const evaluatorsResult = await prisma.eventEvaluator.findMany({
      where: {
        eventId,
        isActive: true,
      },
      select: {
        userId: true,
      },
      distinct: ['userId'],
    });

    const evaluators = evaluatorsResult.length;

    return {
      totalSubmissions,
      underReview,
      approved,
      evaluators,
    };
  }
}
