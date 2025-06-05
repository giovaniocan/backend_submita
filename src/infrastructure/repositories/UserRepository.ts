import { RegisterDto } from "../../application/dtos/AuthDto";
import { User } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";

export class UserRepository {
  async create(userData: RegisterDto): Promise<User> {
    return await prisma.user.create({
      data: {
        ...userData,
        phone: userData.phone ?? "", // Ensure phone is always a string
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}
