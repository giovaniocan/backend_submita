import { Router } from "express";
import {
  authenticate,
  requireCoordinator,
} from "../middlewares/authMiddleware";
import { ArticleController } from "../controllers/ArticleController";

const router = Router();
const articleController = new ArticleController();

router.get("/coordinator/articles/:eventId", authenticate, requireCoordinator(), async (req, res, next) => {
  await articleController.getArticlesByEventId(req, res, next);
});

router.get("/coordinator/articles/submitted/:eventId", authenticate, requireCoordinator(), async (req, res, next) => {
  await articleController.getArticlesByEventIdAndStatus('SUBMITTED', req, res, next); // 'SUBMITTED', 'IN_EVALUATION', 'APPROVED', 'APPROVED_WITH_REMARKS', 'REJECTED';
});

router.get("/coordinator/articles/pending/:eventId", authenticate, requireCoordinator(), async (req, res, next) => {
  await articleController.getArticlesPending(req, res, next);
});

export { router as dashboardRoutes };
