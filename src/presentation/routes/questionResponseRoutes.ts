// src/presentation/routes/questionResponseRoutes.ts

import { Router } from "express";
import { QuestionResponseController } from "../controllers/QuestionResponseController";
import { authenticate, requireEvaluator } from "../middlewares/authMiddleware";

const router = Router();
const questionResponseController = new QuestionResponseController();

// Salvar respostas do checklist (apenas EVALUATOR)
router.post("/", authenticate, requireEvaluator(), async (req, res, next) => {
  await questionResponseController.saveChecklistResponses(req, res, next);
});

router.put("/", authenticate, requireEvaluator(), async (req, res, next) => {
  await questionResponseController.updateMultipleQuestionResponses(
    req,
    res,
    next
  );
});

export { router as questionResponseRoutes };
