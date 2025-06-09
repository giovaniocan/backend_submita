import {
  CreateEventDto,
  UpdateEventDto,
  ListEventsDto,
} from "../../application/dtos/EventDto";
import { Event } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

export class EventRepository {
  // ========================================
  // CREATE
  // ========================================
  async create(eventData: CreateEventDto): Promise<Event> {
    return await prisma.event.create({
      data: eventData,
    });
  }

  // ========================================
  // READ
  // ========================================

  // Buscar por ID
  async findById(id: string): Promise<Event | null> {
    return await prisma.event.findUnique({
      where: { id },
    });
  }

  // Buscar por ID com estatísticas
  async findByIdWithStats(
    id: string
  ): Promise<
    (Event & { _count: { articles: number; eventEvaluators: number } }) | null
  > {
    return await prisma.event.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            articles: true,
            eventEvaluators: true,
          },
        },
      },
    });
  }

  // Buscar evento ativo por ID
  async findActiveById(id: string): Promise<Event | null> {
    return await prisma.event.findUnique({
      where: {
        id,
        isActive: true,
      },
    });
  }

  // Listar eventos com filtros e paginação
  async findMany(filters: ListEventsDto): Promise<{
    events: (Event & {
      _count?: { articles: number; eventEvaluators: number };
    })[];
    total: number;
  }> {
    const {
      page = 1,
      limit = 10,
      search,
      status,
      isActive,
      evaluationType,
      includeStats = false,
    } = filters;

    const skip = (page - 1) * limit;

    // Construir condições WHERE
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (status) {
      where.status = status;
    }

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    if (evaluationType) {
      where.evaluationType = evaluationType;
    }

    // Configurar include baseado em includeStats
    const include = includeStats
      ? {
          _count: {
            select: {
              articles: true,
              eventEvaluators: true,
            },
          },
        }
      : undefined;

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        include,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.event.count({ where }),
    ]);

    return { events, total };
  }

  // Buscar apenas eventos ativos
  async findActiveEvents(): Promise<Event[]> {
    return await prisma.event.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
  }

  // ========================================
  // UPDATE
  // ========================================
  async update(id: string, eventData: UpdateEventDto): Promise<Event> {
    return await prisma.event.update({
      where: { id },
      data: eventData,
    });
  }

  // ========================================
  // DELETE
  // ========================================

  // Soft delete (isActive = false)
  async softDelete(id: string): Promise<Event> {
    return await prisma.event.update({
      where: { id },
      data: { isActive: false },
    });
  }

  // Hard delete (apenas se não houver artigos associados)
  async hardDelete(id: string): Promise<Event> {
    return await prisma.event.delete({
      where: { id },
    });
  }

  // ========================================
  // UTILITIES
  // ========================================

  // Verificar se evento existe
  async exists(id: string): Promise<boolean> {
    const event = await prisma.event.findUnique({
      where: { id },
      select: { id: true },
    });
    return !!event;
  }

  // Verificar se evento tem artigos associados
  async hasArticles(id: string): Promise<boolean> {
    const count = await prisma.article.count({
      where: { eventId: id },
    });
    return count > 0;
  }

  // Contar eventos por status
  async countByStatus(): Promise<{ [key: string]: number }> {
    const statusCounts = await prisma.event.groupBy({
      by: ["status"],
      _count: {
        id: true,
      },
      where: { isActive: true },
    });

    return statusCounts.reduce((acc, item) => {
      acc[item.status] = item._count.id;
      return acc;
    }, {} as { [key: string]: number });
  }
}
