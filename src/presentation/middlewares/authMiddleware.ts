// src/presentation/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { AuthRepository } from "../../infrastructure/repositories/AuthRepository";
import { ApiResponse } from "../../shared/utils/response";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: "STUDENT" | "EVALUATOR" | "COORDINATOR";
        isFirstLogin: boolean;
      };
    }
  }
}

export class AuthMiddleware {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async authenticate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const authHeader = req.headers["authorization"];

      if (!authHeader) {
        res
          .status(401)
          .json(ApiResponse.error("Access token is required", 401));
        return;
      }

      const [bearer, token] = authHeader.split(" ");

      if (bearer !== "Bearer" || !token) {
        res
          .status(401)
          .json(
            ApiResponse.error("Invalid token format. Use: Bearer <token>", 401)
          );
        return;
      }

      const secretKey = process.env.JWT_SECRET;

      if (!secretKey) {
        res
          .status(500)
          .json(ApiResponse.error("JWT secret not configured", 500));
        return;
      }

      const decoded = jwt.verify(token, secretKey) as {
        userId: string;
        email: string;
        role: "STUDENT" | "EVALUATOR" | "COORDINATOR";
      };

      const user = await this.authRepository.findById(decoded.userId);

      if (!user || !user.isActive) {
        res
          .status(401)
          .json(ApiResponse.error("User not found or inactive", 401));
        return;
      }

      // ✅ MUDANÇA: Incluir role no request.user
      req.user = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        isFirstLogin: user.isFirstLogin,
      };

      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        res.status(401).json(ApiResponse.error("Invalid token", 401));
        return;
      }

      if (error instanceof jwt.TokenExpiredError) {
        res.status(401).json(ApiResponse.error("Token expired", 401));
        return;
      }

      res.status(500).json(ApiResponse.error("Authentication error", 500));
    }
  }

  // ✅ NOVO: Middleware para verificar role específica
  requireRole(allowedRoles: ("STUDENT" | "EVALUATOR" | "COORDINATOR")[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const user = req.user;

      if (!user) {
        res.status(401).json(ApiResponse.error("User not authenticated", 401));
        return;
      }

      if (!allowedRoles.includes(user.role)) {
        res
          .status(403)
          .json(ApiResponse.error("Insufficient permissions", 403));
        return;
      }

      next();
    };
  }

  // ✅ NOVO: Middleware apenas para coordenadores
  requireCoordinator() {
    return this.requireRole(["COORDINATOR"]);
  }

  // ✅ NOVO: Middleware apenas para avaliadores
  requireEvaluator() {
    return this.requireRole(["EVALUATOR"]);
  }

  // ✅ NOVO: Middleware para coordenadores e avaliadores
  requireStaff() {
    return this.requireRole(["COORDINATOR", "EVALUATOR"]);
  }

  // ✅ NOVO: Middleware apenas para estudantes
  requireStudent() {
    return this.requireRole(["STUDENT"]);
  }
}

const authMiddleware = new AuthMiddleware();

// Exportar middlewares prontos para uso
export const authenticate = authMiddleware.authenticate.bind(authMiddleware);
export const requireCoordinator =
  authMiddleware.requireCoordinator.bind(authMiddleware);
export const requireEvaluator =
  authMiddleware.requireEvaluator.bind(authMiddleware);
export const requireStaff = authMiddleware.requireStaff.bind(authMiddleware);
export const requireStudent =
  authMiddleware.requireStudent.bind(authMiddleware);
export const requireRole = authMiddleware.requireRole.bind(authMiddleware);
