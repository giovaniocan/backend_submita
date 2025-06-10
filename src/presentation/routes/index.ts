// src/presentation/routes/index.ts
import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { eventRoutes } from "./eventRoutes";
import { userRoutes } from "./userRoutes";
import { checklistRoutes } from "./checklistRoutes";
import { fileUploadRoutes } from "./fileUploadRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/events", eventRoutes);
router.use("/users", userRoutes);

// Rotas de upload de arquivos
router.use("/files", fileUploadRoutes);
router.use("/checklists", checklistRoutes); // ✅ MUDANÇA: /checklists (sem authenticate aqui)

export { router as appRoutes };
