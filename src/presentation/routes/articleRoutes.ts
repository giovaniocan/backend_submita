// src/presentation/routes/eventRoutes.ts
import { Router } from "express";
import { authenticate, requireStudent } from "../middlewares/authMiddleware";
import { ArticleController } from "../controllers/ArticleController";

const articleController = new ArticleController();
const router = Router();

// Criar evento (apenas COORDINATOR)
router.post("/", authenticate, requireStudent(), async (req, res, next) => {
  await articleController.createArticle(req, res, next);
});

export { router as articleRoutes };
