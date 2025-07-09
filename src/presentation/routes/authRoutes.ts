// src/presentation/routes/authRoutes.ts
import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import {
  authenticate,
  requireCoordinator,
  // ✅ MIDDLEWARES DE ROLE - DESCOMENTE QUANDO PRECISAR
  // requireCoordinator,
  // requireEvaluator,
  // requireStudent,
  // requireStaff,
  // requireRole
} from "../middlewares/authMiddleware";

const router = Router();
const authController = new AuthController();

// ========================================
// ROTAS PÚBLICAS (sem autenticação)
// ========================================

// Registro de usuário (público)
router.post("/register", async (req, res, next) => {
  await authController.register(req, res, next);
});

// Login (público)
router.post("/login", async (req, res, next) => {
  await authController.login(req, res, next);
});

// ========================================
// ROTAS PROTEGIDAS (com autenticação)
// ========================================

// Profile (qualquer usuário autenticado)
router.get("/profile", authenticate, async (req, res, next) => {
  await authController.getProfile(req, res, next);
});

router.put("/change-password", authenticate, async (req, res, next) => {
  await authController.changePassword(req, res, next);
});

// Register Evaluator (apenas COORDENADORES)
router.post(
  "/register-evaluator",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await authController.registerEvaluator(req, res, next);
  }
);

// ========================================
// 🔒 EXEMPLOS DE ROTAS COM CONTROLE DE ROLE
// ✅ DESCOMENTE QUANDO PRECISAR USAR
// ========================================

/*
// Apenas COORDENADORES
router.get("/admin", authenticate, requireCoordinator(), async (req, res, next) => {
  await authController.adminPanel(req, res, next);
});

// Apenas AVALIADORES  
router.get("/evaluator-dashboard", authenticate, requireEvaluator(), async (req, res, next) => {
  await authController.evaluatorDashboard(req, res, next);
});

// Apenas ESTUDANTES
router.get("/student-dashboard", authenticate, requireStudent(), async (req, res, next) => {
  await authController.studentDashboard(req, res, next);
});

// COORDENADORES + AVALIADORES (staff)
router.get("/manage", authenticate, requireStaff(), async (req, res, next) => {
  await authController.manage(req, res, next);
});

// ROLES CUSTOMIZADAS (exemplo: apenas COORDINATOR e EVALUATOR)
router.get("/reports", authenticate, requireRole(['COORDINATOR', 'EVALUATOR']), async (req, res, next) => {
  await authController.getReports(req, res, next);
});

// MÚLTIPLAS VALIDAÇÕES (exemplo: COORDINATOR pode criar EVALUATOR)
router.post("/create-evaluator", authenticate, requireCoordinator(), async (req, res, next) => {
  await authController.createEvaluator(req, res, next);
});
*/

export { router as authRoutes };
