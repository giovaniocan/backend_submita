import { Request, Response, NextFunction } from "express";
import { LoginDto, RegisterDto } from "../../application/dtos/AuthDto";
import { AuthService } from "../../application/services/AuthService";
import { ApiResponse } from "../../shared/utils/response";
import { AppError } from "../../shared/errors/AppError";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  // ✅ CORREÇÃO: Promise<void> + return statements
  async getProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = req.user;

      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return; // ✅ IMPORTANTE: Para execução aqui
      }

      res
        .status(200)
        .json(ApiResponse.success(user, "Profile retrieved successfully!"));
    } catch (error) {
      console.error("❌ Profile error:", error);
      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userData: RegisterDto = req.body;

      const user = await this.authService.createUser(userData);

      res
        .status(201)
        .json(ApiResponse.success(user, "User created successfully!"));
    } catch (error) {
      // ✅ CORREÇÃO: Tratamento adequado de erros
      if (error instanceof AppError) {
        res
          .status(error.statusCode)
          .json(ApiResponse.error(error.message, error.statusCode));
        return; // ✅ IMPORTANTE: Para execução aqui
      }

      console.error("❌ Register error:", error);
      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const loginData: LoginDto = req.body;

      const result = await this.authService.login(loginData);

      res.status(200).json(ApiResponse.success(result, "Login successful!"));
    } catch (error) {
      // 4. Tratar erros
      if (error instanceof AppError) {
        return res
          .status(error.statusCode)
          .json(ApiResponse.error(error.message, error.statusCode));
      }

      console.error("❌ Login error:", error);
      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }
}
