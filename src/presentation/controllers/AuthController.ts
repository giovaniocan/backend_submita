import { Request, Response, NextFunction } from "express";
import { RegisterDto } from "../../application/dtos/AuthDto";
import { AuthService } from "../../application/services/AuthService";
import { ApiResponse } from "../../shared/utils/response";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: RegisterDto = req.body;

      const user = await this.authService.createUser(userData);

      res
        .status(201)
        .json(ApiResponse.success(user, "User created successfully!"));
    } catch (error) {
      throw new Error("Error creating user: " + error);
    }
  }
}
