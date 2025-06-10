import { Router } from "express";
import {
  authenticate,
  requireCoordinator,
} from "../middlewares/authMiddleware";
import { ChecklistController } from "../controllers/ChecklistController";
import { QuestionController } from "../controllers/QuestionController";

const router = Router();
const checklistController = new ChecklistController();
const questionController = new QuestionController();

router.post("/", authenticate, requireCoordinator(), async (req, res, next) => {
  await checklistController.createChecklist(req, res, next);
});

router.post(
  "/:checklistId/questions",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await questionController.createMultipleQuestions(req, res, next);
  }
);

export { router as checklistRoutes };
