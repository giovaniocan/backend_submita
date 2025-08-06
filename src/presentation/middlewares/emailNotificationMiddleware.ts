// src/presentation/middlewares/emailNotificationMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { EmailService } from "../../application/services/emailService";

export class EmailNotificationMiddleware {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  notifyEvaluatorAdded() {
    return (req: Request, res: Response, next: NextFunction): void => {
      // Interceptar a resposta original
      const originalJson = res.json;

      res.json = function (body: any) {
        // Chamar o método original primeiro
        const result = originalJson.call(this, body);

        // Se a operação foi bem-sucedida, enviar notificações
        if (body.success && body.data && body.data.added) {
          const addedEvaluators = body.data.added;

          // Para cada avaliador adicionado, enviar notificação assíncrona
          addedEvaluators.forEach((evaluator: any) => {
            if (evaluator.user && evaluator.event) {
              setImmediate(async () => {
                try {
                  const emailService = new EmailService();
                  await emailService.sendEvaluatorAddedEmail(
                    evaluator.user.email,
                    evaluator.user.name,
                    evaluator.event.name,
                    evaluator.event.description
                  );
                  console.log(
                    `✅ Email enviado para avaliador: ${evaluator.user.email}`
                  );
                } catch (error) {
                  console.error(
                    `❌ Erro ao enviar email para ${evaluator.user.email}:`,
                    error
                  );
                }
              });
            }
          });
        }

        return result;
      };

      next();
    };
  }

  notifyArticleSubmitted() {
    return (req: Request, res: Response, next: NextFunction): void => {
      const originalJson = res.json;

      res.json = function (body: any) {
        const result = originalJson.call(this, body);

        // Se artigo foi criado com sucesso
        if (body.success && body.data && req.method === "POST") {
          const article = body.data;

          // Verificar se tem os dados necessários
          if (article.user && article.event && article.title) {
            setImmediate(async () => {
              try {
                const emailService = new EmailService();
                await emailService.sendArticleSubmittedEmail(
                  article.user.email,
                  article.user.name,
                  article.title,
                  article.event.name
                );
                console.log(
                  `✅ Email de submissão enviado para: ${article.user.email}`
                );
              } catch (error) {}
            });
          }
        }

        return result;
      };

      next();
    };
  }

  notifyArticleReviewed() {
    return (req: Request, res: Response, next: NextFunction): void => {
      const originalJson = res.json;

      res.json = function (body: any) {
        const result = originalJson.call(this, body);

        // Se status do artigo foi atualizado para um dos finais
        if (body.success && body.data && req.method === "PUT") {
          const article = body.data;

          if (
            article.user &&
            article.event &&
            article.title &&
            article.status
          ) {
            const finalStatuses = ["APPROVED", "TO_CORRECTION", "REJECTED"];

            if (finalStatuses.includes(article.status)) {
              setImmediate(async () => {
                try {
                  const emailService = new EmailService();

                  await emailService.sendArticleReviewedEmail(
                    article.user.email,
                    article.user.name,
                    article.title,
                    article.event.name
                  );
                  console.log(
                    `✅ Email de revisão enviado para: ${article.user.email}`
                  );
                } catch (error) {}
              });
            }
          }
        }

        return result;
      };

      next();
    };
  }
}

// Instância singleton para uso global
const emailNotificationMiddleware = new EmailNotificationMiddleware();

// ========================================
// EXPORTAR APENAS OS 3 MIDDLEWARES NECESSÁRIOS
// ========================================

//Para adicionar avaliador ao evento
export const notifyEvaluatorAdded =
  emailNotificationMiddleware.notifyEvaluatorAdded.bind(
    emailNotificationMiddleware
  );

//Para submissão de artigo
export const notifyArticleSubmitted =
  emailNotificationMiddleware.notifyArticleSubmitted.bind(
    emailNotificationMiddleware
  );

//Para artigo corrigido
export const notifyArticleReviewed =
  emailNotificationMiddleware.notifyArticleReviewed.bind(
    emailNotificationMiddleware
  );
