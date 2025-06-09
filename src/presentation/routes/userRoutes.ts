// src/presentation/routes/userRoutes.ts

import { Router } from "express";
import { UserController } from "../controllers/UserController";
import {
  authenticate,
  requireCoordinator,
} from "../middlewares/authMiddleware";

const router = Router();
const userController = new UserController();

// Listar todos os avaliadores (independente de evento)
router.get(
  "/evaluators",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await userController.getAllEvaluators(req, res, next);
  }
);

export { router as userRoutes };
