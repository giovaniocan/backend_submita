// src/presentation/controllers/StatsController.ts

import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";
import { StatsService } from "../../application/services/StatsService";

export class StatsController {
  private statsService: StatsService;

  constructor() {
    this.statsService = new StatsService();
  }

  // ========================================
  // COORDINATOR STATS
  // ========================================
  async getCoordinatorStats(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const stats = await this.statsService.getCoordinatorStats();

      res
        .status(200)
        .json(
          ApiResponse.success(
            stats,
            "Coordinator stats retrieved successfully!"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Get coordinator stats error");
    }
  }

  // ========================================
  // STUDENT STATS
  // ========================================
  async getStudentStats(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = req.user?.id; // Assumindo que o user vem do middleware de auth

      if (!userId) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const stats = await this.statsService.getStudentStats(userId);

      res
        .status(200)
        .json(
          ApiResponse.success(stats, "Student stats retrieved successfully!")
        );
    } catch (error) {
      this.handleError(error, res, "Get student stats error");
    }
  }

  // ========================================
  // EVALUATOR STATS
  // ========================================
  async getEvaluatorStats(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = req.user?.id; // Assumindo que o user vem do middleware de auth

      if (!userId) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      const stats = await this.statsService.getEvaluatorStats(userId);

      res
        .status(200)
        .json(
          ApiResponse.success(stats, "Evaluator stats retrieved successfully!")
        );
    } catch (error) {
      this.handleError(error, res, "Get evaluator stats error");
    }
  }

  // ========================================
  // ERROR HANDLER
  // ========================================
  private handleError(error: any, res: Response, context: string): void {
    if (error instanceof AppError) {
      res
        .status(error.statusCode)
        .json(ApiResponse.error(error.message, error.statusCode));
      return;
    }

    // Erro genérico
    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}
