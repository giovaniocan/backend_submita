-- AlterEnum
ALTER TYPE "article_status" ADD VALUE 'APPROVED_WITH_REMARKS';

-- AlterTable
ALTER TABLE "articles" ALTER COLUMN "summary" SET DATA TYPE VARCHAR(1000);
