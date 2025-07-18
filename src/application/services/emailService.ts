// src/infrastructure/services/EmailService.ts
import nodemailer from "nodemailer";
import { AppError } from "../../shared/errors/AppError";

export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export class EmailService {
  private transporter!: nodemailer.Transporter;

  constructor() {
    this.createTransporter();
  }

  private createTransporter(): void {
    // Verificar se as variáveis de ambiente estão configuradas
    const requiredEnvVars = ["EMAIL_USER", "EMAIL_PASS", "EMAIL_FROM_ADDRESS"];

    return;
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new AppError(`Environment variable ${envVar} is required`, 500);
      }
    }

    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true para 465, false para outros
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Senha de app do Gmail
      },
    });
  }

  // ========================================
  // MÉTODO PRINCIPAL PARA ENVIAR EMAIL
  // ========================================
  async sendEmail(options: EmailOptions): Promise<void> {
    try {
      const mailOptions = {
        from: {
          name: process.env.EMAIL_FROM_NAME || "Sistema SUBMITA",
          address: process.env.EMAIL_FROM_ADDRESS!,
        },
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      };

      const result = await this.transporter.sendMail(mailOptions);
    } catch (error) {
      throw new AppError("Failed to send email", 500);
    }
  }

  // ========================================
  // TEMPLATES DE EMAIL
  // ========================================

  // Template para avaliador adicionado ao evento
  generateEvaluatorAddedTemplate(
    evaluatorName: string,
    eventName: string,
    eventDescription?: string
  ): EmailTemplate {
    const subject = `🎓 Você foi designado como avaliador - ${eventName}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Designação como Avaliador</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #007bff; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .btn { background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎓 Sistema SUBMITA</h1>
          </div>
          <div class="content">
            <h2>Olá, ${evaluatorName}!</h2>
            <p>Você foi designado como <strong>avaliador</strong> para o evento:</p>
            <h3>📚 ${eventName}</h3>
            ${eventDescription ? `<p><em>${eventDescription}</em></p>` : ""}
            <p>Em breve você receberá artigos para avaliação. Acesse a plataforma para acompanhar suas atribuições.</p>
            <p style="text-align: center;">
              <a href="${
                process.env.FRONTEND_URL
              }/dashboard" class="btn">Acessar Plataforma</a>
            </p>
            <p><strong>Suas responsabilidades:</strong></p>
            <ul>
              <li>Avaliar artigos designados dentro do prazo</li>
              <li>Fornecer feedback construtivo aos autores</li>
              <li>Manter sigilo sobre a identidade dos autores</li>
            </ul>
          </div>
          <div class="footer">
            <p>Este é um email automático. Não responda.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const text = `
      Olá, ${evaluatorName}!

      Você foi designado como avaliador para o evento: ${eventName}
      ${eventDescription ? `Descrição: ${eventDescription}` : ""}

      Acesse a plataforma em: ${process.env.FRONTEND_URL}/dashboard

      Suas responsabilidades:
      - Avaliar artigos designados dentro do prazo
      - Fornecer feedback construtivo aos autores
      - Manter sigilo sobre a identidade dos autores

      Sistema SUBMITA
    `;

    return { subject, html, text };
  }

  // Template para artigo submetido (confirmação para aluno)
  generateArticleSubmittedTemplate(
    authorName: string,
    articleTitle: string,
    eventName: string
  ): EmailTemplate {
    const subject = `✅ Artigo submetido com sucesso - ${eventName}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Artigo Submetido</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #28a745; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .btn { background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          .success-box { background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Submissão Confirmada</h1>
          </div>
          <div class="content">
            <h2>Parabéns, ${authorName}!</h2>
            <div class="success-box">
              <p><strong>Seu artigo foi submetido com sucesso!</strong></p>
            </div>
            <p><strong>Detalhes da submissão:</strong></p>
            <ul>
              <li><strong>Artigo:</strong> ${articleTitle}</li>
              <li><strong>Evento:</strong> ${eventName}</li>
              <li><strong>Status:</strong> Em Avaliação</li>
            </ul>
            <p>Seu artigo passará pelo processo de avaliação. Você será notificado quando houver atualizações.</p>
            <p style="text-align: center;">
              <a href="${process.env.FRONTEND_URL}/dashboard" class="btn">Acompanhar Status</a>
            </p>
            <p><strong>Próximos passos:</strong></p>
            <ul>
              <li>Aguarde a avaliação pelos revisores</li>
              <li>Acompanhe o status na plataforma</li>
              <li>Fique atento a notificações de correções</li>
            </ul>
          </div>
          <div class="footer">
            <p>Este é um email automático. Não responda.</p>
          </div>
        </div>
      </div>
      </body>
      </html>
    `;

    const text = `
      Parabéns, ${authorName}!

      Seu artigo foi submetido com sucesso!

      Detalhes:
      - Artigo: ${articleTitle}
      - Evento: ${eventName}
      - Status: Em Avaliação

      Acompanhe o status em: ${process.env.FRONTEND_URL}/dashboard

      Próximos passos:
      - Aguarde a avaliação pelos revisores
      - Acompanhe o status na plataforma
      - Fique atento a notificações de correções

      Sistema SUBMITA
    `;

    return { subject, html, text };
  }

  // Template para artigo corrigido (SEM REVELAR O RESULTADO)
  generateArticleReviewedTemplate(
    authorName: string,
    articleTitle: string,
    eventName: string
  ): EmailTemplate {
    const subject = `📝 Seu artigo foi corrigido - ${articleTitle}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Artigo Corrigido</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #007bff; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .btn { background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          .info-box { background: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📝 Artigo Corrigido</h1>
          </div>
          <div class="content">
            <h2>Olá, ${authorName}!</h2>
            <div class="info-box">
              <p><strong>Seu artigo foi corrigido e a avaliação está disponível!</strong></p>
            </div>
            <p><strong>Detalhes:</strong></p>
            <ul>
              <li><strong>Artigo:</strong> ${articleTitle}</li>
              <li><strong>Evento:</strong> ${eventName}</li>
              <li><strong>Status:</strong> Avaliação concluída</li>
            </ul>
            <p>A avaliação do seu artigo foi finalizada. Para conhecer o resultado e visualizar os comentários dos avaliadores, acesse a plataforma.</p>
            <p style="text-align: center;">
              <a href="${process.env.FRONTEND_URL}/dashboard" class="btn">Ver Resultado da Avaliação</a>
            </p>
            <p><strong>Próximos passos:</strong></p>
            <ul>
              <li>Acesse sua conta na plataforma</li>
              <li>Visualize o resultado da avaliação</li>
              <li>Leia os comentários dos avaliadores</li>
              <li>Siga as orientações conforme o resultado</li>
            </ul>
          </div>
          <div class="footer">
            <p>Este é um email automático. Não responda.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const text = `
      Olá, ${authorName}!

      Seu artigo foi corrigido e a avaliação está disponível!

      Detalhes:
      - Artigo: ${articleTitle}
      - Evento: ${eventName}
      - Status: Avaliação concluída

      Acesse a plataforma para ver o resultado: ${process.env.FRONTEND_URL}/dashboard

      Próximos passos:
      - Acesse sua conta na plataforma
      - Visualize o resultado da avaliação
      - Leia os comentários dos avaliadores
      - Siga as orientações conforme o resultado

      Sistema SUBMITA
    `;

    return { subject, html, text };
  }

  // ========================================
  // MÉTODOS DE CONVENIÊNCIA
  // ========================================

  async sendEvaluatorAddedEmail(
    evaluatorEmail: string,
    evaluatorName: string,
    eventName: string,
    eventDescription?: string
  ): Promise<void> {
    const template = this.generateEvaluatorAddedTemplate(
      evaluatorName,
      eventName,
      eventDescription
    );

    await this.sendEmail({
      to: evaluatorEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });
  }

  async sendArticleSubmittedEmail(
    authorEmail: string,
    authorName: string,
    articleTitle: string,
    eventName: string
  ): Promise<void> {
    const template = this.generateArticleSubmittedTemplate(
      authorName,
      articleTitle,
      eventName
    );

    await this.sendEmail({
      to: authorEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });
  }

  async sendArticleReviewedEmail(
    authorEmail: string,
    authorName: string,
    articleTitle: string,
    eventName: string
  ): Promise<void> {
    const template = this.generateArticleReviewedTemplate(
      authorName,
      articleTitle,
      eventName
    );

    await this.sendEmail({
      to: authorEmail,
      subject: template.subject,
      html: template.html,
      text: template.text,
    });
  }

  // ========================================
  // TESTE DE CONFIGURAÇÃO
  // ========================================
  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      return false;
    }
  }
}
