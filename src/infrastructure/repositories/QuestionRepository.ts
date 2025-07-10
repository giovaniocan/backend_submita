// src/infrastructure/repositories/QuestionRepository.ts

import { CreateQuestionDto } from "../../application/dtos/QuestionDto";
import { Question } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class QuestionRepository {
  // ========================================
  // CREATE
  // ========================================
  async create(questionData: CreateQuestionDto): Promise<Question> {
    return await prisma.question.create({
      data: questionData,
      include: {
        checklist: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar pergunta por ID
  async findById(id: string): Promise<Question | null> {
    return await prisma.question.findUnique({
      where: { id },
      include: {
        checklist: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  // Verificar se pergunta existe e está ativa
  async findActiveById(id: string): Promise<Question | null> {
    return await prisma.question.findUnique({
      where: {
        id,
        isActive: true,
      },
    });
  }

  // Buscar pergunta por order no checklist
  async findByOrder(
    checklistId: string,
    order: number
  ): Promise<Question | null> {
    return await prisma.question.findFirst({
      where: {
        checklistId,
        order,
        isActive: true,
      },
    });
  }

  // Buscar todas as perguntas de um checklist
  async findByChecklistId(checklistId: string): Promise<Question[]> {
    return await prisma.question.findMany({
      where: {
        checklistId,
        isActive: true,
      },
      orderBy: { order: "asc" },
      include: {
        checklist: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  // Obter próximo número de order disponível
  async getNextOrderNumber(checklistId: string): Promise<number> {
    const lastQuestion = await prisma.question.findFirst({
      where: {
        checklistId,
        isActive: true,
      },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    return lastQuestion ? lastQuestion.order + 1 : 1;
  }

  // ========================================
  // UPDATE
  // ========================================

  // Atualizar pergunta
  async update(
    id: string,
    questionData: Partial<CreateQuestionDto>
  ): Promise<Question> {
    return await prisma.question.update({
      where: { id },
      data: questionData,
      include: {
        checklist: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  // Soft delete pergunta
  async softDelete(id: string): Promise<Question> {
    return await prisma.question.update({
      where: { id },
      data: { isActive: false },
      include: {
        checklist: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Verificar se pergunta existe
  async exists(id: string): Promise<boolean> {
    const question = await prisma.question.findUnique({
      where: { id },
      select: { id: true },
    });
    return !!question;
  }

  // Contar perguntas ativas de um checklist
  async countActiveQuestions(checklistId: string): Promise<number> {
    return await prisma.question.count({
      where: {
        checklistId,
        isActive: true,
      },
    });
  }

  // Reorganizar orders após remoção
  async reorderQuestions(checklistId: string): Promise<void> {
    const questions = await prisma.question.findMany({
      where: {
        checklistId,
        isActive: true,
      },
      orderBy: { order: "asc" },
    });

    // Atualizar orders sequencialmente
    for (let i = 0; i < questions.length; i++) {
      await prisma.question.update({
        where: { id: questions[i].id },
        data: { order: i + 1 },
      });
    }
  }

  // Verificar se order está em uso
  async isOrderTaken(
    checklistId: string,
    order: number,
    excludeId?: string
  ): Promise<boolean> {
    const where: any = {
      checklistId,
      order,
      isActive: true,
    };

    if (excludeId) {
      where.NOT = { id: excludeId };
    }

    const question = await prisma.question.findFirst({ where });
    return !!question;
  }
}
