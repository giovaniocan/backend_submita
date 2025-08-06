import { EvaluationStatus } from "@prisma/client";
import {
  Article,
  ArticleVersion,
  Evaluation,
  Event,
  User,
} from "@prisma/client";

// DTO para criação de avaliação
export interface CreateEvaluationDto {
  grade: number; // 0-10
  evaluationDescription?: string; // Comentário/descrição da avaliação (opcional)
  articleVersionId: string; // ID da versão do artigo sendo avaliada
  status: EvaluationStatus;

  checklistResponses?: Array<{
    questionId: string;
    booleanResponse?: boolean;
    scaleResponse?: number;
    textResponse?: string;
  }>;
}

// DTO para resposta de avaliação criada
export interface EvaluationResponseDto {
  id: string;
  grade: number;
  evaluationDescription?: string;
  evaluationDate: Date;
  userId: string;
  articleVersionId: string;
  createdAt: Date;
  updatedAt: Date;

  // Dados relacionados para contexto
  user: {
    id: string;
    name: string;
    email: string;
  };

  articleVersion: {
    id: string;
    version: number;
    article: {
      id: string;
      title: string;
      status: string;
      evaluationsDone: number;
      event: {
        id: string;
        name: string;
        evaluationType: string;
      };
    };
  };

  checklistResponses?: Array<{
    id: string;
    questionId: string;
    booleanResponse?: boolean;
    scaleResponse?: number;
    textResponse?: string;
    question: {
      description: string;
      type: "YES_NO" | "SCALE" | "TEXT";
      order: number;
    };
  }> | null;
}

export interface DeleteEvaluationResponseDto {
  deletedEvaluation: {
    id: string;
    grade: number;
    evaluationStatus: string;
    userId: string;
    articleVersionId: string;
    deletedAt: Date;
  };
  articleUpdated: {
    id: string;
    title: string;
    status: string;
    evaluationsDone: number;
    currentVersion: number;
  };
  impactSummary: {
    evaluationsRemaining: number;
    articleStatusChanged: boolean;
    newArticleStatus?: string;
    wasFinalized: boolean; // Se artigo estava finalizado e voltou para IN_EVALUATION
    requiresReassignment: boolean; // Se artigo ficou sem avaliações (voltou para SUBMITTED)
  };
}

export type EvaluationWithContext = Evaluation & {
  user: Pick<User, "id" | "name" | "email" | "role">;
  articleVersion: ArticleVersion & {
    article: Article & {
      event: Pick<
        Event,
        "id" | "name" | "evaluationType" | "eventStartDate" | "eventEndDate"
      >;
    };
  };
};

// DTO para resposta quando avaliação finaliza todas as avaliações do artigo
export interface EvaluationCompletedResponseDto {
  evaluation: EvaluationResponseDto;
  articleFinalized: boolean; // Se o artigo foi finalizado (todas avaliações concluídas)
  finalGrade?: number; // Nota final calculada (se finalizado)
  finalStatus: "APPROVED" | "TO_CORRECTION" | "REJECTED" | "IN_EVALUATION"; // Status final (se finalizado)
  totalEvaluations: number; // Total de avaliações necessárias
  completedEvaluations: number; // Total de avaliações já feitas
}

export interface ListEvaluationsDto {
  page?: number;
  limit?: number;
  articleId?: string; // Filtrar por artigo específico
  articleVersionId?: string; // Filtrar por versão específica do artigo
  evaluatorId?: string; // Filtrar por avaliador específico
  status?: EvaluationStatus; // Filtrar por status
  eventId?: string; // Filtrar por evento
  gradeMin?: number; // Nota mínima (0-10)
  gradeMax?: number; // Nota máxima (0-10)
  dateFrom?: Date; // Data inicial
  dateTo?: Date; // Data final
  withChecklistResponses?: boolean; // Incluir respostas de checklist
}

export interface PaginatedEvaluationsResponseDto {
  evaluations: EvaluationResponseDto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  filters: {
    articleId?: string;
    articleVersionId?: string;
    evaluatorId?: string;
    status?: string;
    eventId?: string;
    gradeRange?: { min?: number; max?: number };
    dateRange?: { from?: Date; to?: Date };
  };
  summary?: {
    averageGrade?: number;
    statusDistribution: {
      approved: number;
      toCorrection: number;
      rejected: number;
    };
    articlesCount?: number;
    evaluatorsCount?: number;
  };
}

// DTO para resposta de múltiplas avaliações
export interface EvaluationsListResponseDto {
  evaluations: EvaluationResponseDto[];
  total: number;
  articleVersion: {
    id: string;
    version: number;
    article: {
      id: string;
      title: string;
      status: string;
      event: {
        id: string;
        name: string;
        evaluationType: string;
      };
    };
  };
  averageGrade?: number;
  evaluationSummary: {
    approved: number;
    toCorrection: number;
    rejected: number;
    inProgress: number;
  };
}

// DTO para resposta quando avaliação finaliza todas as avaliações do artigo
export interface EvaluationCompletedResponseDto {
  evaluation: EvaluationResponseDto;
  articleFinalized: boolean; // Se o artigo foi finalizado (todas avaliações concluídas)
  finalGrade?: number; // Nota final calculada (se finalizado)
  finalStatus: "APPROVED" | "TO_CORRECTION" | "REJECTED" | "IN_EVALUATION"; // Status final (se finalizado)
  totalEvaluations: number; // Total de avaliações necessárias
  completedEvaluations: number; // Total de avaliações já feitas
}

export interface UpdateEvaluationDto {
  grade?: number; // 0-10
  evaluationDescription?: string;
  status?: EvaluationStatus;
}

// DTO para resposta de avaliação atualizada
export interface UpdateEvaluationResponseDto {
  evaluation: EvaluationResponseDto;
  articleUpdated: boolean; // Se o status do artigo foi recalculado
  newArticleStatus?: string; // Novo status do artigo (se mudou)
  recalculationTriggered: boolean; // Se houve recálculo
  statusChangeWindow: {
    allowed: boolean;
  };
}
