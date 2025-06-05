import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

const authController = new AuthController();

//router.post("/login", authController.login);

// Rotas com wrapper functions (mais legível)
router.post("/register", async (req, res, next) => {
  await authController.createUser(req, res, next);
});

router.post("/login", async (req, res, next) => {
  await authController.login(req, res, next);
});

router.get("/profile", authenticate, async (req, res, next) => {
  await authController.getProfile(req, res, next);
});

export { router as authRoutes };
