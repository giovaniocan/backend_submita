import { AuthRepository } from "../../infrastructure/repositories/AuthRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  CreateUserDto,
  LoginDto,
  UserResponseDto,
  AuthResponseDto,
  ChangePasswordDto,
  ChangePasswordResponseDto,
} from "../dtos/AuthDto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
//import { User } from "@prisma/client";

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  // ========================================
  // REGISTRO
  // ========================================
  async createUser(userData: CreateUserDto): Promise<UserResponseDto> {
    // Verificar se email já existe
    const existingUser = await this.authRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new AppError("Email already in use", 409);
    }

    // Validar dados
    this.validateCreateData(userData);

    // Hash da senha
    const hashedPassword = await bcrypt.hash(userData.password, 12);

    let isFirstLogin = false;

    // Se role for EVALUATOR ou COORDINATOR, marcar como primeiro login
    if (userData.role === "EVALUATOR" || userData.role === "COORDINATOR") {
      isFirstLogin = true;
    }

    // Criar usuário com role padrão STUDENT
    const userToCreate = {
      ...userData,
      password: hashedPassword,
      role: userData.role || ("STUDENT" as const),
      isFirstLogin,
    };

    const user = await this.authRepository.create(userToCreate);
    return this.toUserResponse(user);
  }

  // ========================================
  // LOGIN
  // ========================================
  async login(loginData: LoginDto): Promise<AuthResponseDto> {
    if (!loginData.email || !loginData.password) {
      throw new AppError("Email and password are required", 400);
    }

    // Buscar usuário ativo por email
    const user = await this.authRepository.findActiveByEmail(loginData.email);
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    // Verificar senha
    const isPasswordValid = await bcrypt.compare(
      loginData.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", 401);
    }

    // Gerar token
    const token = this.generateToken(user.id, user.email, user.role);

    return {
      user: this.toUserResponse(user),
      token,
      expiresIn: "7d",
      isFirstLogin: user.isFirstLogin,
    };
  }

  // ========================================
  // PERFIL
  // ========================================
  async getProfile(userId: string): Promise<UserResponseDto> {
    const user = await this.authRepository.findActiveById(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }

    return this.toUserResponse(user);
  }

  async changePassword(
    userId: string,
    passwordData: ChangePasswordDto
  ): Promise<ChangePasswordResponseDto> {
    // 1. Validar dados de entrada
    this.validateChangePasswordData(passwordData);

    // 2. Buscar usuário
    const user = await this.authRepository.findActiveById(userId);
    if (!user) {
      throw new AppError("User not found", 404);
    }

    if (!user.isFirstLogin) {
      if (!passwordData.currentPassword) {
        throw new AppError("Current password is required", 400);
      }

      const isCurrentPasswordValid = await bcrypt.compare(
        passwordData.currentPassword,
        user.password
      );
      if (!isCurrentPasswordValid) {
        throw new AppError("Current password is incorrect", 400);
      }
    }

    // 4. Hash da nova senha
    const hashedNewPassword = await bcrypt.hash(passwordData.newPassword, 12);

    // 5. Atualizar senha no banco (também marca isFirstLogin = false)
    await this.authRepository.updatePassword(userId, hashedNewPassword);

    // 6. Retornar resposta adequada
    const wasFirstLogin = user.isFirstLogin;

    const currentUser = await this.authRepository.findActiveByEmail(user.email);

    if (currentUser && currentUser.isFirstLogin === true) {
      await this.authRepository.updateFirstLoginToFalse(currentUser.id);
    }

    return {
      message: wasFirstLogin
        ? "Password set successfully! You can now use the system normally."
        : "Password changed successfully!",
      wasFirstLogin,
    };
  }

  // ========================================
  // MÉTODOS PRIVADOS
  // ========================================
  private validateCreateData(userData: CreateUserDto): void {
    if (!userData.name || userData.name.trim().length < 2) {
      throw new AppError("Name must have at least 2 characters", 400);
    }

    if (!userData.email || !this.isValidEmail(userData.email)) {
      throw new AppError("Invalid email format", 400);
    }

    if (!userData.password || userData.password.length < 6) {
      throw new AppError("Password must have at least 6 characters", 400);
    }

    // Validar role se fornecida
    if (
      userData.role &&
      !["STUDENT", "EVALUATOR", "COORDINATOR"].includes(userData.role)
    ) {
      throw new AppError("Invalid role", 400);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private generateToken(userId: string, email: string, role: string): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError("JWT secret is not defined", 500);
    }

    const payload = { userId, email, role };
    return jwt.sign(payload, secret, { expiresIn: "7d" });
  }

  private toUserResponse(user: User): UserResponseDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      isFromBpk: user.isFromBpk,
      isFirstLogin: user.isFirstLogin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  private validateChangePasswordData(passwordData: ChangePasswordDto): void {
    // Validar nova senha
    if (!passwordData.newPassword || passwordData.newPassword.length < 6) {
      throw new AppError("New password must have at least 6 characters", 400);
    }

    // Validar confirmação
    if (!passwordData.confirmPassword) {
      throw new AppError("Password confirmation is required", 400);
    }

    // Verificar se senhas coincidem
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      throw new AppError("New password and confirmation do not match", 400);
    }

    // Verificar se nova senha é diferente da atual (se fornecida)
    if (
      passwordData.currentPassword &&
      passwordData.currentPassword === passwordData.newPassword
    ) {
      throw new AppError(
        "New password must be different from current password",
        400
      );
    }

    // Validar força da senha (opcional - pode personalizar)
    if (passwordData.newPassword.length > 50) {
      throw new AppError("Password cannot exceed 50 characters", 400);
    }
  }
}
