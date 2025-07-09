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

//DTO para listar avaliadores de um evento
export interface ListEventEvaluatorsDto {
  page?: number; // Página para paginação
  limit?: number; // Limite de itens por página
  search?: string; // Termo de busca opcional
  isActive?: boolean; // Filtrar por avaliadores ativos
  isFromBpk?: boolean; // Filtrar por avaliadores que são do BPK (Banco de Palestrantes e Conhecimento)
}

export interface PaginatedEventEvaluatorsDto {
  evaluators: EventEvaluatorResponseDto[]; // Array com os avaliadores da página atual
  total: number; // Total de avaliadores (sem filtro de página)
  page: number; // Página atual que foi retornada
  limit: number; // Quantos itens por página
  totalPages: number; // Total de páginas disponíveis
}
