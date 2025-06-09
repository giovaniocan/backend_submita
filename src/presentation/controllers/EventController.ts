import { Request, Response, NextFunction } from "express";
import { CreateEventDto, UpdateEventDto, ListEventsDto } from "../../application/dtos/EventDto";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";
import { EventService } from "../../application/services/EventService";

export class EventController {
  private eventService: EventService;

  constructor() {
    this.eventService = new EventService();
  }

  // ========================================
  // CREATE (Apenas COORDINATOR)
  // ========================================
  async createEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const eventData: CreateEventDto = req.body;
      
      // Converter strings de data para Date objects
      if (eventData.eventStartDate) {
        eventData.eventStartDate = new Date(eventData.eventStartDate);
      }
      if (eventData.eventEndDate) {
        eventData.eventEndDate = new Date(eventData.eventEndDate);
      }
      if (eventData.submissionStartDate) {
        eventData.submissionStartDate = new Date(eventData.submissionStartDate);
      }
      if (eventData.submissionEndDate) {
        eventData.submissionEndDate = new Date(eventData.submissionEndDate);
      }

      const event = await this.eventService.createEvent(eventData);

      res.status(201).json(ApiResponse.success(event, "Event created successfully!"));
    } catch (error) {
      this.handleError(error, res, "Create event error");
    }
  }

  // ========================================
  // READ (Todas as roles)
  // ========================================
  
  // Buscar evento por ID
  async getEventById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const includeStats = req.query.includeStats === "true";

      const event = await this.eventService.getEventById(id, includeStats);

      res.status(200).json(ApiResponse.success(event, "Event retrieved successfully!"));
    } catch (error) {
      this.handleError(error, res, "Get event error");
    }
  }

  // Listar eventos com filtros
  async getEvents(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const filters: ListEventsDto = {
        page: req.query.page ? parseInt(req.query.page as string) : undefined,
        limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
        search: req.query.search as string,
        status: req.query.status as any,
        isActive: req.query.isActive ? req.query.isActive === "true" : undefined,
        evaluationType: req.query.evaluationType as any,
        includeStats: req.query.includeStats === "true",
      };

      const result = await this.eventService.getEvents(filters);

      res.status(200).json(ApiResponse.success(result, "Events retrieved successfully!"));
    } catch (error) {
      this.handleError(error, res, "Get events error");
    }
  }

  // Buscar apenas eventos ativos
  async getActiveEvents(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const events = await this.eventService.getActiveEvents();

      res.status(200).json(ApiResponse.success(events, "Active events retrieved successfully!"));
    } catch (error) {
      this.handleError(error, res, "Get active events error");
    }
  }

  // Obter estatísticas de eventos
  async getEventsStats(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const stats = await this.eventService.getEventsStats();

      res.status(200).json(ApiResponse.success(stats, "Events statistics retrieved successfully!"));
    } catch (error) {
      this.handleError(error, res, "Get events stats error");
    }
  }

  // ========================================
  // UPDATE (Apenas COORDINATOR)
  // ========================================
  async updateEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const eventData: UpdateEventDto = req.body;

      // Converter strings de data para Date objects se fornecidas
      if (eventData.eventStartDate) {
        eventData.eventStartDate = new Date(eventData.eventStartDate);
      }
      if (eventData.eventEndDate) {
        eventData.eventEndDate = new Date(eventData.eventEndDate);
      }
      if (eventData.submissionStartDate) {
        eventData.submissionStartDate = new Date(eventData.submissionStartDate);
      }
      if (eventData.submissionEndDate) {
        eventData.submissionEndDate = new Date(eventData.submissionEndDate);
      }

      const updatedEvent = await this.eventService.updateEvent(id, eventData);

      res.status(200).json(ApiResponse.success(updatedEvent, "Event updated successfully!"));
    } catch (error) {
      this.handleError(error, res, "Update event error");
    }
  }

  // ========================================
  // DELETE (Apenas COORDINATOR)
  // ========================================
  
  // Soft delete (recomendado)
  async softDeleteEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      const result = await this.eventService.softDeleteEvent(id);

      res.status(200).json(ApiResponse.success(result, "Event deactivated successfully!"));
    } catch (error) {
      this.handleError(error, res, "Soft delete event error");
    }
  }

  // Hard delete (apenas se não houver artigos)
  async hardDeleteEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      const result = await this.eventService.hardDeleteEvent(id);

      res.status(200).json(ApiResponse.success(result, "Event deleted permanently!"));
    } catch (error) {
      this.handleError(error, res, "Hard delete event error");
    }
  }

  // ========================================
  // MÉTODO PRIVADO PARA TRATAMENTO DE ERROS
  // ========================================
  private handleError(error: unknown, res: Response, context: string): void {
    if (error instanceof AppError) {
      res.status(error.statusCode).json(ApiResponse.error(error.message, error.statusCode));
      return;
    }

    console.error(`❌ ${context}:`, error);
    res.status(500).json(ApiResponse.error("Internal server error", 500));
  }
}