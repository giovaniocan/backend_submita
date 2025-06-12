// src/presentation/routes/evaluationRoutes.ts
import { Router } from "express";
import { authenticate, requireEvaluator } from "../middlewares/authMiddleware";
import { notifyArticleReviewed } from "../middlewares/emailNotificationMiddleware";
import { EvaluationController } from "../controllers/EvaluationController";

const router = Router();
const evaluationController = new EvaluationController();

// ========================================
// ROTAS DE AVALIAÇÃO
// ========================================

// Criar avaliação (apenas EVALUATOR)
router.post(
  "/",
  authenticate,
  requireEvaluator(),
  //notifyArticleReviewed(),
  async (req, res, next) => {
    await evaluationController.createEvaluation(req, res, next);
  }
);
/*
// Buscar avaliações de um avaliador (apenas EVALUATOR)
router.get(
  "/my-evaluations",
  authenticate,
  requireEvaluator(),
  async (req, res, next) => {
    await evaluationController.getMyEvaluations(req, res, next);
  }
);

// Buscar avaliações de um artigo específico (COORDINATOR + EVALUATOR)
router.get(
  "/article/:articleId",
  authenticate,
  requireStaff(),
  async (req, res, next) => {
    await evaluationController.getArticleEvaluations(req, res, next);
  }
);

// Buscar avaliação específica por ID (COORDINATOR + EVALUATOR)
router.get(
  "/:evaluationId",
  authenticate,
  requireStaff(),
  async (req, res, next) => {
    await evaluationController.getEvaluationById(req, res, next);
  }
);
*/

export { router as evaluationRoutes };
