// src/application/dtos/QuestionDto.ts

// DTO para criação de uma pergunta individual
export interface QuestionDto {
  description: string;
  type: "YES_NO" | "SCALE" | "TEXT";
  isRequired?: boolean;
  order?: number;
}

// DTO para criação de múltiplas perguntas
export interface CreateQuestionsDto {
  questions: QuestionDto[];
}

// DTO para criação de pergunta individual (compatibilidade)
export interface CreateQuestionDto {
  description: string;
  type: "YES_NO" | "SCALE" | "TEXT";
  isRequired?: boolean;
  order?: number;
  checklistId: string;
}

// DTO para resposta de pergunta
export interface QuestionResponseDto {
  id: string;
  description: string;
  type: "YES_NO" | "SCALE" | "TEXT";
  isRequired: boolean;
  order: number;
  isActive: boolean;
  checklistId: string;
  createdAt: Date;
  updatedAt: Date;
  checklist?: {
    id: string;
    name: string;
  };
}

// DTO para resposta de múltiplas perguntas criadas
export interface CreateQuestionsResponseDto {
  added: QuestionResponseDto[];
  summary: {
    totalProcessed: number;
    totalAdded: number;
    totalErrors: number;
  };
}
