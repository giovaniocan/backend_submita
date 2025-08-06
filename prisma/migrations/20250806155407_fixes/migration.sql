/*
  Warnings:

  - The values [IN_CORRECTION] on the enum `article_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `summary` on the `articles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1000)` to `VarChar(300)`.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "article_status_new" AS ENUM ('SUBMITTED', 'IN_EVALUATION', 'APPROVED', 'TO_CORRECTION', 'REJECTED', 'APPROVED_WITH_REMARKS');
ALTER TABLE "articles" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "articles" ALTER COLUMN "status" TYPE "article_status_new" USING ("status"::text::"article_status_new");
ALTER TYPE "article_status" RENAME TO "article_status_old";
ALTER TYPE "article_status_new" RENAME TO "article_status";
DROP TYPE "article_status_old";
ALTER TABLE "articles" ALTER COLUMN "status" SET DEFAULT 'SUBMITTED';
COMMIT;

-- AlterTable
ALTER TABLE "articles" ALTER COLUMN "summary" SET DATA TYPE VARCHAR(300);
