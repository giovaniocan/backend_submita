// src/infrastructure/repositories/StatsRepository.ts

import { PrismaClient, ArticleStatus, RoleType } from "@prisma/client";
import {
  StudentRecentSubmission,
  EvaluatorRecentEvaluation,
} from "../../application/dtos/StatsDto";

export class StatsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // ========================================
  // COORDINATOR STATS QUERIES
  // ========================================

  // Total de submissions (artigos)
  async getTotalSubmissions(): Promise<number> {
    return await this.prisma.article.count({
      where: {
        isActive: true,
      },
    });
  }

  // Total de eventos
  async getTotalEvents(): Promise<number> {
    return await this.prisma.event.count({
      where: {
        isActive: true,
      },
    });
  }

  // Total de avaliadores
  async getTotalEvaluators(): Promise<number> {
    return await this.prisma.user.count({
      where: {
        role: RoleType.EVALUATOR,
        isActive: true,
      },
    });
  }

  // Total de estudantes
  async getTotalStudents(): Promise<number> {
    return await this.prisma.user.count({
      where: {
        role: RoleType.STUDENT,
        isActive: true,
      },
    });
  }

  // Total de estudantes do BioPark
  async getBioParkStudents(): Promise<number> {
    return await this.prisma.user.count({
      where: {
        role: RoleType.STUDENT,
        isActive: true,
        isFromBpk: true,
      },
    });
  }

  // Submissões por status
  async getSubmissionsByStatus(): Promise<
    { status: ArticleStatus; count: number }[]
  > {
    const result = await this.prisma.article.groupBy({
      by: ["status"],
      where: {
        isActive: true,
      },
      _count: {
        status: true,
      },
    });

    return result.map((item) => ({
      status: item.status,
      count: item._count.status,
    }));
  }

  // Submissões por evento
  async getSubmissionsByEvent(): Promise<
    { eventId: string; eventTitle: string; count: number }[]
  > {
    const result = await this.prisma.article.groupBy({
      by: ["eventId"],
      where: {
        isActive: true,
      },
      _count: {
        eventId: true,
      },
    });

    // Buscar os nomes dos eventos
    const eventsWithCounts = await Promise.all(
      result.map(async (item) => {
        const event = await this.prisma.event.findUnique({
          where: { id: item.eventId },
          select: { name: true },
        });

        return {
          eventId: item.eventId,
          eventTitle: event?.name || "Evento não encontrado",
          count: item._count.eventId,
        };
      })
    );

    return eventsWithCounts;
  }

  // Progresso das avaliações
  async getEvaluationProgress(): Promise<{
    completed: number;
    pending: number;
    inProgress: number;
  }> {
    // Artigos completamente avaliados (todas as atribuições foram corrigidas)
    const completedArticles = await this.prisma.article.count({
      where: {
        isActive: true,
        status: {
          in: [
            ArticleStatus.APPROVED,
            ArticleStatus.IN_EVALUATION,
            ArticleStatus.REJECTED,
          ],
        },
      },
    });

    // Artigos que ainda não começaram a ser avaliados
    const pendingArticles = await this.prisma.article.count({
      where: {
        isActive: true,
        status: ArticleStatus.SUBMITTED,
        evaluationsDone: 0,
      },
    });

    // Artigos em processo de avaliação
    const inProgressArticles = await this.prisma.article.count({
      where: {
        isActive: true,
        status: ArticleStatus.IN_EVALUATION,
      },
    });

    return {
      completed: completedArticles,
      pending: pendingArticles,
      inProgress: inProgressArticles,
    };
  }

  // ========================================
  // STUDENT STATS QUERIES
  // ========================================

  // Total de submissões do estudante
  async getStudentTotalSubmissions(userId: string): Promise<number> {
    return await this.prisma.article.count({
      where: {
        userId: userId,
        isActive: true,
      },
    });
  }

  // Artigos aprovados do estudante
  async getStudentApprovedArticles(userId: string): Promise<number> {
    return await this.prisma.article.count({
      where: {
        userId: userId,
        isActive: true,
        status: ArticleStatus.APPROVED,
      },
    });
  }

  // Artigos rejeitados do estudante
  async getStudentRejectedArticles(userId: string): Promise<number> {
    return await this.prisma.article.count({
      where: {
        userId: userId,
        isActive: true,
        status: ArticleStatus.REJECTED,
      },
    });
  }

  // Artigos pendentes do estudante (SUBMITTED + IN_EVALUATION)
  async getStudentPendingArticles(userId: string): Promise<number> {
    return await this.prisma.article.count({
      where: {
        userId: userId,
        isActive: true,
        status: {
          in: [ArticleStatus.SUBMITTED, ArticleStatus.IN_EVALUATION],
        },
      },
    });
  }

  // Artigos com correções do estudante
  async getStudentArticlesWithCorrections(userId: string): Promise<number> {
    return await this.prisma.article.count({
      where: {
        userId: userId,
        isActive: true,
        status: ArticleStatus.APPROVED_WITH_REMARKS,
      },
    });
  }

  // Submissões recentes do estudante (últimas 5)
  async getStudentRecentSubmissions(
    userId: string
  ): Promise<StudentRecentSubmission[]> {
    const articles = await this.prisma.article.findMany({
      where: {
        userId: userId,
        isActive: true,
      },
      include: {
        event: {
          select: {
            id: true,
            name: true,
          },
        },
        versions: {
          take: 1,
          orderBy: {
            version: "desc",
          },
          select: {
            id: true,
            version: true,
            pdfPath: true,
            createdAt: true,
          },
        },
        _count: {
          select: {
            evaluatorAssignments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    // Mapear para o tipo específico
    return articles.map((article) => ({
      id: article.id,
      title: article.title,
      summary: article.summary,
      thematicArea: article.thematicArea,
      currentVersion: article.currentVersion,
      evaluationsDone: article.evaluationsDone,
      status: article.status,
      isActive: article.isActive,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      event: article.event,
      versions: article.versions,
      _count: article._count,
    }));
  }

  // ========================================
  // EVALUATOR STATS QUERIES
  // ========================================

  // Total de avaliações realizadas pelo avaliador
  async getEvaluatorTotalEvaluations(userId: string): Promise<number> {
    return await this.prisma.evaluation.count({
      where: {
        userId: userId,
      },
    });
  }

  // Avaliações completadas pelo avaliador
  async getEvaluatorCompletedEvaluations(userId: string): Promise<number> {
    return await this.prisma.articleEvaluatorAssignment.count({
      where: {
        userId: userId,
        isCorrected: true,
      },
    });
  }

  // Avaliações pendentes do avaliador
  async getEvaluatorPendingEvaluations(userId: string): Promise<number> {
    return await this.prisma.articleEvaluatorAssignment.count({
      where: {
        userId: userId,
        isCorrected: false,
      },
    });
  }

  // Nota média das avaliações do avaliador
  async getEvaluatorAverageGrade(userId: string): Promise<number> {
    const result = await this.prisma.evaluation.aggregate({
      where: {
        userId: userId,
      },
      _avg: {
        grade: true,
      },
    });

    return result._avg.grade || 0;
  }

  // Avaliações recentes do avaliador (últimas 5)
  async getEvaluatorRecentEvaluations(
    userId: string
  ): Promise<EvaluatorRecentEvaluation[]> {
    const evaluations = await this.prisma.evaluation.findMany({
      where: {
        userId: userId,
      },
      include: {
        articleVersion: {
          include: {
            article: {
              include: {
                event: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        evaluationDate: "desc",
      },
      take: 5,
    });

    // Mapear para o tipo específico
    return evaluations.map((evaluation) => ({
      id: evaluation.id,
      grade: evaluation.grade,
      evaluationDescription: evaluation.evaluationDescription,
      evaluationDate: evaluation.evaluationDate,
      status: evaluation.status, // Status da avaliação (EvaluationStatus)
      createdAt: evaluation.createdAt,
      updatedAt: evaluation.updatedAt,
      articleVersion: {
        id: evaluation.articleVersion.id,
        version: evaluation.articleVersion.version,
        pdfPath: evaluation.articleVersion.pdfPath,
        createdAt: evaluation.articleVersion.createdAt,
        updatedAt: evaluation.articleVersion.updatedAt,
        article: {
          id: evaluation.articleVersion.article.id,
          title: evaluation.articleVersion.article.title,
          summary: evaluation.articleVersion.article.summary,
          thematicArea: evaluation.articleVersion.article.thematicArea,
          currentVersion: evaluation.articleVersion.article.currentVersion,
          evaluationsDone: evaluation.articleVersion.article.evaluationsDone,
          status: evaluation.articleVersion.article.status, // Status do artigo (ArticleStatus)
          isActive: evaluation.articleVersion.article.isActive,
          createdAt: evaluation.articleVersion.article.createdAt,
          updatedAt: evaluation.articleVersion.article.updatedAt,
          event: {
            id: evaluation.articleVersion.article.event.id,
            name: evaluation.articleVersion.article.event.name,
          },
          user: {
            id: evaluation.articleVersion.article.user.id,
            name: evaluation.articleVersion.article.user.name,
            email: evaluation.articleVersion.article.user.email,
          },
        },
      },
    }));
  }

  // Avaliações por mês do avaliador (últimos 12 meses)
  async getEvaluatorEvaluationsByMonth(
    userId: string
  ): Promise<{ month: string; count: number }[]> {
    // Calcular data de 12 meses atrás
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

    const evaluations = await this.prisma.evaluation.findMany({
      where: {
        userId: userId,
        evaluationDate: {
          gte: twelveMonthsAgo,
        },
      },
      select: {
        evaluationDate: true,
      },
      orderBy: {
        evaluationDate: "asc",
      },
    });

    // Agrupar por mês
    const monthlyCount: { [key: string]: number } = {};

    evaluations.forEach((evaluation) => {
      const monthYear = evaluation.evaluationDate.toISOString().slice(0, 7); // YYYY-MM
      monthlyCount[monthYear] = (monthlyCount[monthYear] || 0) + 1;
    });

    // Converter para array e formatar
    return Object.entries(monthlyCount).map(([month, count]) => ({
      month,
      count,
    }));
  }

  // ========================================
  // UTILITY METHODS
  // ========================================

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
