import e from "express";
import { EventEvaluator } from "../../generated/prisma";
import { EventEvaluatorRepository } from "../../infrastructure/repositories/EventEvaluatorRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  AddEvaluatorsResponseDto,
  AddEvaluatorsToEventDto,
  EventEvaluatorResponseDto,
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
