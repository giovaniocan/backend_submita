// src/infrastructure/repositories/UserRepository.ts

import { User, Prisma, RoleType } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import {
  EvaluatorDto,
  ListAvailableEvaluatorsDto,
  StudentDto,
} from "../../application/dtos/userDto";

export class UserRepository {
  // ========================================
  // BUSCAR TODOS OS AVALIADORES
  // ========================================
  async findAllEvaluators(
    filters: ListAvailableEvaluatorsDto
  ): Promise<{ evaluators: EvaluatorDto[]; total: number }> {
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

    // Executar queries em paralelo
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: "asc" },
        include: {
          _count: {
            select: { evaluations: true },
          },
        },
      }),
      prisma.user.count({ where }),
    ]);

    const evaluators: EvaluatorDto[] = users.map(({ _count, ...rest }) => ({
      ...rest,
      evaluationsCount: _count.evaluations,
    }));

    return { evaluators, total };
  }

  // JPF: encontrar usuario por id
  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  // JPF: definir status de usuario
  async setStatus(id: string, isActive: boolean): Promise<User | null> {
    await prisma.user.update({
      where: { id },
      data: {
        isActive,
      },
    });

    const user: User | null = await this.findById(id);
    return user;
  }

  // JPF: desativar usuario.
  async softDelete(id: string): Promise<User | null> {
    await prisma.user.update({
      where: { id },
      data: {
        isActive: false,
      },
    });

    const user: User | null = await this.findById(id);
    return user;
  }

  // JPF: Deletar por completo usuario
  async hardDelete(id: string): Promise<User> {
    const user: any = await this.findById(id);

    await prisma.user.delete({
      where: { id },
    });
    return user;
  }

  async findAllUsersByRole(
    role: RoleType,
    filters: ListAvailableEvaluatorsDto
  ): Promise<{ users: object[]; total: number }> {
    const { page = 1, limit = 10, search, isActive } = filters;
    const skip = (page - 1) * limit;

    const where: Prisma.UserWhereInput = {
      role,
    };

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    if (role == "STUDENT") {
      const [users, total] = await Promise.all([
        prisma.user.findMany({
          where,
          skip,
          take: limit,
          orderBy: { name: "asc" },
          include: {
            _count: {
              select: { articles: true },
            },
          },
        }),
        prisma.user.count({ where }),
      ]);

      const usersWithCount: StudentDto[] = users.map(({ _count, ...rest }) => ({
        ...rest,
        articlesCount: _count.articles,
      }));
      return { users: usersWithCount, total };
    } else if (role == "EVALUATOR") {
      const [users, total] = await Promise.all([
        prisma.user.findMany({
          where,
          skip,
          take: limit,
          orderBy: { name: "asc" },
          include: {
            _count: {
              select: { evaluations: true },
            },
          },
        }),
        prisma.user.count({ where }),
      ]);

      const usersWithCount: EvaluatorDto[] = users.map(
        ({ _count, ...rest }) => ({
          ...rest,
          evaluationsCount: _count.evaluations,
        })
      );
      return { users: usersWithCount, total };
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: "asc" },
      }),
      prisma.user.count({ where }),
    ]);
    return { users: users, total };
  }
}
