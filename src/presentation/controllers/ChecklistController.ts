// src/presentation/controllers/ChecklistController.ts

import { Request, Response, NextFunction } from "express";
import { ChecklistService } from "../../application/services/checklistService";
import { CreateChecklistDto } from "../../application/dtos/ChecklistDto";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

export class ChecklistController {
  private checklistService: ChecklistService;

  constructor() {
    this.checklistService = new ChecklistService();
  }

  // ========================================
  // CREATE CHECKLIST (Apenas COORDINATOR)
  // ========================================
  async createChecklist(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // 1️⃣ EXTRAIR DADOS DO BODY
      const { name, description } = req.body;

      // 2️⃣ VALIDAR SE OS DADOS FORAM FORNECIDOS
      if (!name) {
        res
          .status(400)
          .json(ApiResponse.error("Checklist name is required", 400));
        return;
      }

      // 3️⃣ MONTAR DTO
      const checklistData: CreateChecklistDto = {
        name: name.trim(),
        description: description?.trim() || undefined,
      };

      // 4️⃣ CHAMAR O SERVICE
      const checklist = await this.checklistService.createChecklist(
        checklistData
      );

      // 5️⃣ RETORNAR SUCESSO
      res
        .status(201)
        .json(
          ApiResponse.success(
            checklist,
            `Checklist '${checklist.name}' created successfully!`
          )
        );
    } catch (error) {
      this.handleError(error, res, "Create checklist error");
    }
  }

  // ========================================
  // MÉTODO PRIVADO PARA TRATAMENTO DE ERROS
  // ========================================
  private handleError(error: unknown, res: Response, context: string): void {
    if (error instanceof AppError) {
      res
        .status(error.statusCode)
        .json(ApiResponse.error(error.message, error.statusCode));
      return;
    }

    console.error(`❌ ${context}:`, error);
    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
