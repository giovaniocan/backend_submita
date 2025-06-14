import {
  Article,
  ArticleVersion,
  Evaluation,
  Event as PrismaEvent,
} from "../../generated/prisma";
import { ArticleEvaluatorAssignmentRepository } from "../../infrastructure/repositories/ArticleEvaluatorAssignmentRepository";
import { ArticleRepository } from "../../infrastructure/repositories/ArticleRepository";
import { ArticleVersionRepository } from "../../infrastructure/repositories/ArticleVersionRepository";
import { EvaluationRepository } from "../../infrastructure/repositories/EvaluationRepository";
import { EventEvaluatorRepository } from "../../infrastructure/repositories/EventEvaluatorRepository";
import { EventRepository } from "../../infrastructure/repositories/EventRepository";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../shared/errors/AppError";
import {
  CreateEvaluationDto,
  DeleteEvaluationResponseDto,
  EvaluationCompletedResponseDto,
} from "../dtos/EvaluationDto";

interface DeleteValidationContext {
  evaluation: Evaluation;
  article: Article;
  event: PrismaEvent;
  articleVersion: ArticleVersion;
}

export class EvaluationService {
  private evaluationRepository: EvaluationRepository;
  private articleVersionRepository: ArticleVersionRepository;
  private articleRepository: ArticleRepository;
  private eventRepository: EventRepository;
  private eventEvaluatorRepository: EventEvaluatorRepository;
  private assignmentRepository: ArticleEvaluatorAssignmentRepository;

  private static readonly BUSINESS_RULES = {
    DELETE_DEADLINES: {
      FINALIZED_ARTICLES_HOURS: 24,
      GENERAL_EVALUATIONS_DAYS: 3,
    },
    PERMISSIONS: {
      EVALUATOR_CAN_DELETE_OWN: true,
      COORDINATOR_CAN_DELETE_ANY: false,
    },
    CASCADE_ACTIONS: {
      DELETE_QUESTION_RESPONSES: true,
      RESET_ASSIGNMENT_STATUS: true,
      RECALCULATE_ARTICLE_STATUS: true,
    },
  } as const;

  constructor() {
    this.evaluationRepository = new EvaluationRepository();
    this.articleVersionRepository = new ArticleVersionRepository();
    this.articleRepository = new ArticleRepository();
    this.eventRepository = new EventRepository();
    this.eventEvaluatorRepository = new EventEvaluatorRepository();
    this.assignmentRepository = new ArticleEvaluatorAssignmentRepository();
  }

  async createEvaluation(
    evaluationData: CreateEvaluationDto,
    userId: string
  ): Promise<EvaluationCompletedResponseDto> {
    //metodo para validar se os dados estão corretos
    this.validateCreateData(evaluationData);
    this.validateUserId(userId);

    try {
      const articleVersion = await this.getAndValidateArticleVersion(
        evaluationData.articleVersionId
      );

      const article = await this.getAndValidateArticle(
        articleVersion.articleId
      );

      const event = await this.getAndValidateEvent(article.eventId);
      this.validateEvaluationDeadline(event);

      const eventEvaluatorId = await this.validateEvaluatorPermission(
        userId,
        article.eventId,
        article.id
      );

      await this.validateNotAlreadyEvaluated(userId, article.id);

      const evaluation = await this.evaluationRepository.create({
        grade: evaluationData.grade,
        evaluationDescription: evaluationData.evaluationDescription,
        evaluationDate: new Date(),
        userId,
        articleVersionId: evaluationData.articleVersionId,
        evaluationStatus: evaluationData.status,
      });

      await this.assignmentRepository.markAsCorrected(
        article.id,
        eventEvaluatorId
      );

      const updatedArticle =
        await this.articleRepository.incrementEvaluationsDone(article.id);

      const totalEvaluationsNeeded = await this.getTotalEvaluationsNeeded(
        article.id,
        event.evaluationType
      );

      let articleFinalized = false;
      let finalGrade: number | undefined;
      let finalStatus:
        | "APPROVED"
        | "IN_CORRECTION"
        | "REJECTED"
        | "IN_EVALUATION";
      finalStatus = "IN_EVALUATION";

      console.log("avaliacoes feitas", updatedArticle.evaluationsDone);
      console.log("total de avaliacoes necessarias", totalEvaluationsNeeded);

      if (updatedArticle.evaluationsDone >= totalEvaluationsNeeded) {
        // ✅ TODAS AS AVALIAÇÕES CONCLUÍDAS - FINALIZAR ARTIGO
        const result = await this.finalizeArticle(
          articleVersion.id,
          article.id
        );
        articleFinalized = true;
        finalGrade = result.finalGrade;
        finalStatus = result.finalStatus;
      }

      return {
        evaluation: await this.toEvaluationResponse(evaluation),
        articleFinalized,
        finalGrade,
        finalStatus: finalStatus,
        totalEvaluations: totalEvaluationsNeeded,
        completedEvaluations: updatedArticle.evaluationsDone,
      };
    } catch (error) {
      console.error("❌ Error creating evaluation:", error);
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Failed to create evaluation", 500);
    }
  }

