// src/presentation/controllers/UserController.ts

import { Request, Response, NextFunction } from "express";
import { UserService } from "../../application/services/UserService";
import { ArticleService } from "../../application/services/ArticleService";
import { EvaluationService } from "../../application/services/EvaluationService";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";
import { ListAvailableEvaluatorsDto } from "../../application/dtos/userDto";
import { RoleType, User } from "@prisma/client";

export class UserController {
  private userService: UserService;
  private articleService: ArticleService;
  private evaluationService: EvaluationService;

  constructor() {
    this.userService = new UserService();
    this.articleService = new ArticleService();
    this.evaluationService = new EvaluationService();
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

  // JPF: Atualizar status de usuario
  async setStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = req.params.id;

      if (!userId) {
        res.status(400).json(ApiResponse.error("User ID is required", 400));
        return;
      }

      const user = await this.userService.findById(userId);
      if (!user) {
        res.status(400).json(ApiResponse.error("User does not exist", 400));
        return;
      }

      const result = await this.userService.swapStatus(userId);
      res
        .status(200)
        .json(ApiResponse.success(result, "User status changed successfully!"));
    } catch (error) {
      this.handleError(error, res, "Set user status error");
    }
  }

  // JPF: Deletar de usuario
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.params.id;

      if (!userId) {
        res.status(400).json(ApiResponse.error("User ID is required", 400));
        return;
      }

      const curUser: any = req.user;
      const user = await this.userService.findById(userId);
      if (!user) {
        res.status(400).json(ApiResponse.error("User does not exist", 400));
        return;
      }
      if (userId == curUser.id) {
        res
          .status(400)
          .json(ApiResponse.error("User can't delete itself", 400));
        return;
      }
      let articles = await this.articleService.findByUserId(userId);
      if (articles.length > 0) {
        res.status(400).json(ApiResponse.error("User has articles", 400));
        return;
      }
      let evaluations = await this.evaluationService.findByUserId(userId);
      if (evaluations.length > 0) {
        res.status(400).json(ApiResponse.error("User has evaluations", 400));
        return;
      }

      const result = await this.userService.delete(userId);
      res
        .status(200)
        .json(ApiResponse.success(result, "User deleted successfully!"));
    } catch (error) {
      this.handleError(error, res, "Delete user error");
    }
  }

  // JPF: Listar os usuarios por cargos com filtros.
  async getAllUsersByRole(
    req: Request,
    res: Response,
    next: NextFunction,
    role: RoleType
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
      const response: any = ApiResponse.success(
        result.users,
        "All users retrieved successfully!"
      );
      response.pagination = result.pagination;
      res.status(200).json(response);
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

    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
