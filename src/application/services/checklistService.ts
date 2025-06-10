// src/application/services/ChecklistService.ts

import { ChecklistRepository } from "../../infrastructure/repositories/ChecklistRepository";
import { AppError } from "../../shared/errors/AppError";
import { CreateChecklistDto, ChecklistResponseDto } from "../dtos/ChecklistDto";
import { Checklist, Question } from "../../generated/prisma";

export class ChecklistService {
  private checklistRepository: ChecklistRepository;

  constructor() {
    this.checklistRepository = new ChecklistRepository();
  }

  // ========================================
  // CREATE CHECKLIST
  // ========================================
  async createChecklist(
    checklistData: CreateChecklistDto
  ): Promise<ChecklistResponseDto> {
    // 1️⃣ VALIDAR DADOS DE ENTRADA
    this.validateCreateData(checklistData);

    // 2️⃣ VERIFICAR SE JÁ EXISTE CHECKLIST COM O MESMO NOME
    const existingChecklist = await this.checklistRepository.findByName(
      checklistData.name
    );

    if (existingChecklist) {
      throw new AppError("A checklist with this name already exists", 409);
    }

    // 3️⃣ CRIAR O CHECKLIST
    const checklist = await this.checklistRepository.create(checklistData);

    // 4️⃣ RETORNAR RESPOSTA FORMATADA
    return this.toChecklistResponse(checklist);
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================

  private validateCreateData(checklistData: CreateChecklistDto): void {
    // Validar nome
    if (!checklistData.name || checklistData.name.trim().length < 3) {
      throw new AppError("Checklist name must have at least 3 characters", 400);
    }

    if (checklistData.name.length > 100) {
      throw new AppError("Checklist name cannot exceed 100 characters", 400);
    }

    // Validar descrição (se fornecida)
    if (checklistData.description && checklistData.description.length > 300) {
      throw new AppError(
        "Checklist description cannot exceed 300 characters",
        400
      );
    }
  }

  private toChecklistResponse(
    checklist: Checklist & any
  ): ChecklistResponseDto {
    return {
      id: checklist.id,
      name: checklist.name,
      description: checklist.description,
      isActive: checklist.isActive,
      createdAt: checklist.createdAt,
      updatedAt: checklist.updatedAt,
      _count: checklist._count,
    };
  }
}