  private async getAndValidateArticleVersion(articleVersionId: string) {
    const articleVersion = await this.articleVersionRepository.findById(
      articleVersionId
    );
    if (!articleVersion) {
      throw new AppError("Article version not found", 404);
    }
    return articleVersion;
  }

  private async getAndValidateArticle(articleId: string) {
    const article = await this.articleRepository.findActiveById(articleId);

    if (!article) {
      throw new AppError("Article not found or inactive", 404);
    }

    // Validar se artigo está com status SUBMITTED
    if (article.status !== "SUBMITTED") {
      throw new AppError(
        `Article cannot be evaluated. Current status: ${article.status}. Only articles with status SUBMITTED can be evaluated.`,
        400
      );
    }

    return article;
  }

  private async getAndValidateEvent(eventId: string) {
    const event = await this.eventRepository.findActiveById(eventId);

    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    return event;
  }

  private validateEvaluationDeadline(event: any): void {
    const now = new Date();

    // Validar se ainda está dentro do período do evento
    if (now < event.eventStartDate) {
      throw new AppError(
        "Evaluations cannot be submitted before the event starts",
        400
      );
    }

    if (now > event.eventEndDate) {
      throw new AppError(
        "Evaluations cannot be submitted after the event has ended",
        400
      );
    }

    // Validar se ainda está dentro do período de submissões
    // (avaliações devem ser feitas durante o período de submissões ativas)
    /*
  if (now > event.submissionEndDate) {
    throw new AppError("Evaluation deadline has passed", 400);
  }
    */
  }

  private async validateEvaluatorPermission(
    userId: string,
    eventId: string,
    articleId: string
  ): Promise<string> {
    // 1️⃣ Verificar se o usuário está na tabela EventEvaluator e se está ativo
    const eventEvaluator =
      await this.eventEvaluatorRepository.findByEventAndUser(eventId, userId);

    if (!eventEvaluator) {
      throw new AppError(
        "You are not registered as an evaluator for this event",
        403
      );
    }

    if (!eventEvaluator.isActive) {
      throw new AppError(
        "Your evaluator access for this event is inactive",
        403
      );
    }

    // 2️⃣ Verificar se o avaliador está ESPECIFICAMENTE atribuído ao artigo
    const assignment = await this.assignmentRepository.findByArticleAndUser(
      articleId,
      userId
    );

    if (!assignment) {
      throw new AppError("You are not assigned to evaluate this article", 403);
    }

    // 3️⃣ Validar se não é o próprio autor (conflito de interesse)
    const article = await this.articleRepository.findById(articleId);
    if (article && article.userId === userId) {
      throw new AppError("You cannot evaluate your own article", 403);
    }

    return eventEvaluator.id;
  }

  private async validateNotAlreadyEvaluated(
    userId: string,
    articleId: string
  ): Promise<void> {
    // Buscar o assignment específico do avaliador para o artigo
    const assignment = await this.assignmentRepository.findByArticleAndUser(
      articleId,
      userId
    );

    if (!assignment) {
      throw new AppError(
        "Assignment not found for this evaluator and article",
        404
      );
    }

    // Verificar se o campo isCorrected é false (se true, já avaliou)
    if (assignment.isCorrected) {
      throw new AppError(
        "You have already submitted an evaluation for this article",
        400
      );
    }
  }

  private async getTotalEvaluationsNeeded(
    articleId: string,
    evaluationType: string
  ): Promise<number> {
    // Contar quantos avaliadores estão atribuídos ao artigo
    const totalAssignments = await this.assignmentRepository.countByArticleId(
      articleId
    );

    // Validar número mínimo baseado no tipo de avaliação
    const minimumRequired = this.getMinimumEvaluatorsByType(evaluationType);

    if (totalAssignments < minimumRequired) {
      throw new AppError(
        `Insufficient evaluators assigned. ${evaluationType} evaluation requires at least ${minimumRequired} evaluators, but only ${totalAssignments} are assigned.`,
        400
      );
    }

    return totalAssignments;
  }

