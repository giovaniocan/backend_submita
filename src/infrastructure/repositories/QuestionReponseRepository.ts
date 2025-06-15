// src/infrastructure/repositories/QuestionResponseRepository.ts

import { QuestionResponse } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

export class QuestionResponseRepository {
  // ========================================
  // DELETE METHODS
  // ========================================

  // ✅ DELETAR TODAS AS RESPOSTAS DE UM AVALIADOR PARA UMA VERSÃO ESPECÍFICA
  async deleteByUserAndArticleVersion(
    userId: string,
    articleVersionId: string
  ): Promise<{ count: number }> {
    return await prisma.questionResponse.deleteMany({
      where: {
        userId,
        articleVersionId,
      },
    });
  }

  // ✅ DELETAR RESPOSTA ESPECÍFICA
  async deleteById(id: string): Promise<QuestionResponse> {
    return await prisma.questionResponse.delete({
      where: { id },
    });
  }

  // ========================================
  // READ METHODS (caso precise para validações)
  // ========================================

  // Buscar respostas por usuário e versão do artigo
  async findByUserAndArticleVersion(
    userId: string,
    articleVersionId: string
  ): Promise<QuestionResponse[]> {
    return await prisma.questionResponse.findMany({
      where: {
        userId,
        articleVersionId,
      },
      include: {
        question: {
          select: {
            id: true,
            description: true,
            type: true,
            isRequired: true,
          },
        },
      },
    });
  }

  // Contar respostas por usuário e versão
  async countByUserAndArticleVersion(
    userId: string,
    articleVersionId: string
  ): Promise<number> {
    return await prisma.questionResponse.count({
      where: {
        userId,
        articleVersionId,
      },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Verificar se usuário tem respostas para uma versão
  async hasResponses(
    userId: string,
    articleVersionId: string
  ): Promise<boolean> {
    const count = await this.countByUserAndArticleVersion(
      userId,
      articleVersionId
    );
    return count > 0;
  }
}
