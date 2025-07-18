// src/presentation/routes/eventRoutes.ts
import { Router } from "express";
import { EventController } from "../controllers/EventController";
import {
  authenticate,
  requireCoordinator,
  requireStaff,
} from "../middlewares/authMiddleware";
import { EventEvaluatorController } from "../controllers/EventEvaluatorController";
import { notifyEvaluatorAdded } from "../middlewares/emailNotificationMiddleware";

const router = Router();
const eventController = new EventController();
const eventEvaluatorController = new EventEvaluatorController();

// ========================================
// ROTAS PÚBLICAS DE LEITURA (sem autenticação)
// ========================================

// Listar eventos ativos (público)
router.get("/active", async (req, res, next) => {
  await eventController.getActiveEvents(req, res, next);
});

// Listar eventos com filtros (público)
router.get("/", async (req, res, next) => {
  await eventController.getEvents(req, res, next);
});

// Buscar evento por ID (público)
router.get("/:id", async (req, res, next) => {
  await eventController.getEventById(req, res, next);
});

// ========================================
// ROTAS PROTEGIDAS PARA COORDENADORES (CREATE, UPDATE, DELETE)
// ========================================

// Estatísticas de eventos (apenas COORDINATOR)
router.get(
  "/stats/overview",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.getEventsStats(req, res, next);
  }
);

// Criar evento (apenas COORDINATOR)
router.post("/", authenticate, requireCoordinator(), async (req, res, next) => {
  await eventController.createEvent(req, res, next);
});

// Atualizar evento (apenas COORDINATOR)
router.put(
  "/:id",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.updateEvent(req, res, next);
  }
);

// JPF: editar evento
router.patch(
  "/:id",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.editEvent(req, res, next);
  }
);

// Soft delete - desativar evento (apenas COORDINATOR)
router.patch(
  "/:id/deactivate",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.softDeleteEvent(req, res, next);
  }
);

// Hard delete - excluir permanentemente (apenas COORDINATOR)
router.delete(
  "/:id",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.hardDeleteEvent(req, res, next);
  }
);

// ========================================
// ✅ NOVAS ROTAS DE AVALIADORES (ADICIONAR NO FINAL)
// ========================================
// Adicionar avaliadores ao evento (1 ou múltiplos)
router.post(
  "/:eventId/evaluators",
  authenticate,
  requireCoordinator(),
  // notifyEvaluatorAdded(),
  async (req, res, next) => {
    await eventEvaluatorController.addEvaluatorsToEvent(req, res, next);
  }
);

// Listar avaliadores de um evento
router.get(
  "/:eventId/evaluators",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventEvaluatorController.getEventEvaluators(req, res, next);
  }
);

// Buscar avaliador específico no evento
router.get(
  "/:eventId/evaluators/:id",
  authenticate,
  requireStaff(),
  async (req, res, next) => {
    await eventEvaluatorController.getEventOneEvaluator(req, res, next);
  }
);

// Remover avaliador do evento
router.delete(
  "/:eventId/evaluators/:userId",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventEvaluatorController.removeEvaluatorFromEvent(req, res, next);
  }
);

// ========================================
// ✅ ROTAS DE ARTIGOS
// ========================================
router.get(
  "/:eventId/articles",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.getArticlesByEventId(req, res, next);
  }
);

// ========================================
// ✅ NOVAS ROTAS DE CHECKLIST NO EVENTO (ADICIONAR NO FINAL)
// ========================================
router.patch(
  "/:eventId/checklist",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.assignChecklistToEvent(req, res, next);
  }
);
// Remover checklist do evento (apenas COORDINATOR)
router.delete(
  "/:eventId/checklist",
  authenticate,
  requireCoordinator(),
  async (req, res, next) => {
    await eventController.removeChecklistFromEvent(req, res, next);
  }
);

// ========================================
// ✅ NOVA ROTA: Buscar questões do checklist do evento
// ========================================
router.get(
  "/:eventId/checklist/questions",
  authenticate,
  async (req, res, next) => {
    await eventController.getEventChecklistQuestions(req, res, next);
  }
);

export { router as eventRoutes };
