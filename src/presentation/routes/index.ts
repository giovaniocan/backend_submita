// src/presentation/routes/index.ts
import { Router } from "express";
import { authRoutes } from "./authRoutes";

const router = Router();

// ✅ SUAS ROTAS ATUAIS - NADA MUDA
router.use("/auth", authRoutes);

// ========================================
// 🚀 FUTURAS ROTAS DO SISTEMA SUBMITA
// ✅ DESCOMENTE CONFORME FOR CRIANDO
// ========================================

/*
// Rotas de usuários (CRUD completo)
import { userRoutes } from "./userRoutes";
router.use("/users", userRoutes);

// Rotas de eventos  
import { eventRoutes } from "./eventRoutes";
router.use("/events", eventRoutes);

// Rotas de artigos
import { articleRoutes } from "./articleRoutes";
router.use("/articles", articleRoutes);

// Rotas de avaliações
import { evaluationRoutes } from "./evaluationRoutes";  
router.use("/evaluations", evaluationRoutes);

// Rotas de checklists
import { checklistRoutes } from "./checklistRoutes";
router.use("/checklists", checklistRoutes);

// Rotas administrativas (apenas coordenadores)
import { adminRoutes } from "./adminRoutes";
router.use("/admin", adminRoutes);
*/

export { router as appRoutes };
