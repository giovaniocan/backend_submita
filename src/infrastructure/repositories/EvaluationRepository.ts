// src/infrastructure/repositories/EvaluationRepository.ts
import {
  CreateEvaluationDto,
  ListEvaluationsDto,
  UpdateEvaluationDto,
} from "../../application/dtos/EvaluationDto";
import { Evaluation, EvaluationStatus, Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class EvaluationRepository {
  // Método corrigido para construir includes
  private buildIncludeRelations(withChecklistResponses: boolean = false): any {
    const include: any = {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      articleVersion: {
        select: {
          id: true,
          version: true,
          article: {
            select: {
              id: true,
              title: true,
              status: true,
              evaluationsDone: true,
              userId: true, // Incluir ID do autor para verificação de permissão
              event: {
                select: {
                  id: true,
                  name: true,
                  evaluationType: true,
                },
              },
            },
          },
        },
      },
    };

    // ✅ CORREÇÃO: Buscar questionResponses separadamente via query adicional
    // Não incluir diretamente no include principal para evitar problemas de relacionamento

    return include;
  }

  async findManyWithFilters(
    filters: ListEvaluationsDto
  ): Promise<{ evaluations: any[]; total: number }> {
    const {
      page = 1,
      limit = 10,
      withChecklistResponses = false,
      ...otherFilters
    } = filters;
    const skip = (page - 1) * limit;

    // Construir condições WHERE
    const where = this.buildWhereConditions(otherFilters);

    // Configurar includes para dados relacionados (SEM questionResponses por enquanto)
    const include = this.buildIncludeRelations(false);

    // Executar queries em paralelo para otimização
    const [evaluations, total] = await Promise.all([
      prisma.evaluation.findMany({
        where,
        include,
        skip,
        take: limit,
        orderBy: { evaluationDate: "desc" }, // Mais recentes primeiro
      }),
      prisma.evaluation.count({ where }),
    ]);

    console.log("📊 [findManyWithFilters] Resultado:", {
      totalEncontradas: evaluations.length,
      totalNoDb: total,
      skip,
      limit,
      page,
      withChecklistResponses,
    });

    // ✅ CORREÇÃO: Se solicitado, buscar questionResponses separadamente
    if (withChecklistResponses && evaluations.length > 0) {
      for (const evaluation of evaluations) {
        try {
          // Buscar respostas do checklist para esta avaliação específica
          const questionResponses = await prisma.questionResponse.findMany({
            where: {
              userId: evaluation.userId,
              articleVersionId: evaluation.articleVersionId,
            },
            include: {
              question: {
                select: {
                  id: true,
                  description: true,
                  type: true,
                  order: true,
                },
              },
            },
            orderBy: {
              question: {
                order: "asc",
              },
            },
          });

          // Adicionar as respostas à avaliação
          (evaluation as any).questionResponses = questionResponses;
        } catch (error) {
          console.error(
            "Erro ao buscar questionResponses para avaliação:",
            evaluation.id,
            error
          );
          // Se der erro, continuar sem as respostas
          (evaluation as any).questionResponses = [];
        }
      }
    }

    return { evaluations, total };
  }

  // Resto dos métodos permanecem iguais...
  async create(data: {
    grade: number;
    evaluationDescription?: string;
    evaluationDate: Date;
    userId: string;
    articleVersionId: string;
    evaluationStatus: string;
  }): Promise<any> {
    return await prisma.evaluation.create({
      data: {
        grade: data.grade,
        status: data.evaluationStatus as EvaluationStatus,
        evaluationDescription: data.evaluationDescription,
        evaluationDate: data.evaluationDate,
        userId: data.userId,
        articleVersionId: data.articleVersionId,
      },
      include: this.buildIncludeRelations(false),
    });
  }

  async updateEvaluation(
    evaluationId: string,
    updateData: UpdateEvaluationDto
  ): Promise<any> {
    const dataToUpdate: any = {};

    if (updateData.grade !== undefined) {
      dataToUpdate.grade = updateData.grade;
    }

    if (updateData.evaluationDescription !== undefined) {
      dataToUpdate.evaluationDescription = updateData.evaluationDescription;
    }

    if (updateData.status !== undefined) {
      dataToUpdate.status = updateData.status;
    }

    try {
      const updatedEvaluation = await prisma.evaluation.update({
        where: { id: evaluationId },
        data: dataToUpdate,
        include: this.buildIncludeRelations(false),
      });

      return updatedEvaluation;
    } catch (error) {
      throw new Error("Failed to update evaluation");
    }
  }

  async findByIdWithRelations(id: string): Promise<any> {
    return await prisma.evaluation.findUnique({
      where: { id },
      include: this.buildIncludeRelations(false),
    });
  }

  async countByArticleVersionId(articleVersionId: string): Promise<number> {
    try {
      const count = await prisma.evaluation.count({
        where: { articleVersionId },
      });
      return count;
    } catch (error) {
      throw new Error("Failed to count evaluations");
    }
  }

  async delete(evaluationId: string): Promise<void> {
    try {
      await prisma.evaluation.delete({
        where: { id: evaluationId },
      });
    } catch (error) {
      throw new Error("Failed to delete evaluation");
    }
  }

  // Método para construir condições WHERE
  private buildWhereConditions(
    filters: Omit<
      ListEvaluationsDto,
      "page" | "limit" | "withChecklistResponses"
    >
  ): any {
    const where: any = {};

    if (filters.status) where.status = filters.status;
    if (filters.evaluatorId) where.userId = filters.evaluatorId;
    if (filters.articleVersionId)
      where.articleVersionId = filters.articleVersionId;

    // Construir filtros de articleVersion separadamente
    const articleVersionWhere: any = {};

    if (filters.articleId) {
      articleVersionWhere.articleId = filters.articleId;
    }

    // Filtrar por autor do artigo (para STUDENTs)
    if ((filters as any).authorId) {
      if (!articleVersionWhere.article) {
        articleVersionWhere.article = {};
      }
      articleVersionWhere.article.userId = (filters as any).authorId;
    }

    if (filters.eventId) {
      if (!articleVersionWhere.article) {
        articleVersionWhere.article = {};
      }
      articleVersionWhere.article.eventId = filters.eventId;
    }

    if (Object.keys(articleVersionWhere).length > 0) {
      where.articleVersion = articleVersionWhere;
    }

    // Filtros de nota
    if (filters.gradeMin !== undefined || filters.gradeMax !== undefined) {
      where.grade = {};
      if (filters.gradeMin !== undefined) where.grade.gte = filters.gradeMin;
      if (filters.gradeMax !== undefined) where.grade.lte = filters.gradeMax;
    }

    // Filtros de data
    if (filters.dateFrom || filters.dateTo) {
      where.evaluationDate = {};
      if (filters.dateFrom) where.evaluationDate.gte = filters.dateFrom;
      if (filters.dateTo) {
        const endDate = new Date(filters.dateTo);
        endDate.setHours(23, 59, 59, 999);
        where.evaluationDate.lte = endDate;
      }
    }

    return where;
  }

  // Outros métodos existentes...
  async findByUserId(userId: string): Promise<Evaluation[]> {
    return await prisma.evaluation.findMany({
      where: {
        userId,
      },
    });
  }

  async getEvaluationById(evaluationId: string): Promise<Evaluation | null> {
    return await prisma.evaluation.findUnique({
      where: { id: evaluationId },
    });
  }

  async findByIdWithArticleContext(evaluationId: string): Promise<any> {
    return await prisma.evaluation.findUnique({
      where: { id: evaluationId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        articleVersion: {
          include: {
            article: {
              include: {
                event: {
                  select: {
                    id: true,
                    name: true,
                    evaluationType: true,
                    eventStartDate: true,
                    eventEndDate: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async getAllEvaluationsForRecalculation(
    articleVersionId: string
  ): Promise<any[]> {
    return await prisma.evaluation.findMany({
      where: { articleVersionId },
      select: {
        id: true,
        status: true,
        grade: true,
        userId: true,
        evaluationDate: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { evaluationDate: "asc" },
    });
  }

  async getEvaluationsByArticleVersionId(
    articleVersionId: string
  ): Promise<any[]> {
    console.log(
      "Fetching evaluations for article version ID:",
      articleVersionId
    );

    const evaluations = await prisma.evaluation.findMany({
      where: { articleVersionId },
      include: this.buildIncludeRelations(false),
      orderBy: { evaluationDate: "desc" },
    });

    return evaluations;
  }

  async getEvaluationsByArticleId(articleId: string): Promise<any[]> {
    const evaluations = await prisma.evaluation.findMany({
      where: {
        articleVersion: {
          articleId: articleId,
        },
      },
      include: this.buildIncludeRelations(false),
      orderBy: [
        { articleVersion: { version: "desc" } },
        { evaluationDate: "desc" },
      ],
    });

    return evaluations;
  }

  async getEvaluationsByEvaluatorId(
    evaluatorId: string,
    filters?: {
      eventId?: string;
      status?: "TO_CORRECTION" | "APPROVED" | "REJECTED";
      dateFrom?: Date;
      dateTo?: Date;
    }
  ): Promise<any[]> {
    const where: Prisma.EvaluationWhereInput = {
      userId: evaluatorId,
    };

    if (filters) {
      if (filters.status) {
        where.status = filters.status;
      }

      if (filters.eventId) {
        where.articleVersion = {
          article: {
            eventId: filters.eventId,
          },
        };
      }

      if (filters.dateFrom || filters.dateTo) {
        where.evaluationDate = {};

        if (filters.dateFrom) {
          where.evaluationDate.gte = filters.dateFrom;
        }

        if (filters.dateTo) {
          const endDate = new Date(filters.dateTo);
          endDate.setHours(23, 59, 59, 999);
          where.evaluationDate.lte = endDate;
        }
      }
    }

    const evaluations = await prisma.evaluation.findMany({
      where,
      include: this.buildIncludeRelations(false),
      orderBy: { evaluationDate: "desc" },
    });

    return evaluations;
  }

  async countEvaluationsByFilters(
    filters: Omit<
      ListEvaluationsDto,
      "page" | "limit" | "withChecklistResponses"
    >
  ): Promise<{
    total: number;
    byStatus: {
      approved: number;
      toCorrection: number;
      rejected: number;
    };
  }> {
    const where = this.buildWhereConditions(filters);

    const [total, byStatus] = await Promise.all([
      prisma.evaluation.count({ where }),
      prisma.evaluation.groupBy({
        by: ["status"],
        where,
        _count: {
          id: true,
        },
      }),
    ]);

    const statusCounts = {
      approved: 0,
      toCorrection: 0,
      rejected: 0,
    };

    byStatus.forEach((item: any) => {
      switch (item.status) {
        case "APPROVED":
          statusCounts.approved = item._count.id;
          break;
        case "TO_CORRECTION":
          statusCounts.toCorrection = item._count.id;
          break;
        case "REJECTED":
          statusCounts.rejected = item._count.id;
          break;
      }
    });

    return {
      total,
      byStatus: statusCounts,
    };
  }
}
