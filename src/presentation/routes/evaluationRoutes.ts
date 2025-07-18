// src/presentation/routes/evaluationRoutes.ts
import { Router } from "express";
import {
  authenticate,
  requireEvaluator,
  requireStaff,
} from "../middlewares/authMiddleware";
import { EvaluationController } from "../controllers/EvaluationController";
import { QuestionResponseController } from "../controllers/QuestionResponseController";

const router = Router();
const evaluationController = new EvaluationController();
const questionResponseController = new QuestionResponseController();

// ✅ NOVA ROTA: Debug - listar todas as avaliações (apenas para desenvolvimento)
router.get("/debug/all", authenticate, async (req, res, next): Promise<void> => {
  try {
    // Só permitir em desenvolvimento
    if (process.env.NODE_ENV === "production") {
      res
        .status(403)
        .json({ message: "Debug endpoint not available in production" });
      return;
    }

    const { prisma } = require("../../lib/prisma");

    const evaluations = await prisma.evaluation.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            role: true,
          },
        },
        articleVersion: {
          include: {
            article: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
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
            },
          },
        },
      },
      take: 20,
    });

    const summary = {
      total: evaluations.length,
      byRole: {} as Record<string, number>,
      byStatus: {} as Record<string, number>,
      byArticle: {} as Record<string, number>,
    };

    evaluations.forEach((evaluation: any) => {
      // Por role do avaliador
      const role = evaluation.user.role;
      summary.byRole[role] = (summary.byRole[role] || 0) + 1;

      // Por status
      const status = evaluation.status;
      summary.byStatus[status] = (summary.byStatus[status] || 0) + 1;

      // Por artigo
      const articleTitle = evaluation.articleVersion.article.title;
      summary.byArticle[articleTitle] =
        (summary.byArticle[articleTitle] || 0) + 1;
    });

    res.json({
      success: true,
      summary,
      evaluations: evaluations.map((evaluation: any) => ({
        id: evaluation.id,
        grade: evaluation.grade,
        status: evaluation.status,
        evaluator: evaluation.user.name,
        evaluatorRole: evaluation.user.role,
        evaluatorId: evaluation.user.id,
        article: evaluation.articleVersion.article.title,
        articleId: evaluation.articleVersion.article.id,
        authorId: evaluation.articleVersion.article.user.id,
        authorName: evaluation.articleVersion.article.user.name,
        event: evaluation.articleVersion.article.event.name,
      })),
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ========================================
// ROTAS DE AVALIAÇÃO
// ========================================

// Criar avaliação (apenas EVALUATOR)
router.post(
  "/",
  authenticate,
  requireEvaluator(),
  //notifyArticleReviewed(),
  async (req, res, next): Promise<void> => {
    await evaluationController.createEvaluation(req, res, next);
  }
);

// ========================================
// ROTAS DE CONSULTA (GET)
// ========================================

// Buscar avaliações com filtros opcionais (Todos os usuários autenticados)
// IMPORTANTE: Esta rota deve vir ANTES da rota /:evaluationId
router.get("/", authenticate, async (req, res, next): Promise<void> => {
  await evaluationController.getEvaluationsWithFilters(req, res, next);
});

// Buscar avaliações pendentes (apenas EVALUATOR)
router.get(
  "/pending",
  authenticate,
  requireEvaluator(),
  async (req, res, next): Promise<void> => {
    await evaluationController.getPendingEvaluations(req, res, next);
  }
);

// Buscar minhas avaliações (apenas EVALUATOR)
router.get(
  "/my-evaluations",
  authenticate,
  requireEvaluator(),
  async (req, res, next): Promise<void> => {
    await evaluationController.getMyEvaluations(req, res, next);
  }
);

// ✅ NOVA ROTA: Buscar minha avaliação para um artigo específico
router.get(
  "/my-evaluation/:articleVersionId",
  authenticate,
  requireEvaluator(),
  async (req, res, next): Promise<void> => {
    await evaluationController.getMyEvaluationForArticle(req, res, next);
  }
);

// Buscar avaliações de um artigo específico (Todos os usuários autenticados)
router.get("/article/:articleId", authenticate, async (req, res, next): Promise<void> => {
  await evaluationController.getArticleEvaluations(req, res, next);
});

// Buscar avaliação por ID (COORDINATOR + EVALUATOR)
router.get(
  "/:evaluationId",
  authenticate,
  requireStaff(),
  async (req, res, next): Promise<void> => {
    await evaluationController.getEvaluationById(req, res, next);
  }
);

// ========================================
// ROTAS DE MODIFICAÇÃO
// ========================================

// Deletar avaliação (EVALUATOR que criou OU COORDINATOR)
router.delete(
  "/:evaluationId",
  authenticate,
  requireStaff(), // EVALUATOR ou COORDINATOR
  async (req, res, next): Promise<void> => {
    await evaluationController.deleteEvaluation(req, res, next);
  }
);

router.delete(
  "/:evaluationId/clear-checklist",
  authenticate,
  requireEvaluator(),
  async (req, res, next): Promise<void> => {
    await questionResponseController.clearAllChecklistResponses(req, res, next);
  }
);

router.put(
  "/:evaluationId",
  authenticate,
  requireStaff(), // EVALUATOR ou COORDINATOR
  async (req, res, next): Promise<void> => {
    await evaluationController.updateEvaluation(req, res, next);
  }
);

export { router as evaluationRoutes };
