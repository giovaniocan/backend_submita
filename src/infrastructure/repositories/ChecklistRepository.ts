// src/infrastructure/repositories/ChecklistRepository.ts

import { CreateChecklistDto } from "../../application/dtos/ChecklistDto";
import { Checklist } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class ChecklistRepository {
  // ========================================
  // CREATE
  // ========================================
  async create(checklistData: CreateChecklistDto): Promise<Checklist> {
    return await prisma.checklist.create({
      data: checklistData,
      include: {
        _count: {
          select: {
            questions: true,
            events: true,
          },
        },
      },
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar checklist por ID
  async findById(id: string): Promise<Checklist | null> {
    return await prisma.checklist.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            questions: true,
            events: true,
          },
        },
      },
    });
  }

  // Verificar se checklist existe e está ativo
  async findActiveById(id: string): Promise<Checklist | null> {
    return await prisma.checklist.findUnique({
      where: {
        id,
        isActive: true,
      },
    });
  }

  // Buscar checklist por nome (para verificar duplicatas)
  async findByName(name: string): Promise<Checklist | null> {
    return await prisma.checklist.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive", // Case insensitive
        },
        isActive: true,
      },
    });
  }

  // Listar todos os checklists ativos
  async findAllActive(): Promise<Checklist[]> {
    return await prisma.checklist.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: {
            questions: true,
            events: true,
          },
        },
      },
      orderBy: { name: "asc" },
    });
  }

  async findAllWithFilters(
    isActive?: boolean,
    search?: string,
    withQuestions: boolean = false
  ): Promise<Checklist[]> {
    const where: any = {};
    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const include: any = {
      _count: {
        select: {
          questions: {
            where: { isActive: true },
          },
          events: true,
        },
      },
    };

    if (withQuestions) {
      include.questions = {
        where: { isActive: true },
        orderBy: { order: "asc" },
        select: {
          id: true,
          description: true,
          type: true,
          isRequired: true,
          order: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
      };
    }

    return await prisma.checklist.findMany({
      where,
      include,
      orderBy: { name: "asc" },
    });
  }

  async findByIdWithQuestions(id: string): Promise<Checklist | null> {
    return await prisma.checklist.findUnique({
      where: { id },
      include: {
        questions: {
          where: { isActive: true },
          orderBy: { order: "asc" },
          select: {
            id: true,
            description: true,
            type: true,
            isRequired: true,
            order: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        _count: {
          select: {
            questions: true,
            events: true,
          },
        },
      },
    });
  }

  async softDelete(id: string): Promise<Checklist> {
    return await prisma.checklist.update({
      where: { id },
      data: {
        isActive: false,
        updatedAt: new Date(), // ✅ Atualizar timestamp
      },
      include: {
        _count: {
          select: {
            questions: true,
            events: true,
          },
        },
      },
    });
  }

  // ✅ NOVO: Desativar todas as perguntas do checklist
  async deactivateAllQuestions(checklistId: string): Promise<number> {
    const result = await prisma.question.updateMany({
      where: {
        checklistId,
        isActive: true, // Só desativa as que estão ativas
      },
      data: {
        isActive: false,
        updatedAt: new Date(),
      },
    });

    return result.count; // Retorna quantas perguntas foram desativadas
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Verificar se checklist está sendo usado em eventos ATIVOS
  async isUsedInActiveEvents(id: string): Promise<boolean> {
    const eventCount = await prisma.event.count({
      where: {
        checklistId: id,
        isActive: true, // ✅ Só eventos ativos
      },
    });
    return eventCount > 0;
  }

  // Contar quantas perguntas ATIVAS o checklist tem
  async countActiveQuestions(id: string): Promise<number> {
    return await prisma.question.count({
      where: {
        checklistId: id,
        isActive: true, // ✅ Só perguntas ativas
      },
    });
  }

  // ✅ NOVO: Reativar checklist (caso precise)
  async reactivate(id: string): Promise<Checklist> {
    return await prisma.checklist.update({
      where: { id },
      data: {
        isActive: true,
        updatedAt: new Date(),
      },
      include: {
        _count: {
          select: {
            questions: true,
            events: true,
          },
        },
      },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Verificar se checklist existe
  async exists(id: string): Promise<boolean> {
    const checklist = await prisma.checklist.findUnique({
      where: { id },
      select: { id: true },
    });
    return !!checklist;
  }
}
