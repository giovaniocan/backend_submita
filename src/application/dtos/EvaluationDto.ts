// src/application/dtos/EvaluationDto.ts

// DTO para criação de avaliação
export interface CreateEvaluationDto {
  grade: number; // 0-10
  evaluationDescription?: string; // Comentário/descrição da avaliação (opcional)
  articleVersionId: string; // ID da versão do artigo sendo avaliada
  status: "TO_CORRECTION" | "APPROVED" | "REJECTED";
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

// DTO para resposta quando avaliação finaliza todas as avaliações do artigo
export interface EvaluationCompletedResponseDto {
  evaluation: EvaluationResponseDto;
  articleFinalized: boolean; // Se o artigo foi finalizado (todas avaliações concluídas)
  finalGrade?: number; // Nota final calculada (se finalizado)
  finalStatus: "APPROVED" | "IN_CORRECTION" | "REJECTED" | "IN_EVALUATION"; // Status final (se finalizado)
  totalEvaluations: number; // Total de avaliações necessárias
  completedEvaluations: number; // Total de avaliações já feitas
}
