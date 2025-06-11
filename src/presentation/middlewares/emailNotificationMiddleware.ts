// src/presentation/middlewares/emailNotificationMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { EmailService } from "../../application/services/emailService";

export class EmailNotificationMiddleware {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  // ========================================
  // MIDDLEWARE PARA AVALIADOR ADICIONADO AO EVENTO
  // ========================================
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

  // ========================================
  // MIDDLEWARE PARA ARTIGO SUBMETIDO
  // ========================================
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
              } catch (error) {
                console.error(`❌ Erro ao enviar email de submissão:`, error);
              }
            });
          }
        }

        return result;
      };

      next();
    };
  }

  // ========================================
  // MIDDLEWARE PARA ARTIGO AVALIADO
  // ========================================
  notifyArticleEvaluated() {
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
            const finalStatuses = [
              "APPROVED",
              "APPROVED_WITH_REMARKS",
              "REJECTED",
            ];

            if (finalStatuses.includes(article.status)) {
              setImmediate(async () => {
                try {
                  const emailService = new EmailService();

                  // Buscar dados adicionais se disponíveis no body
                  const averageGrade =
                    req.body.averageGrade || article.averageGrade;
                  const hasComments =
                    req.body.hasComments || article.hasComments || false;

                  await emailService.sendArticleEvaluatedEmail(
                    article.user.email,
                    article.user.name,
                    article.title,
                    article.event.name,
                    article.status as
                      | "APPROVED"
                      | "APPROVED_WITH_REMARKS"
                      | "REJECTED",
                    averageGrade,
                    hasComments
                  );
                  console.log(
                    `✅ Email de avaliação enviado para: ${article.user.email}`
                  );
                } catch (error) {
                  console.error(`❌ Erro ao enviar email de avaliação:`, error);
                }
              });
            }
          }
        }

        return result;
      };

      next();
    };
  }

  // ========================================
  // MIDDLEWARE GENÉRICO PARA QUALQUER NOTIFICAÇÃO
  // ========================================
  sendEmailNotification(emailFunction: (data: any) => Promise<void>) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const originalJson = res.json;

      res.json = function (body: any) {
        const result = originalJson.call(this, body);

        // Se operação foi bem-sucedida, executar função de email
        if (body.success && body.data) {
          setImmediate(async () => {
            try {
              await emailFunction(body.data);
            } catch (error) {
              console.error(`❌ Erro ao enviar notificação por email:`, error);
            }
          });
        }

        return result;
      };

      next();
    };
  }

  // ========================================
  // MIDDLEWARE PARA NOVA VERSÃO DE ARTIGO
  // ========================================
  notifyNewArticleVersion() {
    return (req: Request, res: Response, next: NextFunction): void => {
      const originalJson = res.json;

      res.json = function (body: any) {
        const result = originalJson.call(this, body);

        // Se nova versão foi criada (quando há upload de PDF)
        if (
          body.success &&
          body.data &&
          req.method === "POST" &&
          req.path.includes("version")
        ) {
          const articleVersion = body.data;

          if (articleVersion.article && articleVersion.article.user) {
            setImmediate(async () => {
              try {
                const emailService = new EmailService();

                // Email customizado para nova versão
                await emailService.sendEmail({
                  to: articleVersion.article.user.email,
                  subject: `📄 Nova versão submetida - ${articleVersion.article.title}`,
                  html: `
                    <h2>Nova versão submetida com sucesso!</h2>
                    <p>Olá, ${articleVersion.article.user.name}!</p>
                    <p>Sua nova versão do artigo <strong>"${articleVersion.article.title}"</strong> foi submetida com sucesso.</p>
                    <p><strong>Versão:</strong> ${articleVersion.version}</p>
                    <p>O artigo passará por nova avaliação. Você será notificado quando houver atualizações.</p>
                  `,
                  text: `Nova versão do artigo "${articleVersion.article.title}" submetida com sucesso! Versão: ${articleVersion.version}`,
                });

                console.log(
                  `✅ Email de nova versão enviado para: ${articleVersion.article.user.email}`
                );
              } catch (error) {
                console.error(`❌ Erro ao enviar email de nova versão:`, error);
              }
            });
          }
        }

        return result;
      };

      next();
    };
  }

  // ========================================
  // MIDDLEWARE PARA AVALIAÇÃO ATRIBUÍDA
  // ========================================
  notifyEvaluationAssigned() {
    return (req: Request, res: Response, next: NextFunction): void => {
      const originalJson = res.json;

      res.json = function (body: any) {
        const result = originalJson.call(this, body);

        // Se avaliação foi atribuída
        if (
          body.success &&
          body.data &&
          req.method === "POST" &&
          req.path.includes("assign")
        ) {
          const assignment = body.data;

          if (assignment.evaluator && assignment.article) {
            setImmediate(async () => {
              try {
                const emailService = new EmailService();

                await emailService.sendEmail({
                  to: assignment.evaluator.email,
                  subject: `📝 Novo artigo para avaliação - ${assignment.article.title}`,
                  html: `
                    <h2>Novo artigo para avaliação</h2>
                    <p>Olá, ${assignment.evaluator.name}!</p>
                    <p>Você recebeu um novo artigo para avaliação:</p>
                    <p><strong>Título:</strong> ${assignment.article.title}</p>
                    <p><strong>Evento:</strong> ${assignment.article.event?.name}</p>
                    <p>Acesse a plataforma para realizar a avaliação.</p>
                    <p><a href="${process.env.FRONTEND_URL}/dashboard">Acessar Plataforma</a></p>
                  `,
                  text: `Novo artigo para avaliação: "${assignment.article.title}". Acesse a plataforma para avaliar.`,
                });

                console.log(
                  `✅ Email de artigo atribuído enviado para: ${assignment.evaluator.email}`
                );
              } catch (error) {
                console.error(`❌ Erro ao enviar email de atribuição:`, error);
              }
            });
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
// EXPORTAR MIDDLEWARES PRONTOS PARA USO
// ========================================

// Para adicionar avaliador ao evento
export const notifyEvaluatorAdded =
  emailNotificationMiddleware.notifyEvaluatorAdded.bind(
    emailNotificationMiddleware
  );

// Para submissão de artigo
export const notifyArticleSubmitted =
  emailNotificationMiddleware.notifyArticleSubmitted.bind(
    emailNotificationMiddleware
  );

// Para artigo avaliado
export const notifyArticleEvaluated =
  emailNotificationMiddleware.notifyArticleEvaluated.bind(
    emailNotificationMiddleware
  );

// Para nova versão de artigo
export const notifyNewArticleVersion =
  emailNotificationMiddleware.notifyNewArticleVersion.bind(
    emailNotificationMiddleware
  );

// Para avaliação atribuída
export const notifyEvaluationAssigned =
  emailNotificationMiddleware.notifyEvaluationAssigned.bind(
    emailNotificationMiddleware
  );

// Middleware genérico
export const sendEmailNotification =
  emailNotificationMiddleware.sendEmailNotification.bind(
    emailNotificationMiddleware
  );
