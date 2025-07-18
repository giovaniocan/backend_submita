// src/presentation/controllers/AuthController.ts
import { Request, Response, NextFunction } from "express";
import {
  ChangePasswordDto,
  CreateUserDto,
  LoginDto,
} from "../../application/dtos/AuthDto";
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

      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }

  // ========================================
  // ALTERAR SENHA
  // ========================================

  async changePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // 1. Verificar se usuário está autenticado
      const user = req.user;
      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      // 2. Extrair dados do body
      const passwordData: ChangePasswordDto = req.body;

      // 3. Validação básica no controller
      if (!passwordData.newPassword || !passwordData.confirmPassword) {
        res
          .status(400)
          .json(
            ApiResponse.error("New password and confirmation are required", 400)
          );
        return;
      }

      // 4. Chamar service para mudança de senha
      const result = await this.authService.changePassword(
        user.id,
        passwordData
      );

      // 5. Resposta de sucesso
      res.status(200).json(ApiResponse.success(result, result.message));
    } catch (error) {
      // 6. Tratamento de erros
      if (error instanceof AppError) {
        res
          .status(error.statusCode)
          .json(ApiResponse.error(error.message, error.statusCode));
        return;
      }

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

      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }

  // ========================================
  // CRIAR AVALIADOR (Apenas Coordenadores)
  // ========================================
  async registerEvaluator(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // Verificar se o usuário logado é coordenador
      const currentUser = req.user;
      if (!currentUser || currentUser.role !== "COORDINATOR") {
        res
          .status(403)
          .json(
            ApiResponse.error("Only coordinators can create evaluators", 403)
          );
        return;
      }

      // Validar dados recebidos
      const { name, email, password, isFromBpk } = req.body;

      if (!name || !email || !password) {
        res
          .status(400)
          .json(
            ApiResponse.error("Name, email and password are required", 400)
          );
        return;
      }

      // Criar dados do avaliador
      const evaluatorData: CreateUserDto = {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password,
        role: "EVALUATOR", // Força o role como EVALUATOR
        isFromBpk: isFromBpk !== undefined ? isFromBpk : true,
      };

      // Criar o avaliador usando o serviço
      const evaluator = await this.authService.createUser(evaluatorData);

      res
        .status(201)
        .json(
          ApiResponse.success(
            evaluator,
            `Evaluator '${evaluator.name}' created successfully!`
          )
        );
    } catch (error) {
      if (error instanceof AppError) {
        res
          .status(error.statusCode)
          .json(ApiResponse.error(error.message, error.statusCode));
        return;
      }

      res.status(500).json(ApiResponse.error("Internal server error", 500));
    }
  }
}
