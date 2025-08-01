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
  evaluators: EvaluatorDto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SimpleUserDto {
  id: string;
  name: string;
  email: string;
  role: string;
}
export interface StudentDto {
  id: string;
  name: string;
  email: string;
  role: string;
  articlesCount:number;
  isActive: boolean;
  isFromBpk: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface EvaluatorDto {
  id: string;
  name: string;
  email: string;
  role: string;
  evaluationsCount:number;
  isActive: boolean;
  isFromBpk: boolean;
  createdAt: Date;
  updatedAt: Date;
}
