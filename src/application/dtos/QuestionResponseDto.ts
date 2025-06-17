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

export interface UpdateMultipleQuestionResponsesDto {
  responses: Array<{
    responseId: string;
    booleanResponse?: boolean;
    scaleResponse?: number;
    textResponse?: string;
  }>;
}
export interface UpdateMultipleQuestionResponsesResponseDto {
  updated: Array<{
    id: string;
    questionId: string;
    booleanResponse?: boolean;
    scaleResponse?: number;
    textResponse?: string;
    updatedAt: Date;
    question: {
      description: string;
      type: "YES_NO" | "SCALE" | "TEXT";
      order: number;
    };
  }>;
  errors: Array<{
    responseId: string;
    error: string;
  }>;
  summary: {
    totalProcessed: number;
    totalUpdated: number;
    totalErrors: number;
  };
}

export interface DeleteQuestionResponseDto {
  deletedResponse: {
    id: string;
    questionId: string;
    articleVersionId: string;
    deletedAt: Date;
    question: {
      description: string;
      type: "YES_NO" | "SCALE" | "TEXT";
      order: number;
      isRequired: boolean;
    };
  };
  message: string;
}

export interface ClearAllChecklistResponsesDto {
  clearedResponses: {
    total: number;
    required: number;
    optional: number;
    articleVersionId: string;
    clearedAt: Date;
  };
  resetInfo: {
    articleTitle: string;
    articleVersion: number;
    eventName: string;
    checklistName?: string;
  };
  message: string;
}
