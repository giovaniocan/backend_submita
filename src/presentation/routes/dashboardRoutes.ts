import { Router } from "express";
import {
  authenticate,
  requireCoordinator,
  requireEvaluator,
  requireStudent,
} from "../middlewares/authMiddleware";
import { ArticleController } from "../controllers/ArticleController";
import { StatsController } from "../controllers/StatsController";

const router = Router();
const articleController = new ArticleController();
const statsController = new StatsController();

// REQUISIÇÕES STUDENTS - JPF
router.get(
  "/student/articles/",
  authenticate,
  requireStudent(),
  async (req, res, next): Promise<void> => {
    await articleController.getArticlesByUserId(req, res, next);
  }
);

// REQUISIÇÕES EVALUATOR - JPF
router.get(
  "/evaluator/articles",
  authenticate,
  requireEvaluator(),
  async (req, res, next): Promise<void> => {
    await articleController.getArticlesForEvaluator(req, res, next);
  }
);

// REQUISIÇÕES COORDINATOR - JPF

router.get(
  "/coordinator/articles/:eventId",
  authenticate,
  requireCoordinator(),
  async (req, res, next): Promise<void> => {
    await articleController.getArticlesByEventId(req, res, next);
  }
);

router.get(
  "/coordinator/articles/submitted/:eventId",
  authenticate,
  requireCoordinator(),
  async (req, res, next): Promise<void> => {
    await articleController.getArticlesByEventIdAndStatus(
      "SUBMITTED",
      req,
      res,
      next
    ); // 'SUBMITTED', 'IN_EVALUATION', 'APPROVED', 'APPROVED_WITH_REMARKS', 'REJECTED';
  }
);

router.get(
  "/coordinator/articles/pending/:eventId",
  authenticate,
  requireCoordinator(),
  async (req, res, next): Promise<void> => {
    await articleController.getArticlesPending(req, res, next);
  }
);

// ========================================
// NOVAS ROTAS DE STATS
// ========================================

// Stats do Coordinator
router.get(
  "/coordinator/stats",
  authenticate,
  requireCoordinator(),
  async (req, res, next): Promise<void> => {
    await statsController.getCoordinatorStats(req, res, next);
  }
);

// Stats do Student
router.get(
  "/student/stats",
  authenticate,
  requireStudent(),
  async (req, res, next): Promise<void> => {
    await statsController.getStudentStats(req, res, next);
  }
);

// Stats do Evaluator
router.get(
  "/evaluator/stats",
  authenticate,
  requireEvaluator(),
  async (req, res, next): Promise<void> => {
    await statsController.getEvaluatorStats(req, res, next);
  }
);

// ROTA TEMPORÁRIA DE DEBUG
router.get(
  "/evaluator/debug",
  authenticate,
  requireEvaluator(),
  async (req, res, next): Promise<void> => {
    try {
      const user = req.user;
      if (!user) {
        res.status(401).json({ error: "User not authenticated" });
        return;
      }
      const { prisma } = require("../../lib/prisma");

      // 1. Verificar se o usuário tem assignments
      const assignments = await prisma.articleEvaluatorAssignment.findMany({
        where: {
          userId: user.id,
        },
        include: {
          article: {
            select: {
              id: true,
              title: true,
              status: true,
              isActive: true,
            },
          },
        },
      });

      // 2. Verificar se os artigos existem e estão ativos
      const articles = await prisma.article.findMany({
        where: {
          evaluatorAssignments: {
            some: {
              userId: user.id,
            },
          },
        },
        include: {
          evaluatorAssignments: {
            where: {
              userId: user.id,
            },
          },
        },
      });

      res.json({
        success: true,
        data: {
          userId: user.id,
          assignments,
          articles,
        },
      });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
);

export { router as dashboardRoutes };
