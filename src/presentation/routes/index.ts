// src/presentation/routes/index.ts
import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { eventRoutes } from "./eventRoutes";
import { userRoutes } from "./userRoutes";
import { checklistRoutes } from "./checklistRoutes";
import { fileUploadRoutes } from "./fileUploadRoutes";
import { testEmailRoutes } from "./testEmailRoutes";
import { articleRoutes } from "./articleRoutes";
import { evaluationRoutes } from "./evaluationRoutes";
import { dashboardRoutes } from "./dashboardRoutes";
import { questionResponseRoutes } from "./questionResponseRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/events", eventRoutes);
router.use("", userRoutes);
router.use("/articles", articleRoutes);
router.use("/dashboard", dashboardRoutes);

// Rotas de upload de arquivos
router.use("/files", fileUploadRoutes);
router.use("/checklists", checklistRoutes);

router.use("/evaluations", evaluationRoutes);

router.use("/question-responses", questionResponseRoutes);

// Rota de teste de email
router.use("/email", testEmailRoutes);

export { router as appRoutes };
