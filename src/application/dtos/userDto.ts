// src/application/dtos/UserDto.ts

// DTO para listar avaliadores disponíveis
export interface ListAvailableEvaluatorsDto {
  page?: number;
  limit?: number;
  search?: string;
  isActive?: boolean;
}

// DTO para resposta de usuário avaliador
export interface EvaluatorResponseDto {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  isFromBpk: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// DTO para resposta paginada de avaliadores
export interface PaginatedEvaluatorsDto {
  evaluators: EvaluatorResponseDto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
