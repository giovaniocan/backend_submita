import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { AppError } from "../../shared/errors/AppError";
import { RegisterDto, UserResponseDto } from "../dtos/AuthDto";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData: RegisterDto): Promise<UserResponseDto> {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("User already exists with this email.");
    }

    this.validateRegisterData(userData);

    console.log("🔐 Senha ainda não criptografada:", userData.password);

    const user = await this.userRepository.create(userData);

    return this.toUserResponse(user);
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
