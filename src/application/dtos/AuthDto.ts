// DTO para registrar usuário
export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  phone?: string;
  courseId: number;
}

// DTO para resposta (sem senha!)
export interface UserResponseDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  courseId: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// DTOs para futuro login JWT:
export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponseDto {
  user: UserResponseDto;
  token: string; // JWT token
  expiresIn: string; // Ex: "24h"
}
