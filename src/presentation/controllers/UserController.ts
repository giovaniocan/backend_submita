// src/presentation/controllers/UserController.ts

import { Request, Response, NextFunction } from "express";
import { UserService } from "../../application/services/UserService";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";
import { ListAvailableEvaluatorsDto } from "../../application/dtos/userDto";
import { RoleType } from "../../generated/prisma";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // ========================================
  // LISTAR TODOS OS AVALIADORES
  // ========================================
  async getAllEvaluators(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const filters: ListAvailableEvaluatorsDto = {
        page: req.query.page ? parseInt(req.query.page as string) : undefined,
        limit: req.query.limit
          ? parseInt(req.query.limit as string)
          : undefined,
        search: req.query.search as string,
        isActive: req.query.isActive
          ? req.query.isActive === "true"
          : undefined,
      };

      const result = await this.userService.getAllEvaluators(filters);

      res
        .status(200)
        .json(
          ApiResponse.success(result, "All evaluators retrieved successfully!")
        );
    } catch (error) {
      this.handleError(error, res, "Get all evaluators error");
    }
  }

  // JPF: Listar os usuarios por cargos com filtros.
  async getAllUsersByRole(
    req: Request,
    res: Response,
    next: NextFunction,
    role:RoleType
  ): Promise<void> {
    try {
      const filters: ListAvailableEvaluatorsDto = {
        page: req.query.page ? parseInt(req.query.page as string) : undefined,
        limit: req.query.limit
          ? parseInt(req.query.limit as string)
          : undefined,
        search: req.query.search as string,
        isActive: req.query.isActive
          ? req.query.isActive === "true"
          : undefined,
      };
      const result = await this.userService.getAllUsersByRole(role, filters);
      const response:any = ApiResponse.success(result.users, "All users retrieved successfully!");
      response.pagination = result.pagination;
      res
        .status(200)
        .json(
          response
        );
    } catch (error) {
      this.handleError(error, res, "Get users error");
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
