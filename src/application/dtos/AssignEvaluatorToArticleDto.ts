// src/application/dtos/AssignEvaluatorsDto.ts

// DTO para atribuir avaliadores a um artigo
export interface AssignEvaluatorsToArticleDto {
  evaluatorIds: string[]; // Array de IDs dos avaliadores
}

// DTO para resposta da atribuição
export interface AssignEvaluatorsResponseDto {
  articleId: string;
  eventId: string;
  evaluationType: "DIRECT" | "PAIR" | "PANEL";
  maxEvaluators: number;
  assignedEvaluators: AssignedEvaluatorDto[];
  summary: {
    totalRequested: number;
    totalAssigned: number;
    totalSkipped: number;
    totalErrors: number;
  };
  skipped: string[]; // IDs que já estavam atribuídos
  errors: string[]; // IDs que deram erro
}

// DTO para um avaliador atribuído
export interface AssignedEvaluatorDto {
  id: string; // ID do ArticleEvaluatorAssignment
  eventEvaluatorId: string;
  articleId: string;
  userId: string;
  isCorrected: boolean;
  assignedAt: Date;
}
