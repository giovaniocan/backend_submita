// src/application/dtos/QuestionResponseDto.ts

// ========================================
// DTO PARA SALVAR RESPOSTAS DO CHECKLIST
// ========================================

// DTO para receber as respostas do checklist
export interface SaveChecklistResponsesDto {
  articleVersionId: string;
  responses: Array<{
    questionId: string;
    booleanResponse?: boolean; // Para perguntas YES_NO
    scaleResponse?: number; // Para perguntas SCALE (1-5)
    textResponse?: string; // Para perguntas TEXT
  }>;
}

// ========================================
// DTO PARA RESPOSTA (OUTPUT)
// ========================================

// DTO para resposta individual retornada
export interface QuestionResponseDto {
  id: string;
  questionId: string;
  articleVersionId: string;
  userId: string;
  booleanResponse?: boolean;
  scaleResponse?: number;
  textResponse?: string;
  createdAt: Date;
  updatedAt: Date;

  // Dados relacionados para contexto
  question: {
    id: string;
    description: string;
    type: "YES_NO" | "SCALE" | "TEXT";
    isRequired: boolean;
    order: number;
  };
}

// DTO para resposta de salvamento das respostas
export interface SaveChecklistResponsesResponseDto {
  saved: QuestionResponseDto[];
  errors: Array<{
    questionId: string;
    error: string;
  }>;
  summary: {
    totalProcessed: number;
    totalSaved: number;
    totalErrors: number;
  };
  validation: {
    allRequiredAnswered: boolean;
    missingRequiredQuestions: Array<{
      id: string;
      description: string;
      type: "YES_NO" | "SCALE" | "TEXT";
    }>;
  };
}

export interface CreateQuestionResponseData {
  questionId: string;
  articleVersionId: string;
  userId: string;
  booleanResponse?: boolean;
  scaleResponse?: number;
  textResponse?: string;
}

// src/application/dtos/QuestionResponseDto.ts
// ADICIONAR estes DTOs (se ainda não existirem):

// ========================================
// DTO PARA MINHAS RESPOSTAS POR ARTICLE VERSION
// ========================================
export interface MyQuestionResponsesDto {
  articleId: string;
  articleVersionId: string;
  evaluatorId: string;
  responses: Array<{
    id: string;
    questionId: string;
    question: {
      description: string;
      type: "YES_NO" | "SCALE" | "TEXT";
      isRequired: boolean;
      order: number;
    };
    booleanResponse?: boolean;
    scaleResponse?: number;
    textResponse?: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  completionStatus: {
    isComplete: boolean;
    percentage: number;
    answeredRequired: number;
    totalRequired: number;
  };
}

// ========================================
// DTO PARA RESPOSTA SIMPLIFICADA (USO INTERNO)
// ========================================
export interface SimpleQuestionResponseDto {
  id: string;
  questionId: string;
  booleanResponse?: boolean;
  scaleResponse?: number;
  textResponse?: string;
  question: {
    id: string;
    description: string;
    type: "YES_NO" | "SCALE" | "TEXT";
    isRequired: boolean;
    order: number;
  };
}

// ========================================
// DTO PARA ESTATÍSTICAS DETALHADAS
// ========================================
export interface DetailedStatsDto {
  totalAnswered: number;
  byType: {
    yesNo: number;
    scale: number;
    text: number;
  };
  byRequired: {
    required: number;
    optional: number;
  };
  lastAnswered?: Date;
}

// ========================================
// DTO PARA RESPOSTAS AGRUPADAS POR AVALIADOR
// ========================================
export interface ResponsesByEvaluatorDto {
  evaluatorId: string;
  evaluatorName: string;
  responses: QuestionResponseDto[];
}

// ========================================
// DTO PARA ESTATÍSTICAS DE COMPLETUDE ESTENDIDA
// ========================================
export interface ExtendedCompletenessStatsDto {
  totalQuestions: number;
  requiredQuestions: number;
  answeredQuestions: number;
  answeredRequired: number;
  completionPercentage: number;
  isComplete: boolean;
  missingRequired: string[]; // IDs das perguntas obrigatórias não respondidas
}

// ========================================
// DTO PARA CONTAGEM POR TIPO DE PERGUNTA
// ========================================
export interface QuestionTypeCountDto {
  yesNo: number;
  scale: number;
  text: number;
  total: number;
}
