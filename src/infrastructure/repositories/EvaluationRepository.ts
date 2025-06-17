import {
  CreateEvaluationDto,
  ListEvaluationsDto,
  UpdateEvaluationDto,
} from "../../application/dtos/EvaluationDto";
import { Evaluation, EvaluationStatus } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { Prisma } from "../../generated/prisma";

export class EvaluationRepository {
  // Aqui você pode definir os métodos para interagir com o banco de dados
  // Exemplo:
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
      // ✅ INCLUIR dados relacionados simples
      include: {
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
      },
    });
  }

  async updateEvaluation(
    evaluationId: string,
    updateData: UpdateEvaluationDto
  ): Promise<any> {
    const dataToUpdate: any = {};

    // Só adicionar campos que foram fornecidos
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
        include: this.buildIncludeRelations(),
      });

      console.log(`✅ Evaluation ${evaluationId} updated successfully`);
      return updatedEvaluation;
    } catch (error) {
      console.error("❌ Error updating evaluation:", error);
      throw new Error("Failed to update evaluation");
    }
  }

  // ========================================
  // GET EVALUATION WITH ARTICLE CONTEXT
  // ========================================
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

  // ========================================
  // GET ALL EVALUATIONS FOR ARTICLE VERSION (for recalculation)
  // ========================================
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

  async getEvaluationById(evaluationId: string): Promise<Evaluation | null> {
    return await prisma.evaluation.findUnique({
      where: { id: evaluationId },
    });
  }

  async findByIdWithRelations(id: string): Promise<any> {
    return await prisma.evaluation.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
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
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async countByArticleVersionId(articleVersionId: string): Promise<number> {
    try {
      const count = await prisma.evaluation.count({
        where: { articleVersionId },
      });

      return count;
    } catch (error) {
      console.error("❌ Error counting evaluations by article version:", error);
      throw new Error("Failed to count evaluations");
    }
  }

  // Deletar avaliação (HARD DELETE)
  async delete(evaluationId: string): Promise<void> {
    try {
      await prisma.evaluation.delete({
        where: { id: evaluationId },
      });

      console.log(`✅ Evaluation ${evaluationId} deleted successfully`);
    } catch (error) {
      console.error("❌ Error deleting evaluation:", error);
      throw new Error("Failed to delete evaluation");
    }
  }

  async findManyWithFilters(
    filters: ListEvaluationsDto
  ): Promise<{ evaluations: any[]; total: number }> {
    const { page = 1, limit = 10, ...otherFilters } = filters;
    const skip = (page - 1) * limit;

    // Construir condições WHERE
    const where = this.buildWhereConditions(otherFilters);

    // Configurar includes para dados relacionados
    const include = this.buildIncludeRelations();

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

    return { evaluations, total };
  }

  // ========================================
  // MÉTODO PRIVADO PARA CONSTRUIR WHERE CONDITIONS
  // ========================================
  private buildWhereConditions(
    filters: Omit<ListEvaluationsDto, "page" | "limit">
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

    if (filters.eventId) {
      articleVersionWhere.article = { eventId: filters.eventId };
    }

    if (Object.keys(articleVersionWhere).length > 0) {
      where.articleVersion = articleVersionWhere;
    }

    // Resto dos filtros...
    if (filters.gradeMin !== undefined || filters.gradeMax !== undefined) {
      where.grade = {};
      if (filters.gradeMin !== undefined) where.grade.gte = filters.gradeMin;
      if (filters.gradeMax !== undefined) where.grade.lte = filters.gradeMax;
    }

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

  // ========================================
  // MÉTODO PRIVADO PARA CONSTRUIR INCLUDES
  // ========================================
  private buildIncludeRelations(): Prisma.EvaluationInclude {
    return {
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
  }

  // ========================================
  // FIND EVALUATIONS BY ARTICLE VERSION ID (método já existente - melhorar se necessário)
  // ========================================
  async getEvaluationsByArticleVersionId(
    articleVersionId: string
  ): Promise<any[]> {
    console.log(
      "Fetching evaluations for article version ID:",
      articleVersionId
    );

    const evaluations = await prisma.evaluation.findMany({
      where: { articleVersionId },
      include: this.buildIncludeRelations(),
      orderBy: { evaluationDate: "desc" }, // Mais recentes primeiro
    });

    return evaluations;
  }

  // ========================================
  // GET EVALUATIONS BY ARTICLE ID (todas as versões)
  // ========================================
  async getEvaluationsByArticleId(articleId: string): Promise<any[]> {
    const evaluations = await prisma.evaluation.findMany({
      where: {
        articleVersion: {
          articleId: articleId,
        },
      },
      include: this.buildIncludeRelations(),
      orderBy: [
        { articleVersion: { version: "desc" } }, // Versão mais recente primeiro
        { evaluationDate: "desc" }, // Depois por data de avaliação
      ],
    });

    return evaluations;
  }

  // ========================================
  // GET EVALUATIONS BY EVALUATOR ID
  // ========================================
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

    // Aplicar filtros adicionais se fornecidos
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
      include: this.buildIncludeRelations(),
      orderBy: { evaluationDate: "desc" },
    });

    return evaluations;
  }

  // ========================================
  // COUNT EVALUATIONS BY FILTERS (para estatísticas)
  // ========================================
  async countEvaluationsByFilters(
    filters: Omit<ListEvaluationsDto, "page" | "limit">
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
      // Total geral
      prisma.evaluation.count({ where }),

      // Por status
      prisma.evaluation.groupBy({
        by: ["status"],
        where,
        _count: {
          id: true,
        },
      }),
    ]);

    // Processar contagem por status
    const statusCounts = {
      approved: 0,
      toCorrection: 0,
      rejected: 0,
    };

    byStatus.forEach((item) => {
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
