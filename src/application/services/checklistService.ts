// src/application/services/ChecklistService.ts

import { ChecklistRepository } from "../../infrastructure/repositories/ChecklistRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  CreateChecklistDto,
  ChecklistResponseDto,
  ChecklistWithQuestionsDto,
} from "../dtos/ChecklistDto";
import { Checklist, Question } from "@prisma/client";
import { create } from "domain";

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

  async getChecklistById(id: string): Promise<CreateChecklistDto> {
    // 1️⃣ VALIDAR FORMATO DO ID
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid checklist ID format", 400);
    }

    // 2️⃣ BUSCAR CHECKLIST POR ID
    const checklist = await this.checklistRepository.findByIdWithQuestions(id);

    if (!checklist) {
      throw new AppError("Checklist not found", 404);
    }

    return this.toChecklistResponsewithQuestions(checklist);
  }

  async getAllChecklists(
    isActive?: boolean,
    search?: string,
    withQuestions: boolean = false
  ): Promise<ChecklistResponseDto[]> {
    // 1️⃣ BUSCAR CHECKLISTS COM FILTROS
    console.log("🔍 ChecklistService: Getting checklists with:", {
      isActive,
      search,
      withQuestions,
    });

    const checklists = await this.checklistRepository.findAllWithFilters(
      isActive,
      search,
      withQuestions
    );

    // Debug: Log estrutura do primeiro checklist
    if (checklists.length > 0) {
    }

    if (withQuestions) {
      const result = checklists.map((checklist: Checklist) =>
        this.toChecklistResponsewithQuestions(checklist)
      );

      return result;
    } else {
      return checklists.map((checklist: Checklist) =>
        this.toChecklistResponse(checklist)
      );
    }
  }
  async deleteChecklist(id: string): Promise<ChecklistResponseDto> {
    // 1️⃣ VALIDAR ID
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid checklist ID format", 400);
    }

    // 2️⃣ VERIFICAR SE O CHECKLIST EXISTE
    const checklist = await this.checklistRepository.findById(id);
    if (!checklist) {
      throw new AppError("Checklist not found", 404);
    }

    // 3️⃣ VERIFICAR SE JÁ ESTÁ INATIVO
    if (!checklist.isActive) {
      throw new AppError("Checklist is already inactive", 400);
    }

    // 4️⃣ SOFT DELETE - DESATIVAR O CHECKLIST
    const deletedChecklist = await this.checklistRepository.softDelete(id);

    // 5️⃣ TAMBÉM DESATIVAR TODAS AS PERGUNTAS RELACIONADAS
    await this.checklistRepository.deactivateAllQuestions(id);

    // 6️⃣ RETORNAR RESPOSTA FORMATADA
    return this.toChecklistResponse(deletedChecklist);
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

  private toChecklistResponsewithQuestions(
    checklist: Checklist & any
  ): ChecklistWithQuestionsDto {
    return {
      id: checklist.id,
      name: checklist.name,
      description: checklist.description,
      isActive: checklist.isActive,
      createdAt: checklist.createdAt,
      updatedAt: checklist.updatedAt,
      _count: checklist._count,
      questions: checklist.questions.map((question: Question) => ({
        id: question.id,
        description: question.description,
        type: question.type,
        isRequired: question.isRequired,
        order: question.order,
        isActive: question.isActive,
        createdAt: question.createdAt,
        updatedAt: question.updatedAt,
      })),
    };
  }

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
}
