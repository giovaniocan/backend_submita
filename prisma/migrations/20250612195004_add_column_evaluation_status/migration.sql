/*
  Warnings:

  - The values [APPROVED_WITH_REMARKS] on the enum `article_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "evaluation_status" AS ENUM ('APPROVED', 'TO_CORRECTION', 'REJECTED');

-- AlterEnum
BEGIN;
CREATE TYPE "article_status_new" AS ENUM ('SUBMITTED', 'IN_EVALUATION', 'APPROVED', 'IN_CORRECTION', 'REJECTED');
ALTER TABLE "articles" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "articles" ALTER COLUMN "status" TYPE "article_status_new" USING ("status"::text::"article_status_new");
ALTER TYPE "article_status" RENAME TO "article_status_old";
ALTER TYPE "article_status_new" RENAME TO "article_status";
DROP TYPE "article_status_old";
ALTER TABLE "articles" ALTER COLUMN "status" SET DEFAULT 'SUBMITTED';
COMMIT;

-- AlterTable
ALTER TABLE "evaluations" ADD COLUMN     "status" "evaluation_status" NOT NULL DEFAULT 'TO_CORRECTION';
