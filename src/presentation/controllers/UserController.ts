import { Request, Response, NextFunction } from "express";
import { RegisterDto } from "../../application/dtos/AuthDto";
import { UserService } from "../../application/services/UserService";
import { ApiResponse } from "../../shared/utils/response";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: RegisterDto = req.body;

      const user = await this.userService.createUser(userData);

      res
        .status(201)
        .json(ApiResponse.success(user, "User created successfully!"));
    } catch (error) {
      throw new Error("Error creating user: " + error);
    }
  }
}
