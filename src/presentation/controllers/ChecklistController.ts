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

  async getChecklistWithQuestions(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { checklistId } = req.params;

      // Validar se o checklistId foi fornecido
      if (!checklistId) {
        res
          .status(400)
          .json(ApiResponse.error("Checklist ID is required", 400));
        return;
      }

      // Chamar o serviço para obter o checklist com perguntas
      const checklistWithQuestions =
        await this.checklistService.getChecklistById(checklistId);

      // Retornar sucesso com os dados do checklist
      res
        .status(200)
        .json(
          ApiResponse.success(
            checklistWithQuestions,
            "Checklist retrieved successfully"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get checklist with questions error");
    }
  }

  async getAllChecklists(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const isActive = req.query.isActive
        ? req.query.isActive === "true"
        : undefined; // Pega o parâmetro isActive da query string
      const withQuestions = req.query.withQuestions === "true"; // ✅ NOVA FLAG
      const search = req.query.search as string;

      console.log("🔍 ChecklistController: Getting checklists with:", {
        isActive,
        search,
        withQuestions,
      });

      const checklists = await this.checklistService.getAllChecklists(
        isActive,
        search,
        withQuestions
      );

      // Debug: Log first checklist to see structure
      if (checklists.length > 0) {
      }

      // 3️⃣ RETORNAR SUCESSO
      const message = withQuestions
        ? `${checklists.length} checklist(s) with questions retrieved successfully!`
        : `${checklists.length} checklist(s) retrieved successfully!`;

      res.status(200).json(ApiResponse.success(checklists, message));
    } catch (error) {
      this.handleError(error, res, "Get checklist with questions error");
    }
  }

  async deleteChecklist(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // 1️⃣ EXTRAIR ID DOS PARAMS
      const { checklistId } = req.params;

      // 2️⃣ VALIDAR SE O checklistId FOI FORNECIDO
      if (!checklistId) {
        res
          .status(400)
          .json(ApiResponse.error("Checklist ID is required", 400));
        return;
      }

      // 3️⃣ CHAMAR O SERVICE
      const result = await this.checklistService.deleteChecklist(checklistId);

      // 4️⃣ RETORNAR SUCESSO
      res
        .status(200)
        .json(
          ApiResponse.success(
            result,
            `Checklist '${result.name}' deactivated successfully!`
          )
        );
    } catch (error) {
      this.handleError(error, res, "Delete checklist error");
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

    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
