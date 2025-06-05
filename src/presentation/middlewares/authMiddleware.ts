import { Request, Response, NextFunction } from "express";
import { AuthRepository } from "../../infrastructure/repositories/AuthRepository";
import { ApiResponse } from "../../shared/utils/response";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        name: string;
      };
    }
  }
}

export class AuthMiddleware {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  // ✅ CORREÇÃO: Promise<void> + return statements
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
        return; // ✅ IMPORTANTE: Para execução aqui
      }

      const [bearer, token] = authHeader.split(" ");

      if (bearer !== "Bearer" || !token) {
        res
          .status(401)
          .json(
            ApiResponse.error("Invalid token format. Use: Bearer <token>", 401)
          );
        return; // ✅ IMPORTANTE: Para execução aqui
      }

      const secretKey = process.env.JWT_SECRET;

      if (!secretKey) {
        res
          .status(500)
          .json(ApiResponse.error("JWT secret not configured", 500));
        return; // ✅ IMPORTANTE: Para execução aqui
      }

      const decoded = jwt.verify(token, secretKey) as {
        userId: number;
        email: string;
      };

      const user = await this.authRepository.findById(decoded.userId);

      if (!user || !user.isActive) {
        res
          .status(401)
          .json(ApiResponse.error("User not found or inactive", 401));
        return; // ✅ IMPORTANTE: Para execução aqui
      }

      req.user = {
        id: user.id,
        email: user.email,
        name: user.name,
      };

      next(); // ✅ Continua para o próximo middleware/controller
    } catch (error) {
      console.error("❌ Auth middleware error:", error);

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
}

const authMiddleware = new AuthMiddleware();

export const authenticate = authMiddleware.authenticate.bind(authMiddleware);
