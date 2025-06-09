import { Router } from "express";
import {
  authenticate,
  requireCoordinator,
} from "../middlewares/authMiddleware";
import { ChecklistController } from "../controllers/ChecklistController";

const router = Router();
const checklistController = new ChecklistController();

router.post("/", requireCoordinator(), async (req, res, next) => {
  await checklistController.createChecklist(req, res, next);
});

export { router as checklistRoutes };