  private getMinimumEvaluatorsByType(evaluationType: string): number {
    switch (evaluationType) {
      case "DIRECT":
        return 1;
      case "PAIR":
        return 2;
      case "PANEL":
        return 3;
      default:
        return 1;
    }
  }

  private async finalizeArticle(
    articleVersionId: string,
    articleId: string
  ): Promise<{
    finalGrade: number;
    finalStatus: "APPROVED" | "IN_CORRECTION" | "REJECTED";
  }> {
    // 1️⃣ BUSCAR TODAS AS AVALIAÇÕES DO ARTIGO
    const evaluations =
      await this.evaluationRepository.getEvaluationsByArticleVersionId(
        articleVersionId
      );

    console.log("Avaliações encontradas:", evaluations);

    if (evaluations.length === 0) {
      throw new AppError("No evaluations found for this article", 500);
    }

    // 2️⃣ CALCULAR NOTA FINAL E STATUS
    const finalGrade = this.calculateFinalGrade(evaluations);
    const finalStatus = this.calculateFinalStatus(evaluations);
    this.sendEmailByStatus(finalStatus);

    // 3️⃣ ATUALIZAR O ARTIGO COM RESULTADO FINAL
    await this.articleRepository.updateStatus(articleId, finalStatus);

    return {
      finalGrade,
      finalStatus,
    };
  }

  private sendEmailByStatus(
    finalStatus: "APPROVED" | "IN_CORRECTION" | "REJECTED"
  ) {
    //aqui vamos fazer uma logica, se foi aprovado, enviar um email de aprovação
    // se foi reprovado, enviar um email de reprovação
    // se for in correction, enviar um email falando que precisa de correção
  }

  private calculateFinalGrade(evaluations: Evaluation[]): number {
    if (evaluations.length === 0) {
      throw new AppError("Cannot calculate grade without evaluations", 500);
    }

    // Calcular média aritmética simples das notas
    const totalGrades = evaluations.reduce(
      (sum, evaluation) => sum + evaluation.grade,
      0
    );
    const average = totalGrades / evaluations.length;

    // Arredondar para 1 casa decimal
    return Math.round(average * 10) / 10;
  }

  private calculateFinalStatus(
    evaluations: Evaluation[]
  ): "APPROVED" | "IN_CORRECTION" | "REJECTED" {
    const quantityOfEvaluations = evaluations.length;

    if (quantityOfEvaluations === 0) {
      throw new AppError("Cannot calculate status without evaluations", 500);
    }

    // Contar cada tipo de status
    const approvedCount = evaluations.filter(
      (e) => e.status === "APPROVED"
    ).length;
    const toCorrectionCount = evaluations.filter(
      (e) => e.status === "TO_CORRECTION"
    ).length;
    const rejectedCount = evaluations.filter(
      (e) => e.status === "REJECTED"
    ).length;

    // ========================================
    // REGRA 1: UM AVALIADOR (DIRECT)
    // ========================================
    if (quantityOfEvaluations === 1) {
      const evaluation = evaluations[0];

      if (evaluation.status === "APPROVED") {
        return "APPROVED";
      } else if (evaluation.status === "TO_CORRECTION") {
        return "IN_CORRECTION";
      } else {
        return "REJECTED";
      }
    }

    // ========================================
    // REGRA 2: DOIS AVALIADORES (PAIR)
    // ========================================
    else if (quantityOfEvaluations === 2) {
      // Ambos aprovaram
      if (approvedCount === 2) {
        return "APPROVED";
      }
      // Ambos rejeitaram
      else if (rejectedCount === 2) {
        return "REJECTED";
      }
      // Qualquer outro caso (pelo menos 1 quer correção, ou 1 aprovou + 1 rejeitou)
      else {
        return "IN_CORRECTION";
      }
    }

    // ========================================
    // REGRA 3: TRÊS OU MAIS AVALIADORES (PANEL)
    // ========================================
    else {
      const halfQuantity = quantityOfEvaluations / 2;

      // MAIORIA ABSOLUTA APROVOU (mais de 50%)
      if (approvedCount > halfQuantity) {
        return "APPROVED";
      }

      // MAIORIA ABSOLUTA REJEITOU (mais de 50%)
      else if (rejectedCount > halfQuantity) {
        return "REJECTED";
      }

      // CASOS MISTOS (nenhuma maioria absoluta)
      else {
        // Se tem mais "TO_CORRECTION" que "REJECTED" -> correção
        if (toCorrectionCount >= rejectedCount) {
          return "IN_CORRECTION";
        }
        // Se tem mais "REJECTED" que "TO_CORRECTION" -> rejeição
        else {
          return "REJECTED";
        }
      }
    }
  }

