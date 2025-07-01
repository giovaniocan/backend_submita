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
  async (req, res, next) => {
    await articleController.getArticlesByUserId(req, res, next);
  }
);

// REQUISIÇÕES COORDINATOR - JPF

router.get(
  "/coordinator/articles/:eventId",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await articleController.getArticlesByEventId(req, res, next);
  }
);

router.get(
  "/coordinator/articles/submitted/:eventId",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
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
  async (req, res, next) => {
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
  async (req, res, next) => {
    await statsController.getCoordinatorStats(req, res, next);
  }
);

// Stats do Student
router.get(
  "/student/stats",
  authenticate,
  requireStudent(),
  async (req, res, next) => {
    await statsController.getStudentStats(req, res, next);
  }
);

// Stats do Evaluator
router.get(
  "/evaluator/stats",
  authenticate,
  requireEvaluator(),
  async (req, res, next) => {
    await statsController.getEvaluatorStats(req, res, next);
  }
);

export { router as dashboardRoutes };
