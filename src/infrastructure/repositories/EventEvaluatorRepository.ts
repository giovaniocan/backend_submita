import { ListEventEvaluatorsDto } from "../../application/dtos/EventEvaluatorDto";
import { EventEvaluator, Prisma, User } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class EventEvaluatorRepository {
  async addEvaluatorsToEvent(
    eventId: string,
    userId: string
  ): Promise<EventEvaluator> {
    return await prisma.eventEvaluator.create({
      data: {
        eventId,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            isActive: true,
            role: true,
          },
        },
        event: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });
  }

  async findByEventAndUser(
    eventId: string,
    userId: string
  ): Promise<EventEvaluator | null> {
    return await prisma.eventEvaluator.findUnique({
      where: {
        eventId_userId: {
          eventId,
          userId,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }

  async findManyWithPagination(
    eventId: string,
    filters: ListEventEvaluatorsDto
  ): Promise<{ evaluators: EventEvaluator[]; total: number }> {
    const { isActive, limit = 10, page = 1, search } = filters;

    const skip = (page - 1) * limit;

    const where: Prisma.EventEvaluatorWhereInput = {
      eventId, // Sempre filtrar pelo evento
    };

    where.eventId = eventId;

    if (search) {
      where.user = {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive", // Busca sem diferenciar maiúsculas e minúsculas
            },
          },
          {
            email: {
              contains: search,
              mode: "insensitive", // Busca sem diferenciar maiúsculas e minúsculas
            },
          },
        ],
      };
    }

    if (isActive !== undefined) {
      where.isActive = isActive; // Filtra por avaliadores ativos ou inativos
    }

    const [evaluators, total] = await Promise.all([
      prisma.eventEvaluator.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
              isFromBpk: true,
              isActive: true,
            },
          },
          event: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: {
          user: {
            name: "asc", // Ordena pelo nome do usuário
          },
        },
      }),
      prisma.eventEvaluator.count({
        where,
      }),
    ]);

    return { evaluators, total };
  }

  async findById(id: string): Promise<EventEvaluator | null> {
    return await prisma.eventEvaluator.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
          },
        },
        event: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });
  }

  async removeFromEvent(
    eventId: string,
    userId: string
  ): Promise<EventEvaluator> {
    return await prisma.eventEvaluator.update({
      where: {
        eventId_userId: {
          eventId,
          userId,
        },
      },
      data: {
        isActive: false, // ✅ SOFT DELETE - marca como inativo
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isActive: true,
          },
        },
        event: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });
  }

  async isValidEvaluator(userId: string): Promise<boolean> {
    // Verifica se o usuário é um avaliador ativo
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        isActive: true,
        role: "EVALUATOR", // Verifica se o usuário é um avaliador
      },
      select: {
        id: true,
      },
    });

    return !!user;
  }
}
