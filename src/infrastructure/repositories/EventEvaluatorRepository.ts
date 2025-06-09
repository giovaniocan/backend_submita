import { ListEventEvaluatorsDto } from "../../application/dtos/EventEvaluatorDto";
import { EventEvaluator, Prisma } from "../../generated/prisma";
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

  async findByEventAndUser(eventId: string, userId: string): Promise<Boolean> {
    const user = await prisma.eventEvaluator.findUnique({
      where: {
        eventId_userId: {
          eventId,
          userId,
        },
      },
    });

    return !!user;
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

    console.log("FILTROS DE PAGINAÇÃO:", filters);
    console.log("FILTRO DE BUSCA:", where);

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

    console.log("AVALIADORES ENCONTRADOS:", evaluators);

    return { evaluators, total };
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
