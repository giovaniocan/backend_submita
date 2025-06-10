// src/application/dtos/UserDto.ts

// DTO para criação de usuário
export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role?: "STUDENT" | "EVALUATOR" | "COORDINATOR"; // ✅ MUDANÇA: Role opcional (padrão STUDENT)
  isFromBpk?: boolean;
}

// DTO para atualização de usuário
export interface UpdateUserDto {
  name?: string;
  email?: string;
  role?: "STUDENT" | "EVALUATOR" | "COORDINATOR"; // ✅ MUDANÇA: Role direta
  isFromBpk?: boolean;
  isFirstLogin?: boolean;
}

// DTO para atualização de senha
export interface UpdatePasswordDto {
  currentPassword: string;
  newPassword: string;
}

// DTO para resposta (sem senha!)
export interface UserResponseDto {
  id: string;
  name: string;
  email: string;
  role: "STUDENT" | "EVALUATOR" | "COORDINATOR"; // ✅ MUDANÇA: Role direta
  isActive: boolean;
  isFromBpk: boolean;
  isFirstLogin?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// DTO para listagem com filtros
export interface ListUsersDto {
  page?: number;
  limit?: number;
  search?: string;
  isActive?: boolean;
  isFromBpk?: boolean;
  isFirstLogin?: boolean;
  role?: "STUDENT" | "EVALUATOR" | "COORDINATOR"; // ✅ MUDANÇA: Filtro por role direta
}

// DTO para login (mantendo compatibilidade)
export interface LoginDto {
  email: string;
  password: string;
}

// DTO para resposta de autenticação
export interface AuthResponseDto {
  user: UserResponseDto;
  token: string;
  expiresIn: string;
  isFirstLogin: boolean; // ✅ MUDANÇA: Indica se é o primeiro login
}

// DTO para payload do JWT
export interface JwtPayloadDto {
  userId: string;
  email: string;
  role: "STUDENT" | "EVALUATOR" | "COORDINATOR"; // ✅ MUDANÇA: Role no token
}

// DTO para alteração de senha
export interface ChangePasswordDto {
  currentPassword?: string; // Opcional para primeiro login
  newPassword: string;
  confirmPassword: string;
}

// ✅ NOVO: DTO para resposta da mudança de senha
export interface ChangePasswordResponseDto {
  message: string;
  wasFirstLogin: boolean; // Para saber se era primeiro login
}