  private validateCreateData(evaluationData: CreateEvaluationDto): void {
    // Validar nota
    if (
      evaluationData.grade === undefined ||
      evaluationData.grade === null ||
      isNaN(evaluationData.grade)
    ) {
      throw new AppError("Grade is required and must be a valid number", 400);
    }

    if (evaluationData.grade < 0 || evaluationData.grade > 10) {
      throw new AppError("Grade must be between 0 and 10", 400);
    }

    // Validar articleVersionId
    if (!evaluationData.articleVersionId) {
      throw new AppError("Article version ID is required", 400);
    }

    if (!this.isValidUUID(evaluationData.articleVersionId)) {
      throw new AppError("Invalid article version ID format", 400);
    }

    // Validar descrição (se fornecida)
    if (evaluationData.evaluationDescription) {
      if (evaluationData.evaluationDescription.trim().length === 0) {
        throw new AppError("Evaluation description cannot be empty", 400);
      }

      if (evaluationData.evaluationDescription.length > 2000) {
        throw new AppError(
          "Evaluation description cannot exceed 2000 characters",
          400
        );
      }
    }
  }

  private validateUserId(userId: string): void {
    if (!userId) {
      throw new AppError("User ID is required", 400);
    }

    if (!this.isValidUUID(userId)) {
      throw new AppError("Invalid user ID format", 400);
    }
  }

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  private async toEvaluationResponse(evaluation: Evaluation): Promise<any> {
    // Buscar dados relacionados para resposta completa
    const evaluationWithRelations =
      await this.evaluationRepository.findByIdWithRelations(evaluation.id);

    if (!evaluationWithRelations) {
      throw new AppError("Evaluation not found after creation", 500);
    }

    return {
      id: evaluationWithRelations.id,
      grade: evaluationWithRelations.grade,
      evaluationDescription: evaluationWithRelations.evaluationDescription,
      evaluationDate: evaluationWithRelations.evaluationDate,
      userId: evaluationWithRelations.userId,
      articleVersionId: evaluationWithRelations.articleVersionId,
      createdAt: evaluationWithRelations.createdAt,
      updatedAt: evaluationWithRelations.updatedAt,
      user: {
        id: evaluationWithRelations.user.id,
        name: evaluationWithRelations.user.name,
        email: evaluationWithRelations.user.email,
      },
      articleVersion: {
        id: evaluationWithRelations.articleVersion.id,
        version: evaluationWithRelations.articleVersion.version,
        article: {
          id: evaluationWithRelations.articleVersion.article.id,
          title: evaluationWithRelations.articleVersion.article.title,
          status: evaluationWithRelations.articleVersion.article.status,
          evaluationsDone:
            evaluationWithRelations.articleVersion.article.evaluationsDone,
          event: {
            id: evaluationWithRelations.articleVersion.article.event.id,
            name: evaluationWithRelations.articleVersion.article.event.name,
            evaluationType:
              evaluationWithRelations.articleVersion.article.event
                .evaluationType,
          },
        },
      },
    };
  }
  //DELETE METHODS
  //----------------------------------------------------

  async deleteEvaluation(
    evaluationId: string,
    currentUserId: string,
    currentUserRole: string
  ): Promise<DeleteEvaluationResponseDto> {
    this.validateInputs(evaluationId, currentUserId, currentUserRole);

    const context = await this.gatherValidationContext(evaluationId);

    await this.validateBusinessRules(context, currentUserId, currentUserRole);

    const previousState = this.captureCurrentState(context.article);

    await this.executeEvaluationDeletion(context);

    const updatedArticle = await this.getUpdatedArticle(context.article.id);

    return this.buildResponse(
      context.evaluation,
      updatedArticle,
      previousState
    );
  }

