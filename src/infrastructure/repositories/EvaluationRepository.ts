import { CreateEvaluationDto } from "../../application/dtos/EvaluationDto";
import { Evaluation, EvaluationStatus } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

export class EvaluationRepository {
  // Aqui você pode definir os métodos para interagir com o banco de dados
  // Exemplo:
  async create(data: {
    grade: number;
    evaluationDescription?: string;
    evaluationDate: Date;
    userId: string;
    articleVersionId: string;
    evaluationStatus: string;
  }): Promise<any> {
    return await prisma.evaluation.create({
      data: {
        grade: data.grade,
        status: data.evaluationStatus as EvaluationStatus,
        evaluationDescription: data.evaluationDescription,
        evaluationDate: data.evaluationDate,
        userId: data.userId,
        articleVersionId: data.articleVersionId,
      },
    });
  }

  async getEvaluationsByArticleVersionId(
    articleVersionId: string
  ): Promise<Evaluation[]> {
    console.log(
      "Fetching evaluations for article version ID:",
      articleVersionId
    );
    const evaluation = await prisma.evaluation.findMany({
      where: { articleVersionId },
      orderBy: { createdAt: "desc" }, // Ordenar por data de criação, mais recente primeiro
    });

    return evaluation;
  }

  async getEvaluationById(evaluationId: string): Promise<Evaluation | null> {
    return await prisma.evaluation.findUnique({
      where: { id: evaluationId },
    });
  }
  async findByIdWithRelations(id: string): Promise<any> {
    return await prisma.evaluation.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        articleVersion: {
          include: {
            article: {
              include: {
                event: {
                  select: {
                    id: true,
                    name: true,
                    evaluationType: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
