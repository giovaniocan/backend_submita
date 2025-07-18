import { ArticleEvaluatorAssignment } from "@prisma/client";
import { prisma } from "../../lib/prisma";

interface CreateAssignmentData {
  eventEvaluatorId: string;
  articleId: string;
  userId: string;
}

export class ArticleEvaluatorAssignmentRepository {
  // ========================================
  // CREATE
  // ========================================
  async create(
    assignmentData: CreateAssignmentData
  ): Promise<ArticleEvaluatorAssignment> {
    return await prisma.articleEvaluatorAssignment.create({
      data: {
        ...assignmentData,
        assignedAt: new Date(),
      },
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar por ID
  async findById(id: string): Promise<ArticleEvaluatorAssignment | null> {
    return await prisma.articleEvaluatorAssignment.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        article: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
        eventEvaluator: {
          select: {
            id: true,
            eventId: true,
            userId: true,
            isActive: true,
          },
        },
      },
    });
  }

  // Buscar atribuição por artigo e usuário
  async findByArticleAndUser(
    articleId: string,
    userId: string
  ): Promise<ArticleEvaluatorAssignment | null> {
    return await prisma.articleEvaluatorAssignment.findFirst({
      where: {
        articleId,
        userId,
      },
    });
  }

  // Buscar todas as atribuições de um artigo
  async findByArticleId(
    articleId: string
  ): Promise<ArticleEvaluatorAssignment[]> {
    return await prisma.articleEvaluatorAssignment.findMany({
      where: { articleId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        eventEvaluator: {
          select: {
            id: true,
            eventId: true,
            isActive: true,
          },
        },
      },
      orderBy: { assignedAt: "asc" },
    });
  }

  // Buscar todas as atribuições de um usuário
  async findByUserId(userId: string): Promise<ArticleEvaluatorAssignment[]> {
    return await prisma.articleEvaluatorAssignment.findMany({
      where: { userId },
      include: {
        article: {
          select: {
            id: true,
            title: true,
            status: true,
            eventId: true,
          },
        },
        eventEvaluator: {
          select: {
            id: true,
            eventId: true,
            isActive: true,
          },
        },
      },
      orderBy: { assignedAt: "desc" },
    });
  }

  // ========================================
  // UPDATE
  // ========================================
  async update(
    id: string,
    data: Partial<CreateAssignmentData>
  ): Promise<ArticleEvaluatorAssignment> {
    return await prisma.articleEvaluatorAssignment.update({
      where: { id },
      data,
    });
  }

  // Marcar como corrigido
  async markAsCorrected(
    articleId: string,
    eventEvaluatorId: string
  ): Promise<ArticleEvaluatorAssignment> {
    return await prisma.articleEvaluatorAssignment.update({
      where: {
        eventEvaluatorId_articleId: {
          articleId,
          eventEvaluatorId,
        },
      },
      data: { isCorrected: true },
    });
  }

  // Marcar como não corrigido
  async markAsUncorrected(id: string): Promise<ArticleEvaluatorAssignment> {
    return await prisma.articleEvaluatorAssignment.update({
      where: { id },
      data: { isCorrected: false },
    });
  }

  async resetAssignmentsByArticle(articleId: string): Promise<void> {
    const assignments = await this.findByArticleId(articleId);

    if (assignments.length === 0) {
      return; // Não é erro se não há assignments
    }

    for (const assignment of assignments) {
      await prisma.articleEvaluatorAssignment.update({
        where: { id: assignment.id },
        data: { isCorrected: false, assignedAt: new Date() },
      });
    }
  }

  // ========================================
  // DELETE
  // ========================================
  async delete(id: string): Promise<ArticleEvaluatorAssignment> {
    return await prisma.articleEvaluatorAssignment.delete({
      where: { id },
    });
  }

  // Remover atribuição por artigo e usuário
  async removeByArticleAndUser(
    articleId: string,
    userId: string
  ): Promise<ArticleEvaluatorAssignment> {
    const assignment = await this.findByArticleAndUser(articleId, userId);
    if (!assignment) {
      throw new Error("Assignment not found");
    }
    return await this.delete(assignment.id);
  }

  // Marcar assignment como corrigido por artigo e eventEvaluatorId
  async markAsCorrectedByArticleIdAndEventEvaluatorId(
    articleId: string,
    eventEvaluatorId: string
  ): Promise<ArticleEvaluatorAssignment> {
    try {
      const assignment = await prisma.articleEvaluatorAssignment.updateMany({
        where: {
          articleId,
          eventEvaluatorId,
        },
        data: {
          isCorrected: true,
        },
      });

      console.log(
        `✅ Assignment marked as corrected for article ${articleId} and eventEvaluator ${eventEvaluatorId}`
      );

      // Retornar o assignment atualizado
      const updatedAssignment =
        await prisma.articleEvaluatorAssignment.findFirst({
          where: {
            articleId,
            eventEvaluatorId,
          },
        });

      return updatedAssignment!;
    } catch (error) {
      throw new Error("Failed to mark assignment as corrected");
    }
  }

  async markAsUncorrectedByArticleAndUser(
    articleId: string,
    userId: string
  ): Promise<ArticleEvaluatorAssignment> {
    try {
      const assignment = await prisma.articleEvaluatorAssignment.updateMany({
        where: {
          articleId,
          userId,
        },
        data: {
          isCorrected: false, // Marca como NÃO corrigido
        },
      });

      console.log(
        `✅ Assignment marked as uncorrected for article ${articleId} and user ${userId}`
      );

      // Retornar o assignment atualizado
      const updatedAssignment =
        await prisma.articleEvaluatorAssignment.findFirst({
          where: {
            articleId,
            userId,
          },
        });

      return updatedAssignment!;
    } catch (error) {
      throw new Error("Failed to mark assignment as uncorrected");
    }
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Contar atribuições de um artigo
  async countByArticleId(articleId: string): Promise<number> {
    return await prisma.articleEvaluatorAssignment.count({
      where: { articleId },
    });
  }

  // Contar atribuições de um usuário
  async countByUserId(userId: string): Promise<number> {
    return await prisma.articleEvaluatorAssignment.count({
      where: { userId },
    });
  }

  // Verificar se existe atribuição
  async exists(articleId: string, userId: string): Promise<boolean> {
    const assignment = await this.findByArticleAndUser(articleId, userId);
    return !!assignment;
  }

  // Buscar assignments pendentes com detalhes do artigo
  async findPendingWithArticleDetails(userId: string): Promise<any[]> {
    return await prisma.articleEvaluatorAssignment.findMany({
      where: {
        userId: userId,
        isCorrected: false,
        article: {
          isActive: true,
          status: {
            in: ["SUBMITTED", "IN_EVALUATION"],
          },
        },
      },
      include: {
        article: {
          include: {
            versions: {
              orderBy: { version: "desc" },
              take: 1,
              select: {
                id: true,
                version: true,
                pdfPath: true,
                createdAt: true,
              },
            },
            event: {
              select: {
                id: true,
                name: true,
                evaluationType: true,
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
        eventEvaluator: {
          select: {
            id: true,
            eventId: true,
            isActive: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
