// src/infrastructure/repositories/ChecklistRepository.ts

import { CreateChecklistDto } from "../../application/dtos/ChecklistDto";
import { Checklist } from "../../generated/prisma";
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
