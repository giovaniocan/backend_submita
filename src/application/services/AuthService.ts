import { AuthRepository } from "../../infrastructure/repositories/AuthRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  CreateUserDto,
  LoginDto,
  UserResponseDto,
  AuthResponseDto,
} from "../dtos/AuthDto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../generated/prisma";

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

    // Atualizar isFirstLogin se for o primeiro login
    if (user.isFirstLogin === true) {
      await this.authRepository.updateFirstLoginToFalse(user.id);
    }

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
}
