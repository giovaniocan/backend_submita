// src/infrastructure/repositories/QuestionResponseRepository.ts

import { CreateQuestionResponseData } from "../../application/dtos/QuestionResponseDto";
import { Prisma, QuestionResponse } from "@prisma/client";
import { prisma } from "../../lib/prisma";

type QuestionResponseWithRelations = Prisma.QuestionResponseGetPayload<{
  include: {
    question: {
      select: {
        id: true;
        description: true;
        type: true;
        isRequired: true;
        order: true;
        checklistId: true;
      };
    };
    user: {
      select: {
        id: true;
        name: true;
        email: true;
      };
    };
    articleVersion: {
      select: {
        id: true;
        version: true;
        articleId: true;
      };
    };
  };
}>;

export class QuestionResponseRepository {
  async create(data: CreateQuestionResponseData): Promise<QuestionResponse> {
    return await prisma.questionResponse.create({
      data: {
        questionId: data.questionId,
        articleVersionId: data.articleVersionId,
        userId: data.userId,
        booleanResponse: data.booleanResponse ?? null,
        scaleResponse: data.scaleResponse ?? null,
        textResponse: data.textResponse ?? null,
      },
    });
  }
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

  async findByUserAndArticleVersion(
    userId: string,
    articleVersionId: string
  ): Promise<Array<{
    id: string;
    questionId: string;
    booleanResponse?: boolean;
    scaleResponse?: number;
    textResponse?: string;
    question: {
      description: string;
      type: "YES_NO" | "SCALE" | "TEXT";
      order: number;
    };
  }> | null> {
    const responses = await prisma.questionResponse.findMany({
      where: {
        userId,
        articleVersionId,
      },
      include: {
        question: {
          select: {
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

    // Se não tem respostas, retorna null
    if (responses.length === 0) {
      return null;
    }

    // Mapear para formato simples
    return responses.map((r) => ({
      id: r.id,
      questionId: r.questionId,
      booleanResponse: r.booleanResponse ?? undefined,
      scaleResponse: r.scaleResponse ?? undefined,
      textResponse: r.textResponse ?? undefined,
      question: {
        description: r.question.description,
        type: r.question.type as "YES_NO" | "SCALE" | "TEXT",
        order: r.question.order,
      },
    }));
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

  async findExistingResponse(
    userId: string,

    articleVersionId: string,
    questionId: string
  ): Promise<QuestionResponse | null> {
    return await prisma.questionResponse.findFirst({
      where: {
        userId,
        articleVersionId,
        questionId,
      },
    });
  }

  async findByIdWithRelations(
    id: string
  ): Promise<QuestionResponseWithRelations | null> {
    const result = await prisma.questionResponse.findUnique({
      where: { id },
      include: {
        question: {
          select: {
            id: true,
            description: true,
            type: true,
            isRequired: true,
            order: true,
            checklistId: true,
          },
        },
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
            articleId: true,
          },
        },
      },
    });

    return result;
  }

  // ========================================
  // ATUALIZAR RESPOSTA
  // ========================================
  async update(
    id: string,
    data: {
      booleanResponse?: boolean | null;
      scaleResponse?: number | null;
      textResponse?: string | null;
    }
  ): Promise<QuestionResponse> {
    return await prisma.questionResponse.update({
      where: { id },
      data: {
        booleanResponse: data.booleanResponse,
        scaleResponse: data.scaleResponse,
        textResponse: data.textResponse,
        updatedAt: new Date(),
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
