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

// Pegar artigos de usuario especifico
router.get("/:articleId",
  authenticate,
  // requireStudent(),
  async (req, res, next) => {
  await articleController.getArticlesById(req, res, next);
});

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

// Inserir uma nova versão do artigo
router.put(
  "/:articleId/new-version",
  authenticate,
  requireStudent(),
  async (req, res, next) => {
    await articleController.createNewVersion(req, res, next);
  }
);

// Atualizar artigos (informações)
router.put(
  "/:articleId",
  authenticate,
  requireStudent(), // ou requireStudent() dependendo da regra
  async (req, res, next) => {
    await articleController.updateArticle(req, res, next);
  }
);

export { router as articleRoutes };