  private validateInputs(
    evaluationId: string,
    userId: string,
    userRole: string
  ): void {
    if (!evaluationId || !this.isValidUUID(evaluationId)) {
      throw new AppError("Valid evaluation ID is required", 400);
    }

    if (!userId || !this.isValidUUID(userId)) {
      throw new AppError("Valid user ID is required", 400);
    }

    if (
      !userRole ||
      !["STUDENT", "EVALUATOR", "COORDINATOR"].includes(userRole)
    ) {
      throw new AppError("Valid user role is required", 400);
    }
  }

  private async gatherValidationContext(
    evaluationId: string
  ): Promise<DeleteValidationContext> {
    const evaluation = await this.evaluationRepository.findByIdWithRelations(
      evaluationId
    );
    if (!evaluation) {
      throw new AppError("Evaluation not found", 404);
    }

    const articleVersion = await this.articleVersionRepository.findById(
      evaluation.articleVersionId
    );
    if (!articleVersion) {
      throw new AppError("Article version not found", 404);
    }

    const article = await this.articleRepository.findActiveById(
      articleVersion.articleId
    );
    if (!article) {
      throw new AppError("Article not found or inactive", 404);
    }

    const event = await this.eventRepository.findActiveById(article.eventId);
    if (!event) {
      throw new AppError("Event not found or inactive", 404);
    }

    return { evaluation, article, event, articleVersion };
  }

  private async validateBusinessRules(
    context: DeleteValidationContext,
    currentUserId: string,
    currentUserRole: string
  ): Promise<void> {
    this.validatePermissions(
      context.evaluation,
      currentUserId,
      currentUserRole
    );
    this.validateTiming(context.evaluation, context.article, context.event);
    this.validateVersioning(context.article, context.articleVersion);
  }

  private validatePermissions(
    evaluation: any,
    userId: string,
    userRole: string
  ): void {
    const rules = EvaluationService.BUSINESS_RULES.PERMISSIONS;

    if (userRole === "EVALUATOR") {
      if (!rules.EVALUATOR_CAN_DELETE_OWN) {
        throw new AppError(
          "Evaluators are not allowed to delete evaluations",
          403
        );
      }
      if (evaluation.userId !== userId) {
        throw new AppError("You can only delete your own evaluations", 403);
      }
    } else if (userRole === "COORDINATOR") {
      if (!rules.COORDINATOR_CAN_DELETE_ANY) {
        throw new AppError("Coordinators cannot delete evaluations", 403);
      }
    } else {
      throw new AppError("Only evaluators can delete evaluations", 403);
    }
  }

  private validateTiming(evaluation: any, article: any, event: any): void {
    const now = new Date();
    const evaluationDate = new Date(evaluation.evaluationDate);
    const rules = EvaluationService.BUSINESS_RULES.DELETE_DEADLINES;

    // Regra: Não pode deletar após evento terminar
    if (now > event.eventEndDate) {
      throw new AppError(
        "Cannot delete evaluations after event has ended",
        400
      );
    }

    const finalizedStatuses = ["APPROVED", "REJECTED", "IN_CORRECTION"];
    const isFinalized = finalizedStatuses.includes(article.status);

    if (isFinalized) {
      // Regra: 24h após finalização
      const hoursAfterEvaluation =
        (now.getTime() - evaluationDate.getTime()) / (1000 * 60 * 60);

      if (hoursAfterEvaluation > rules.FINALIZED_ARTICLES_HOURS) {
        throw new AppError(
          `Cannot delete evaluation after ${rules.FINALIZED_ARTICLES_HOURS} hours of article finalization`,
          400
        );
      }
    } else {
      // Regra: 3 dias para não finalizados
      const daysAfterEvaluation =
        (now.getTime() - evaluationDate.getTime()) / (1000 * 60 * 60 * 24);

      if (daysAfterEvaluation > rules.GENERAL_EVALUATIONS_DAYS) {
        throw new AppError(
          `Cannot delete evaluation after ${rules.GENERAL_EVALUATIONS_DAYS} days`,
          400
        );
      }
    }
  }

  private validateVersioning(article: any, articleVersion: any): void {
    // Regra: Só pode deletar da versão atual
    if (articleVersion.version !== article.currentVersion) {
      throw new AppError(
        `Cannot delete evaluation from previous version. Current: ${article.currentVersion}, Evaluation: ${articleVersion.version}`,
        400
      );
    }
  }

  private captureCurrentState(article: any) {
    const finalizedStatuses = ["APPROVED", "REJECTED", "IN_CORRECTION"];

    return {
      articleStatus: article.status,
      evaluationsDone: article.evaluationsDone,
      wasFinalized: finalizedStatuses.includes(article.status),
    };
  }

