import e from "express";
import { EventEvaluator } from "@prisma/client";
import { EventEvaluatorRepository } from "../../infrastructure/repositories/EventEvaluatorRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  AddEvaluatorsResponseDto,
  AddEvaluatorsToEventDto,
  EventEvaluatorResponseDto,
  ListEventEvaluatorsDto,
  PaginatedEventEvaluatorsDto,
} from "../dtos/EventEvaluatorDto";

export class EventEvaluatorService {
  private eventRepository: EventRepository;
  private eventEvaluatorRepository: EventEvaluatorRepository;

  constructor() {
    this.eventRepository = new EventRepository();
    this.eventEvaluatorRepository = new EventEvaluatorRepository();
  }

  async addEvaluatorsToEvent(
    eventId: string,
    evaluatorsData: AddEvaluatorsToEventDto
  ): Promise<AddEvaluatorsResponseDto> {
    if (!this.isValidUUID(eventId)) {
      throw new AppError("Invalid event ID format", 400);
    }

    // Validar se tem avaliadores para adicionar
    if (!evaluatorsData.userIds || evaluatorsData.userIds.length === 0) {
      throw new AppError("No evaluators provided", 400);
    }

    const event = await this.eventRepository.findActiveById(eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    const added: EventEvaluatorResponseDto[] = [];
    const skipped: string[] = [];
    const errors: string[] = [];

    for (const userId of evaluatorsData.userIds) {
      if (!this.isValidUUID(userId)) {
        errors.push(userId);
        continue; // Pula para o próximo ID se for inválido
      }

      try {
        //Verificando se o avaliador está ativo

        const isAValidEvaluator =
          await this.eventEvaluatorRepository.isValidEvaluator(userId);

        if (!isAValidEvaluator) {
          errors.push(userId);
          continue; // Pula para o próximo ID se já for avaliador
        }

        //verificando se o avaliador já existe naquele evento
        const alreadyExistInEvent =
          await this.eventEvaluatorRepository.findByEventAndUser(
            eventId,
            userId
          );
        if (alreadyExistInEvent) {
          skipped.push(userId);
          continue; // Pula para o próximo ID se já existir
        }

        //adicionando o avaliador ao evento
        const newEvaluator =
          await this.eventEvaluatorRepository.addEvaluatorsToEvent(
            eventId,
            userId
          );
        added.push(this.toEventEvaluatorResponse(newEvaluator));
      } catch (error) {
        errors.push(
          `Error adding user ${userId}: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }

    const summary = {
      totalProcessed: evaluatorsData.userIds.length,
      totalAdded: added.length,
      totalSkipped: skipped.length,
      totalErrors: errors.length,
    };

    return { added, skipped, errors, summary };
  }

  async getEventEvaluators(
    eventId: string,
    filters: ListEventEvaluatorsDto
  ): Promise<PaginatedEventEvaluatorsDto> {
    //validando se o ID do evento é válido
    if (!this.isValidUUID(eventId)) {
      throw new AppError("Invalid event ID format", 400);
    }

    //validando se o evento existe e está ativo
    const eventExist = await this.eventRepository.findActiveById(eventId);
    if (!eventExist) {
      throw new AppError("Event not found or inactive", 404);
    }

    // Validando os filtros de paginação
    if (filters.page && filters.page < 1) {
      throw new AppError("Page number must be greater than 0", 400);
    }

    if (filters.limit && (filters.limit < 1 || filters.limit > 100)) {
      throw new AppError("Limit must be between 1 and 100", 400);
    }

    const { evaluators, total } =
      await this.eventEvaluatorRepository.findManyWithPagination(
        eventId,
        filters
      );

    // 5️⃣ CALCULAR INFORMAÇÕES DE PAGINAÇÃO
    const page = filters.page || 1; // Se não passou página, assume 1
    const limit = filters.limit || 10; // Se não passou limit, assume 10
    const totalPages = Math.ceil(total / limit); // 47 itens ÷ 10 = 4.7 → 5 páginas

    // 6️⃣ MONTAR RESPOSTA FINAL
    return {
      evaluators: evaluators.map((evaluator: EventEvaluator) =>
        this.toEventEvaluatorResponse(evaluator)
      ),
      total,
      page,
      limit,
      totalPages,
    };
  }

  async getEventEvaluator(id: string): Promise<EventEvaluatorResponseDto> {
    if (!this.isValidUUID(id)) {
      throw new AppError("Invalid evaluator ID format", 400);
    }

    // 2️⃣ BUSCAR NO REPOSITORY
    const eventEvaluator = await this.eventEvaluatorRepository.findById(id);

    // 3️⃣ VERIFICAR SE EXISTE
    if (!eventEvaluator) {
      throw new AppError("Event evaluator not found", 404);
    }

    // 4️⃣ RETORNAR RESPOSTA FORMATADA
    return this.toEventEvaluatorResponse(eventEvaluator);
  }

  async removeEvaluatorFromEvent(
    eventId: string,
    userId: string
  ): Promise<{ message: string; removedEvaluator: EventEvaluatorResponseDto }> {
    // 1️⃣ VALIDAR IDs
    if (!this.isValidUUID(eventId)) {
      throw new AppError("Invalid event ID format", 400);
    }

    if (!this.isValidUUID(userId)) {
      throw new AppError("Invalid user ID format", 400);
    }

    // 2️⃣ VERIFICAR SE O RELACIONAMENTO EXISTE
    const exists = await this.eventEvaluatorRepository.findByEventAndUser(
      eventId,
      userId
    );
    if (!exists) {
      throw new AppError("Evaluator is not assigned to this event", 404);
    }

    // 3️⃣ REMOVER O AVALIADOR DO EVENTO (SOFT DELETE)
    const removedEvaluator =
      await this.eventEvaluatorRepository.removeFromEvent(eventId, userId);

    // 4️⃣ RETORNAR CONFIRMAÇÃO
    return {
      message: "Evaluator removed from event successfully",
      removedEvaluator: this.toEventEvaluatorResponse(removedEvaluator),
    };
  }

  // PRIVATE METHODS

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  private toEventEvaluatorResponse(
    eventEvaluator: EventEvaluator & any
  ): EventEvaluatorResponseDto {
    return {
      id: eventEvaluator.id,
      eventId: eventEvaluator.eventId,
      userId: eventEvaluator.userId,
      isActive: eventEvaluator.isActive,
      createdAt: eventEvaluator.createdAt,
      updatedAt: eventEvaluator.updatedAt,
      user: eventEvaluator.user,
      event: eventEvaluator.event,
    };
  }
}
