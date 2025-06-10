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

// Criar checklist independente (apenas COORDINATOR)
router.post("/", authenticate, requireCoordinator(), async (req, res, next) => {
  await checklistController.createChecklist(req, res, next);
});

// Adicionar múltiplas perguntas ao checklist (apenas COORDINATOR)
router.post(
  "/:checklistId/questions",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await questionController.createMultipleQuestions(req, res, next);
  }
);

// Listar checklists com filtros (todas as roles autenticadas)
router.get("/", authenticate, requireCoordinator(), async (req, res, next) => {
  await checklistController.getAllChecklists(req, res, next);
});

router.get(
  "/:checklistId",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await checklistController.getChecklistWithQuestions(req, res, next);
  }
);

router.delete(
  "/:checklistId",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await checklistController.deleteChecklist(req, res, next);
  }
);

router.delete(
  "/:checklistId/questions/:questionId",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await questionController.deleteQuestion(req, res, next);
  }
);
export { router as checklistRoutes };
