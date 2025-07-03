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
  "/users/evaluators",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await userController.getAllEvaluators(req, res, next);
  }
);

// Listar todos os estudantes com filtros (independente de evento)
router.get(
  "/students/users",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await userController.getAllUsersByRole(req, res, next, "STUDENT");
  }
);

// Listar todos os avaliadores com filtros (independente de evento)
router.get(
  "/evaluators/users",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await userController.getAllUsersByRole(req, res, next, "EVALUATOR");
  }
);

export { router as userRoutes };
