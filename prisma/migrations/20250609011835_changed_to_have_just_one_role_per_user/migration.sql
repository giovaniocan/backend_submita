/*
  Warnings:

  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "role_type" NOT NULL DEFAULT 'STUDENT';

-- DropTable
DROP TABLE "roles";

-- DropTable
DROP TABLE "user_roles";

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");
