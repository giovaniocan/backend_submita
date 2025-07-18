// src/presentation/routes/testEmailRoutes.ts
import { Router } from "express";
import { EmailService } from "../../application/services/emailService";
import { ApiResponse } from "../../shared/utils/response";
import {
  authenticate,
  requireCoordinator,
} from "../middlewares/authMiddleware";

const router = Router();

// ========================================
// ROTA PARA TESTAR CONFIGURAÇÃO DE EMAIL
// ========================================
router.post(
  "/test-connection",
  authenticate,
  requireCoordinator(),
  async (req, res) => {
    try {
      const emailService = new EmailService();
      const isConnected = await emailService.testConnection();

      if (isConnected) {
        res
          .status(200)
          .json(
            ApiResponse.success(
              { connected: true },
              "Email connection successful! ✅"
            )
          );
      } else {
        res
          .status(500)
          .json(ApiResponse.error("Email connection failed ❌", 500));
      }
    } catch (error) {
      res.status(500).json(ApiResponse.error("Email test failed", 500));
    }
  }
);

// ========================================
// ROTA PARA ENVIAR EMAIL DE TESTE
// ========================================
router.post(
  "/send-test",
  authenticate,
  requireCoordinator(),
  async (req, res) => {
    try {
      const { to, type = "evaluator_added" } = req.body;

      if (!to) {
        res
          .status(400)
          .json(ApiResponse.error("Email destination is required", 400));
        return;
      }

      const emailService = new EmailService();

      // Dados de teste
      const testData = {
        evaluatorName: "João Avaliador",
        eventName: "Evento de Teste SUBMITA",
        eventDescription:
          "Este é um evento de teste para verificar o sistema de emails.",
        authorName: "Maria Autora",
        articleTitle:
          "Artigo de Teste: Implementação de Sistema de Notificações",
      };

      switch (type) {
        case "evaluator_added":
          await emailService.sendEvaluatorAddedEmail(
            to,
            testData.evaluatorName,
            testData.eventName,
            testData.eventDescription
          );
          break;

        case "article_submitted":
          await emailService.sendArticleSubmittedEmail(
            to,
            testData.authorName,
            testData.articleTitle,
            testData.eventName
          );
          break;

        case "article_evaluated":
          await emailService.sendArticleReviewedEmail(
            to,
            testData.authorName,
            testData.articleTitle,
            testData.eventName
          );
          break;

        default:
          res.status(400).json(ApiResponse.error("Invalid email type", 400));
          return;
      }

      res.status(200).json(
        ApiResponse.success(
          {
            sent: true,
            to,
            type,
            message: `Test email sent successfully! ✅ Check ${to}`,
          },
          `${type} email sent to ${to}`
        )
      );
    } catch (error) {
      res.status(500).json(ApiResponse.error("Failed to send test email", 500));
    }
  }
);

// ========================================
// ROTA PARA LISTAR TIPOS DE EMAIL DISPONÍVEIS
// ========================================
router.get("/types", authenticate, requireCoordinator(), async (req, res) => {
  const emailTypes = [
    {
      type: "evaluator_added",
      name: "Avaliador Adicionado ao Evento",
      description: "Notifica quando um avaliador é designado para um evento",
    },
    {
      type: "article_submitted",
      name: "Artigo Submetido",
      description: "Confirma submissão de artigo para o autor",
    },
    {
      type: "article_evaluated",
      name: "Artigo Avaliado",
      description: "Notifica o autor sobre a avaliação do artigo",
    },
  ];

  res
    .status(200)
    .json(ApiResponse.success(emailTypes, "Available email types"));
});

export { router as testEmailRoutes };
