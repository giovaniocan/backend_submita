import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  CreateEventDto,
  UpdateEventDto,
  EventResponseDto,
  ListEventsDto,
  PaginatedEventsDto,
  OptionalArgs,
} from "../dtos/EventDto";
import { Article, Event } from "@prisma/client";
import { ChecklistRepository } from "../../infrastructure/repositories/ChecklistRepository";

export class EventService {
  private eventRepository: EventRepository;
  private checklistRepository: ChecklistRepository; // Adicionei a dependência do ChecklistRepository

  constructor() {
    this.eventRepository = new EventRepository();
    this.checklistRepository = new ChecklistRepository(); // Inicializando o ChecklistRepository
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
  async getEventById(
    id: string,
    includeStats = false
  ): Promise<EventResponseDto> {
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

  async getArticlesByEventId(
    eventId: string,
    optionalArgs: OptionalArgs
  ): Promise<{
    articles: Article[];
    pagination: object;
  }> {
    const { search, status, page, limit } = optionalArgs;
    if (!this.isValidUUID(eventId)) {
      throw new AppError("Invalid event ID format", 400);
    }

    if (page) {
      if (!limit) throw new AppError("Limit must be defined", 400);
      if (isNaN(Number(page))) throw new AppError("Invalid type of page", 400);
      if (Number(page) <= 0)
        throw new AppError("Page must be highter than 0", 400);
    }
    if (limit) {
      if (isNaN(Number(limit)))
        throw new AppError("Invalid type of limit", 400);
      if (Number(limit) <= 0)
        throw new AppError("Limit must be highter than 0", 400);
    }

    const data = await this.eventRepository.findArticlesByEventId(
      eventId,
      optionalArgs
    );

    if (!data) {
      throw new AppError("Articles not found", 404);
    }
    if (data.articles.length == 0) {
      throw new AppError("Articles not found", 404);
    }

    let total: number = data.total;
    let totalPages: number = Math.ceil(total / (limit ?? 1));

    return {
      articles: data.articles,
      pagination: {
        total: total,
        page,
        limit,
        totalPages,
      },
    };
  }

  // async getStatsByEventId(id: string): Promise<Object> {
  //   if (!this.isValidUUID(id)) {
  //     throw new AppError("Invalid event ID format", 400);
  //   }

  //   const stats = await this.eventRepository.findStatsById(id);
  //   if (!stats) {
  //     throw new AppError("Event not found", 404);
  //   }
  //   return stats;
  // }

  async getActiveEventById(
    id: string,
    includeStats = false
  ): Promise<EventResponseDto> {
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid event ID format", 400);
    }

    const event = await this.eventRepository.findActiveById(id);

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
  async updateEvent(
    id: string,
    eventData: UpdateEventDto
  ): Promise<EventResponseDto> {
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

  // JPF: Editar evento
  async editEvent(
    id: string,
    eventData: UpdateEventDto
  ): Promise<EventResponseDto> {
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid event ID format", 400);
    }

    // Verificar se evento existe
    const existingEvent = await this.eventRepository.findById(id);
    if (!existingEvent) {
      throw new AppError("Event not found", 404);
    }

    // Não permitir que eventos completos sejam editados
    const status = ["COMPLETED"];
    if (status.includes(existingEvent.status)) {
      throw new AppError("Can't edit completed event", 400);
    }

    const allowedKeys = [
      "name",
      "description",
      "banner",
      "evaluationType",
      "status",
      "eventStartDate",
      "eventEndDate",
      "submissionStartDate",
      "submissionEndDate",
    ];
    // Remove objetos desnecessarios do eventData
    eventData = Object.fromEntries(
      Object.entries(eventData).filter(([key]) => allowedKeys.includes(key))
    );

    // Validar dados se fornecidos
    if (Object.keys(eventData).length === 0) {
      throw new AppError("No data provided for update", 400);
    }

    // Validar datas se fornecidas
    if (this.hasDateFields(eventData)) {
      this.validateUpdateDates(eventData, existingEvent);
    }

    let eventStartDate = eventData.eventStartDate;
    if (!eventStartDate) eventStartDate = existingEvent.eventStartDate;

    let eventEndDate = eventData.eventEndDate;
    if (!eventEndDate) eventEndDate = existingEvent.eventEndDate;

    let submissionStartDate = eventData.submissionStartDate;
    if (!submissionStartDate)
      submissionStartDate = existingEvent.submissionStartDate;

    let submissionEndDate = eventData.submissionEndDate;
    if (!submissionEndDate) submissionEndDate = existingEvent.submissionEndDate;

    if (eventStartDate > eventEndDate)
      throw new AppError(
        "start date can't be higher than end date of event",
        400
      );
    if (submissionEndDate > eventEndDate)
      throw new AppError(
        "end submission date can't be higher than end date of event",
        400
      );
    if (submissionStartDate < eventStartDate)
      throw new AppError(
        "submission date can't be lower than start date of event",
        400
      );
    if (submissionStartDate > submissionEndDate)
      throw new AppError(
        "submission start date can't be higher than submission end date",
        400
      );

    // Validar evaluationType
    if (eventData.evaluationType) {
      let evaluationTypes = ["DIRECT", "PAIR", "PANEL"];
      if (!evaluationTypes.includes(eventData.evaluationType)) {
        throw new AppError("Type of evaluation dosen't exist", 400);
      }
    }

    // Validar status
    if (eventData.status) {
      let statusTypes = [
        "DRAFT",
        "SUBMISSIONS_OPEN",
        "SUBMISSIONS_CLOSED",
        "IN_EVALUATION",
        "COMPLETED",
        "CANCELLED",
      ];
      if (!statusTypes.includes(eventData.status)) {
        throw new AppError("Type of status dosen't exist", 400);
      }
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

  //CHECKLISTS

  async assignChecklistToEvent(
    eventId: string,
    checklistId: string
  ): Promise<EventResponseDto> {
    const event = await this.eventRepository.findActiveById(eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    const checklist = await this.checklistRepository.findActiveById(
      checklistId
    );
    if (!checklist) {
      throw new AppError("Checklist not found or inactive", 404);
    }

    // 3️⃣ VERIFICAR SE O EVENTO JÁ TEM UM CHECKLIST
    if (event.checklistId) {
      throw new AppError(
        `Event already has a checklist assigned. Remove the current checklist first.`,
        400
      );
    }

    // 4️⃣ ATRIBUIR O CHECKLIST AO EVENTO
    const updatedEvent = await this.eventRepository.assignChecklist(
      eventId,
      checklistId
    );

    // 5️⃣ RETORNAR RESPOSTA FORMATADA
    return this.toEventResponse(updatedEvent);
  }

  // ========================================
  // REMOVE CHECKLIST FROM EVENT
  // ========================================
  async removeChecklistFromEvent(eventId: string): Promise<EventResponseDto> {
    const event = await this.eventRepository.findActiveById(eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    if (!event.checklistId) {
      throw new AppError("Event does not have a checklist assigned", 400);
    }

    // 3️⃣ REMOVER O CHECKLIST DO EVENTO
    const updatedEvent = await this.eventRepository.removeChecklist(eventId);

    // 4️⃣ RETORNAR RESPOSTA FORMATADA
    return this.toEventResponse(updatedEvent);
  }

  // ========================================
  // ✅ NOVO: GET EVENT CHECKLIST QUESTIONS
  // ========================================
  async getEventChecklistQuestions(eventId: string): Promise<any[]> {
    // 1️⃣ VALIDAR ID DO EVENTO
    if (!this.isValidUUID(eventId)) {
      throw new AppError("Invalid event ID format", 400);
    }

    // 2️⃣ BUSCAR EVENTO
    const event = await this.eventRepository.findActiveById(eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    // 3️⃣ VERIFICAR SE TEM CHECKLIST
    if (!event.checklistId) {
      throw new AppError("Event does not have a checklist assigned", 404);
    }

    // 4️⃣ BUSCAR QUESTÕES DO CHECKLIST
    const checklist = await this.checklistRepository.findByIdWithQuestions(
      event.checklistId
    );

    if (!checklist) {
      throw new AppError("Checklist not found", 404);
    }

    // 5️⃣ RETORNAR APENAS AS QUESTÕES ATIVAS
    return (checklist as any).questions || [];
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
    if (
      isNaN(eventStart.getTime()) ||
      isNaN(eventEnd.getTime()) ||
      isNaN(submissionStart.getTime()) ||
      isNaN(submissionEnd.getTime())
    ) {
      throw new AppError("Invalid date format", 400);
    }
  }

  private validateUpdateDates(
    eventData: UpdateEventDto,
    existingEvent: Event
  ): void {
    const eventStart = eventData.eventStartDate || existingEvent.eventStartDate;
    const eventEnd = eventData.eventEndDate || existingEvent.eventEndDate;
    const submissionStart =
      eventData.submissionStartDate || existingEvent.submissionStartDate;
    const submissionEnd =
      eventData.submissionEndDate || existingEvent.submissionEndDate;

    // Validar se as datas são válidas
    if (
      isNaN(eventStart.getTime()) ||
      isNaN(eventEnd.getTime()) ||
      isNaN(submissionStart.getTime()) ||
      isNaN(submissionEnd.getTime())
    ) {
      throw new AppError("Invalid date format", 400);
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
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
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
