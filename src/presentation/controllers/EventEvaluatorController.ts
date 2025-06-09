import { Request, Response, NextFunction } from "express";
import { EventEvaluatorService } from "../../application/services/EventEvaluatorService";
import { AddEvaluatorsToEventDto } from "../../application/dtos/EventEvaluatorDto";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

export class EventEvaluatorController {
  private eventEvaluatorService: EventEvaluatorService;

  constructor() {
    this.eventEvaluatorService = new EventEvaluatorService();
  }

  async addEvaluatorsToEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { eventId } = req.params;
      const evaluatorsData: AddEvaluatorsToEventDto = req.body;

      // Validação básica
      if (!evaluatorsData.userIds || !Array.isArray(evaluatorsData.userIds)) {
        res
          .status(400)
          .json(
            ApiResponse.error("userIds is required and must be an array", 400)
          );
        return;
      }

      if (evaluatorsData.userIds.length === 0) {
        res
          .status(400)
          .json(ApiResponse.error("At least one user ID is required", 400));
        return;
      }

      const result = await this.eventEvaluatorService.addEvaluatorsToEvent(
        eventId,
        evaluatorsData
      );

      // Determinar status code baseado no resultado
      const statusCode = result.summary.totalAdded > 0 ? 201 : 400;

      // Mensagem personalizada baseada no resultado
      let message = "";
      if (result.summary.totalAdded === result.summary.totalProcessed) {
        message = `All ${result.summary.totalAdded} evaluator(s) added successfully!`;
      } else if (result.summary.totalAdded > 0) {
        message = `${result.summary.totalAdded} of ${result.summary.totalProcessed} evaluator(s) added successfully!`;
      } else {
        message = "No evaluators were added";
      }

      res.status(statusCode).json(ApiResponse.success(result, message));
    } catch (error) {
      this.handleError(error, res, "Add evaluators to event error");
    }
  }

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
