import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();

//router.post("/login", authController.login);

router.post("/user", userController.createUser.bind(userController));

export { router as userRoutes };
