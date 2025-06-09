// src/application/services/UserService.ts

import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  ListAvailableEvaluatorsDto,
  EvaluatorResponseDto,
  PaginatedEvaluatorsDto,
} from "../dtos/userDto";
import { User } from "../../generated/prisma";

export class UserService {
  private userRepository: UserRepository;
  private eventRepository: EventRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.eventRepository = new EventRepository();
  }
  // ========================================
  // LISTAR TODOS OS AVALIADORES
  // ========================================
  async getAllEvaluators(
    filters: ListAvailableEvaluatorsDto
  ): Promise<PaginatedEvaluatorsDto> {
    // 1️⃣ VALIDAR PARÂMETROS DE PAGINAÇÃO
    if (filters.page && filters.page < 1) {
      throw new AppError("Page must be greater than 0", 400);
    }

    if (filters.limit && (filters.limit < 1 || filters.limit > 100)) {
      throw new AppError("Limit must be between 1 and 100", 400);
    }

    // 2️⃣ BUSCAR TODOS OS AVALIADORES
    const { evaluators, total } = await this.userRepository.findAllEvaluators(
      filters
    );

    // 3️⃣ CALCULAR INFORMAÇÕES DE PAGINAÇÃO
    const page = filters.page || 1;
    const limit = filters.limit || 10;
    const totalPages = Math.ceil(total / limit);

    // 4️⃣ MONTAR RESPOSTA FINAL
    return {
      evaluators: evaluators.map((evaluator: User) =>
        this.toEvaluatorResponse(evaluator)
      ),
      total,
      page,
      limit,
      totalPages,
    };
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  private toEvaluatorResponse(user: User): EvaluatorResponseDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      isFromBpk: user.isFromBpk,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
