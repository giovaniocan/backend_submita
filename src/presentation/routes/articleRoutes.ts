// src/presentation/routes/eventRoutes.ts
import { Router } from "express";
import {
  authenticate,
  requireCoordinator,
  requireStudent,
} from "../middlewares/authMiddleware";
import { ArticleController } from "../controllers/ArticleController";

const articleController = new ArticleController();
const router = Router();

// Criar evento (apenas COORDINATOR)
router.post("/", authenticate, requireStudent(), async (req, res, next) => {
  await articleController.createArticle(req, res, next);
});

router.post(
  "/:articleId/evaluators",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await articleController.assignEvaluatorsToArticle(req, res, next);
  }
);

router.delete(
  "/:articleId/evaluators",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await articleController.removeEvaluatorFromArticle(req, res);
  }
);

router.put(
  "/:articleId",
  authenticate,
  requireStudent(), // ou requireStudent() dependendo da regra
  async (req, res, next) => {
    await articleController.updateArticle(req, res, next);
  }
);

export { router as articleRoutes };
