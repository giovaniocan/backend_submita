import { EventEvaluator } from "../../generated/prisma";
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
