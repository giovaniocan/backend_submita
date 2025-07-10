import { CreateUserDto } from "../../application/dtos/AuthDto";
import { User } from "@prisma/client";
//import { User } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class AuthRepository {
  async create(userData: CreateUserDto): Promise<User> {
    return await prisma.user.create({
      data: userData,
    });
  }

  // Buscar por email
  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  // Buscar por ID
  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  // Buscar usuário ativo por email
  async findActiveByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email,
        isActive: true,
      },
    });
  }

  async updatePassword(userId: string, hashedPassword: string): Promise<User> {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        isFirstLogin: false, // ✅ Marca que não é mais primeiro login
      },
    });
  }

  async updateFirstLoginToFalse(id: string) {
    await prisma.user.update({
      where: { id },
      data: { isFirstLogin: false },
    });
  }
  // Buscar usuário ativo por ID
  async findActiveById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id,
        isActive: true,
      },
    });
  }
}
