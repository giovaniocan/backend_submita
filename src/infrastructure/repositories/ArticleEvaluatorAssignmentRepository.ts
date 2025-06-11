import { ArticleEvaluatorAssignment } from "../../generated/prisma";
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
  async markAsCorrected(id: string): Promise<ArticleEvaluatorAssignment> {
    return await prisma.articleEvaluatorAssignment.update({
      where: { id },
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
}
