import { Request, Response, NextFunction } from "express";
import { EventEvaluatorService } from "../../application/services/EventEvaluatorService";
import {
  AddEvaluatorsToEventDto,
  ListEventEvaluatorsDto,
} from "../../application/dtos/EventEvaluatorDto";
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

  async getEventEvaluators(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params;
      const filters: ListEventEvaluatorsDto = {
        page: req.query.page ? parseInt(req.query.page as string) : undefined,
        limit: req.query.limit
          ? parseInt(req.query.limit as string)
          : undefined,
        search: req.query.search as string,
        isActive: req.query.isActive
          ? req.query.isActive === "true"
          : undefined,
        isFromBpk: req.query.isFromBpk
          ? req.query.isFromBpk === "true"
          : undefined,
      };

      const result = await this.eventEvaluatorService.getEventEvaluators(
        eventId,
        filters
      );

      res
        .status(200)
        .json(
          ApiResponse.success(result, "Event evaluators retrieved successfully")
        );
    } catch (error) {
      this.handleError(error, res, "Get event evaluators error");
    }
  }

  async getEventOneEvaluator(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // Pegar o ID do EventEvaluator da URL
      const { id } = req.params; // De /events/evaluators/:id

      const result = await this.eventEvaluatorService.getEventEvaluator(id);

      res
        .status(200)
        .json(
          ApiResponse.success(result, "Event evaluator retrieved successfully!")
        );
    } catch (error) {
      this.handleError(error, res, "Get event evaluator error");
    }
  }

  async removeEvaluatorFromEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // Pegar IDs da URL: /events/:eventId/evaluators/:userId
      const { eventId, userId } = req.params;

      const result = await this.eventEvaluatorService.removeEvaluatorFromEvent(
        eventId,
        userId
      );

      res
        .status(200)
        .json(
          ApiResponse.success(
            result,
            "Evaluator removed from event successfully!"
          )
        );
    } catch (error) {
      this.handleError(error, res, "Remove evaluator from event error");
    }
  }

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
