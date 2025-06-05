import { AuthRepository } from "../../infrastructure/repositories/AuthRepository";
import { AppError } from "../../shared/errors/AppError";
import {
  AuthResponseDto,
  LoginDto,
  RegisterDto,
  UserResponseDto,
} from "../dtos/AuthDto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async createUser(userData: RegisterDto): Promise<UserResponseDto> {
    const existingUser = await this.authRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("User already exists with this email.");
    }

    this.validateRegisterData(userData);

    const hashedPassword = await bcrypt.hash(userData.password, 12);

    const userToCreate = {
      ...userData,
      password: hashedPassword, // Armazenar a senha criptografada
    };

    const user = await this.authRepository.create(userToCreate);

    return this.toUserResponse(user);
  }

  async login(loginData: LoginDto): Promise<AuthResponseDto> {
    if (!loginData.email || !loginData.password) {
      throw new Error("Email and password are required");
    }

    // 2. Buscar usuário por email
    const user = await this.authRepository.findByEmail(loginData.email);
    if (!user) {
      throw new Error("Invalid credentials"); // Não dizer se é email ou senha
    }

    const isPasswordValid = await bcrypt.compare(
      loginData.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const token = this.generateToken(user.id, user.email);

    return {
      user: this.toUserResponse(user),
      token,
      expiresIn: "24h", // 24 hours in seconds
    };
  }

  private generateToken(userId: number, email: string): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError("JWT secret is not defined", 500);
    }

    const payload = { userId, email };
    const token = jwt.sign(payload, secret, { expiresIn: "24h" });

    return token;
  }

  // PRIVATE - Validar dados de registro
  private validateRegisterData(userData: RegisterDto): void {
    if (!userData.name || userData.name.trim().length < 2) {
      throw new AppError("The name has to have at least 2 caracters", 400);
    }

    if (!userData.email || !this.isValidEmail(userData.email)) {
      throw new AppError("Invalid Email", 400);
    }

    if (!userData.password || userData.password.length < 6) {
      throw new AppError("Your password has to have at least 6 caracters", 400);
    }

    if (!userData.courseId || userData.courseId <= 0) {
      throw new AppError("Course is required", 400);
    }

    if (!userData.phone) {
      throw new AppError("Phone is required", 400);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private toUserResponse(user: any): UserResponseDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      courseId: user.courseId,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
