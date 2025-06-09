// src/infrastructure/repositories/UserRepository.ts

import { User, Prisma } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { ListAvailableEvaluatorsDto } from "../../application/dtos/userDto";

export class UserRepository {
  // ========================================
  // BUSCAR TODOS OS AVALIADORES
  // ========================================
  async findAllEvaluators(
    filters: ListAvailableEvaluatorsDto
  ): Promise<{ evaluators: User[]; total: number }> {
    const { page = 1, limit = 10, search, isActive } = filters;

    const skip = (page - 1) * limit;

    // Construir condições WHERE
    const where: Prisma.UserWhereInput = {
      role: "EVALUATOR", // Apenas avaliadores
    };

    // Filtro de status (se especificado)
    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    // Filtro de busca por nome ou email
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    console.log("🔍 BUSCA DE TODOS OS AVALIADORES:");
    console.log("Filtros:", filters);

    // Executar queries em paralelo
    const [evaluators, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: "asc" },
      }),
      prisma.user.count({ where }),
    ]);

    console.log("🔍 RESULTADO:");
    console.log("Avaliadores encontrados:", evaluators.length);
    console.log("Total:", total);

    return { evaluators, total };
  }
}
