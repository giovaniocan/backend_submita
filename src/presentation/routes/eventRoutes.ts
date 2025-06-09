// src/presentation/routes/eventRoutes.ts
import { Router } from "express";
import { EventController } from "../controllers/EventController";
import {
  authenticate,
  requireCoordinator,
} from "../middlewares/authMiddleware";

const router = Router();
const eventController = new EventController();

// ========================================
// ROTAS PÚBLICAS DE LEITURA (sem autenticação)
// ========================================

// Listar eventos ativos (público)
router.get("/active", async (req, res, next) => {
  await eventController.getActiveEvents(req, res, next);
});

// ========================================
// ROTAS PROTEGIDAS DE LEITURA (qualquer usuário autenticado)
// ========================================

// Listar eventos com filtros (qualquer usuário autenticado)
router.get("/", authenticate, async (req, res, next) => {
  await eventController.getEvents(req, res, next);
});

// Buscar evento por ID (qualquer usuário autenticado)
router.get("/:id", authenticate, async (req, res, next) => {
  await eventController.getEventById(req, res, next);
});

// Estatísticas de eventos (qualquer usuário autenticado)
router.get("/stats/overview", authenticate, async (req, res, next) => {
  await eventController.getEventsStats(req, res, next);
});

// ========================================
// ROTAS PROTEGIDAS PARA COORDENADORES (CREATE, UPDATE, DELETE)
// ========================================

// Criar evento (apenas COORDINATOR)
router.post("/", authenticate, requireCoordinator(), async (req, res, next) => {
  await eventController.createEvent(req, res, next);
});

// Atualizar evento (apenas COORDINATOR)
router.put("/:id", authenticate, requireCoordinator(), async (req, res, next) => {
  await eventController.updateEvent(req, res, next);
});

// Soft delete - desativar evento (apenas COORDINATOR)
router.patch("/:id/deactivate", authenticate, requireCoordinator(), async (req, res, next) => {
  await eventController.softDeleteEvent(req, res, next);
});

// Hard delete - excluir permanentemente (apenas COORDINATOR)
router.delete("/:id", authenticate, requireCoordinator(), async (req, res, next) => {
  await eventController.hardDeleteEvent(req, res, next);
});

export { router as eventRoutes };