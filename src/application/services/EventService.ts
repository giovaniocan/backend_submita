import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  CreateEventDto,
  UpdateEventDto,
  EventResponseDto,
  ListEventsDto,
  PaginatedEventsDto,
} from "../dtos/EventDto";
import { Event } from "../../generated/prisma";

export class EventService {
  private eventRepository: EventRepository;

  constructor() {
    this.eventRepository = new EventRepository();
  }

  // ========================================
  // CREATE
  // ========================================
  async createEvent(eventData: CreateEventDto): Promise<EventResponseDto> {
    // Validar dados de entrada
    this.validateCreateData(eventData);

    // Validar datas
    this.validateDates(eventData);

    const event = await this.eventRepository.create(eventData);
    return this.toEventResponse(event);
  }

  // ========================================
  // READ
  // ========================================
  
  // Buscar evento por ID
  async getEventById(id: string, includeStats = false): Promise<EventResponseDto> {
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid event ID format", 400);
    }

    const event = includeStats
      ? await this.eventRepository.findByIdWithStats(id)
      : await this.eventRepository.findById(id);

    if (!event) {
      throw new AppError("Event not found", 404);
    }

    return this.toEventResponse(event);
  }

  // Listar eventos com filtros e paginação
  async getEvents(filters: ListEventsDto): Promise<PaginatedEventsDto> {
    // Validar parâmetros de paginação
    if (filters.page && filters.page < 1) {
      throw new AppError("Page must be greater than 0", 400);
    }

    if (filters.limit && (filters.limit < 1 || filters.limit > 100)) {
      throw new AppError("Limit must be between 1 and 100", 400);
    }

    const { events, total } = await this.eventRepository.findMany(filters);

    const page = filters.page || 1;
    const limit = filters.limit || 10;
    const totalPages = Math.ceil(total / limit);

    return {
      events: events.map((event) => this.toEventResponse(event)),
      total,
      page,
      limit,
      totalPages,
    };
  }

  // Buscar apenas eventos ativos
  async getActiveEvents(): Promise<EventResponseDto[]> {
    const events = await this.eventRepository.findActiveEvents();
    return events.map((event) => this.toEventResponse(event));
  }

  // Obter estatísticas de eventos
  async getEventsStats(): Promise<{ [key: string]: number }> {
    return await this.eventRepository.countByStatus();
  }

  // ========================================
  // UPDATE
  // ========================================
  async updateEvent(id: string, eventData: UpdateEventDto): Promise<EventResponseDto> {
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid event ID format", 400);
    }

    // Verificar se evento existe
    const existingEvent = await this.eventRepository.findById(id);
    if (!existingEvent) {
      throw new AppError("Event not found", 404);
    }

    // Validar dados se fornecidos
    if (Object.keys(eventData).length === 0) {
      throw new AppError("No data provided for update", 400);
    }

    // Validar datas se fornecidas
    if (this.hasDateFields(eventData)) {
      this.validateUpdateDates(eventData, existingEvent);
    }

    const updatedEvent = await this.eventRepository.update(id, eventData);
    return this.toEventResponse(updatedEvent);
  }

  // ========================================
  // DELETE
  // ========================================
  
  // Soft delete (recomendado)
  async softDeleteEvent(id: string): Promise<{ message: string }> {
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid event ID format", 400);
    }

    const existingEvent = await this.eventRepository.findById(id);
    if (!existingEvent) {
      throw new AppError("Event not found", 404);
    }

    if (!existingEvent.isActive) {
      throw new AppError("Event is already inactive", 400);
    }

    await this.eventRepository.softDelete(id);
    return { message: "Event deactivated successfully" };
  }

  // Hard delete (apenas se não houver artigos)
  async hardDeleteEvent(id: string): Promise<{ message: string }> {
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid event ID format", 400);
    }

    const existingEvent = await this.eventRepository.findById(id);
    if (!existingEvent) {
      throw new AppError("Event not found", 404);
    }

    // Verificar se tem artigos associados
    const hasArticles = await this.eventRepository.hasArticles(id);
    if (hasArticles) {
      throw new AppError(
        "Cannot delete event with associated articles. Use soft delete instead.",
        400
      );
    }

    await this.eventRepository.hardDelete(id);
    return { message: "Event deleted permanently" };
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================
  
  private validateCreateData(eventData: CreateEventDto): void {
    if (!eventData.name || eventData.name.trim().length < 3) {
      throw new AppError("Event name must have at least 3 characters", 400);
    }

    if (eventData.name.length > 150) {
      throw new AppError("Event name cannot exceed 150 characters", 400);
    }

    if (eventData.description && eventData.description.length > 300) {
      throw new AppError("Event description cannot exceed 300 characters", 400);
    }

    if (eventData.banner && eventData.banner.length > 200) {
      throw new AppError("Banner URL cannot exceed 200 characters", 400);
    }

    if (!["DIRECT", "PAIR", "PANEL"].includes(eventData.evaluationType)) {
      throw new AppError("Invalid evaluation type", 400);
    }
  }

  private validateDates(eventData: CreateEventDto): void {
    const now = new Date();
    const eventStart = new Date(eventData.eventStartDate);
    const eventEnd = new Date(eventData.eventEndDate);
    const submissionStart = new Date(eventData.submissionStartDate);
    const submissionEnd = new Date(eventData.submissionEndDate);

    // Validar se as datas são válidas
    if (isNaN(eventStart.getTime()) || isNaN(eventEnd.getTime()) ||
        isNaN(submissionStart.getTime()) || isNaN(submissionEnd.getTime())) {
      throw new AppError("Invalid date format", 400);
    }

    // Data de início do evento deve ser posterior à atual
    if (eventStart <= now) {
      throw new AppError("Event start date must be in the future", 400);
    }

    // Data de fim deve ser posterior à de início
    if (eventEnd <= eventStart) {
      throw new AppError("Event end date must be after start date", 400);
    }

    // Submissões devem estar dentro do período do evento
    if (submissionStart < eventStart || submissionEnd > eventEnd) {
      throw new AppError("Submission period must be within event period", 400);
    }

    // Data de fim das submissões deve ser posterior à de início
    if (submissionEnd <= submissionStart) {
      throw new AppError("Submission end date must be after start date", 400);
    }
  }

  private validateUpdateDates(eventData: UpdateEventDto, existingEvent: Event): void {
    const eventStart = eventData.eventStartDate || existingEvent.eventStartDate;
    const eventEnd = eventData.eventEndDate || existingEvent.eventEndDate;
    const submissionStart = eventData.submissionStartDate || existingEvent.submissionStartDate;
    const submissionEnd = eventData.submissionEndDate || existingEvent.submissionEndDate;

    // Aplicar as mesmas validações do create
    if (eventEnd <= eventStart) {
      throw new AppError("Event end date must be after start date", 400);
    }

    if (submissionStart < eventStart || submissionEnd > eventEnd) {
      throw new AppError("Submission period must be within event period", 400);
    }

    if (submissionEnd <= submissionStart) {
      throw new AppError("Submission end date must be after start date", 400);
    }
  }

  private hasDateFields(eventData: UpdateEventDto): boolean {
    return !!(
      eventData.eventStartDate ||
      eventData.eventEndDate ||
      eventData.submissionStartDate ||
      eventData.submissionEndDate
    );
  }

  private isValidUUID(uuid: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  private toEventResponse(event: Event & { _count?: any }): EventResponseDto {
    return {
      id: event.id,
      name: event.name,
      banner: event.banner ?? "",
      description: event.description ?? "",
      eventStartDate: event.eventStartDate,
      eventEndDate: event.eventEndDate,
      submissionStartDate: event.submissionStartDate,
      submissionEndDate: event.submissionEndDate,
      status: event.status,
      evaluationType: event.evaluationType,
      isActive: event.isActive,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
      _count: event._count,
    };
  }
}