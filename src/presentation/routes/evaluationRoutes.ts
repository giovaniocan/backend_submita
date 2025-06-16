// src/presentation/routes/evaluationRoutes.ts
import { Router } from "express";
import {
  authenticate,
  requireEvaluator,
  requireStaff,
} from "../middlewares/authMiddleware";
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

// ========================================
// ROTAS DE CONSULTA (GET)
// ========================================

// Buscar avaliações com filtros opcionais (COORDINATOR + EVALUATOR)
// IMPORTANTE: Esta rota deve vir ANTES da rota /:evaluationId
router.get("/", authenticate, requireStaff(), async (req, res, next) => {
  await evaluationController.getEvaluationsWithFilters(req, res, next);
});

// Buscar minhas avaliações (apenas EVALUATOR)
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

// Buscar avaliação por ID (COORDINATOR + EVALUATOR)
router.get(
  "/:evaluationId",
  authenticate,
  requireStaff(),
  async (req, res, next) => {
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
  async (req, res, next) => {
    await evaluationController.deleteEvaluation(req, res, next);
  }
);

router.put(
  "/:evaluationId",
  authenticate,
  requireStaff(), // EVALUATOR ou COORDINATOR
  async (req, res, next) => {
    await evaluationController.updateEvaluation(req, res, next);
  }
);

export { router as evaluationRoutes };
