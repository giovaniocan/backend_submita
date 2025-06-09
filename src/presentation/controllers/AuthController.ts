// src/presentation/controllers/AuthController.ts
import { Request, Response, NextFunction } from "express";
import { CreateUserDto, LoginDto } from "../../application/dtos/AuthDto";
import { AuthService } from "../../application/services/AuthService";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  // ========================================
  // REGISTRO
  // ========================================
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userData: CreateUserDto = req.body;
      const user = await this.authService.createUser(userData);

      res
        .status(201)
        .json(ApiResponse.success(user, "User registered successfully!"));
    } catch (error) {
      if (error instanceof AppError) {
        res
          .status(error.statusCode)
          .json(ApiResponse.error(error.message, error.statusCode));
        return;
      }

      console.error("❌ Register error:", error);
      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }

  // ========================================
  // LOGIN
  // ========================================
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const loginData: LoginDto = req.body;
      const result = await this.authService.login(loginData);

      res.status(200).json(ApiResponse.success(result, "Login successful!"));
    } catch (error) {
      if (error instanceof AppError) {
        res
          .status(error.statusCode)
          .json(ApiResponse.error(error.message, error.statusCode));
        return;
      }

      console.error("❌ Login error:", error);
      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }

  // ========================================
  // PERFIL
  // ========================================
  async getProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;

      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      // Buscar dados atualizados do usuário
      const profile = await this.authService.getProfile(user.id);

      res
        .status(200)
        .json(ApiResponse.success(profile, "Profile retrieved successfully!"));
    } catch (error) {
      if (error instanceof AppError) {
        res
          .status(error.statusCode)
          .json(ApiResponse.error(error.message, error.statusCode));
        return;
      }

      console.error("❌ Profile error:", error);
      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }
}