  private calculateNewArticleStatus(
    article: any,
    newEvaluationsDone: number
  ): "APPROVED" | "IN_CORRECTION" | "REJECTED" | "SUBMITTED" | "IN_EVALUATION" {
    // Regra 1: Sem avaliações = SUBMITTED
    if (newEvaluationsDone === 0) {
      return "SUBMITTED";
    }

    // Regra 2: Artigo finalizado + deleção = volta para IN_EVALUATION
    const finalizedStatuses = ["APPROVED", "REJECTED", "IN_CORRECTION"];
    if (finalizedStatuses.includes(article.status)) {
      return "IN_EVALUATION";
    }

    // Regra 3: Já estava em avaliação = mantém IN_EVALUATION
    return "IN_EVALUATION";
  }

  private async executeEvaluationDeletion(
    context: DeleteValidationContext
  ): Promise<void> {
    const { evaluation, article, articleVersion } = context;
    const rules = EvaluationService.BUSINESS_RULES.CASCADE_ACTIONS;

    await prisma.$transaction(async (tx) => {
      console.log(`🔄 Executing evaluation deletion transaction...`);

      // 1. Deletar question responses (se habilitado)
      if (rules.DELETE_QUESTION_RESPONSES) {
        await tx.questionResponse.deleteMany({
          where: {
            userId: evaluation.userId,
            articleVersionId: evaluation.articleVersionId,
          },
        });
        console.log("✅ Question responses deleted");
      }

      // 2. Deletar avaliação
      await tx.evaluation.delete({
        where: { id: evaluation.id },
      });
      console.log("✅ Evaluation deleted");

      // 3. Reset assignment status (se habilitado)
      if (rules.RESET_ASSIGNMENT_STATUS) {
        await tx.articleEvaluatorAssignment.updateMany({
          where: {
            articleId: article.id,
            userId: evaluation.userId,
          },
          data: { isCorrected: false },
        });
        console.log("✅ Assignment status reset");
      }

      // 4. Recalcular status do artigo (se habilitado)
      if (rules.RECALCULATE_ARTICLE_STATUS) {
        const newEvaluationsDone = Math.max(0, article.evaluationsDone - 1);
        const newStatus = this.calculateNewArticleStatus(
          article,
          newEvaluationsDone
        );

        await tx.article.update({
          where: { id: article.id },
          data: {
            status: newStatus,
            evaluationsDone: newEvaluationsDone,
          },
        });
        console.log(
          `✅ Article updated: ${newStatus}, evaluations: ${newEvaluationsDone}`
        );
      }
    });
  }

  private async getUpdatedArticle(articleId: string) {
    const updatedArticle = await this.articleRepository.findById(articleId);
    if (!updatedArticle) {
      throw new AppError("Article not found after deletion", 500);
    }
    return updatedArticle;
  }

  private buildResponse(
    evaluation: any,
    updatedArticle: any,
    previousState: any
  ): DeleteEvaluationResponseDto {
    const impactSummary = {
      evaluationsRemaining: updatedArticle.evaluationsDone,
      articleStatusChanged:
        previousState.articleStatus !== updatedArticle.status,
      newArticleStatus:
        previousState.articleStatus !== updatedArticle.status
          ? updatedArticle.status
          : undefined,
      wasFinalized: previousState.wasFinalized,
      requiresReassignment: updatedArticle.evaluationsDone === 0,
    };

    return {
      deletedEvaluation: {
        id: evaluation.id,
        grade: evaluation.grade,
        evaluationStatus: evaluation.status,
        userId: evaluation.userId,
        articleVersionId: evaluation.articleVersionId,
        deletedAt: new Date(),
      },
      articleUpdated: {
        id: updatedArticle.id,
        title: updatedArticle.title,
        status: updatedArticle.status,
        evaluationsDone: updatedArticle.evaluationsDone,
        currentVersion: updatedArticle.currentVersion,
      },
      impactSummary,
    };
  }

  static getBusinessRules() {
    return EvaluationService.BUSINESS_RULES;
  }

  static updateDeleteDeadlines(
    finalizedHours: number,
    generalDays: number
  ): void {
    (
      EvaluationService.BUSINESS_RULES.DELETE_DEADLINES as any
    ).FINALIZED_ARTICLES_HOURS = finalizedHours;
    (
      EvaluationService.BUSINESS_RULES.DELETE_DEADLINES as any
    ).GENERAL_EVALUATIONS_DAYS = generalDays;
  }
}
