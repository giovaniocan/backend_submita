// src/application/dtos/EventEvaluatorDto.ts

// DTO para adicionar avaliadores ao evento (1 ou múltiplos)
export interface AddEvaluatorsToEventDto {
  userIds: string[];
}

// DTO para resposta de avaliador do evento
export interface EventEvaluatorResponseDto {
  id: string;
  eventId: string;
  userId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    isActive: boolean;
  };
  event: {
    id: string;
    name: string;
    status: string;
  };
}

// DTO para resposta de adição de múltiplos avaliadores
export interface AddEvaluatorsResponseDto {
  added: EventEvaluatorResponseDto[];
  skipped: string[]; // IDs que já existiam
  errors: string[]; // IDs que deram erro
  summary: {
    totalProcessed: number;
    totalAdded: number;
    totalSkipped: number;
    totalErrors: number;
  };
}
