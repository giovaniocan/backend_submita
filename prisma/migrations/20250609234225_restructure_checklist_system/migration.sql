/*
  Warnings:

  - You are about to drop the column `event_checklist_id` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the `event_checklists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `checklist_id` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "event_checklists" DROP CONSTRAINT "event_checklists_event_id_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_event_checklist_id_fkey";

-- DropIndex
DROP INDEX "questions_event_checklist_id_idx";

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "checklist_id" UUID;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "event_checklist_id",
ADD COLUMN     "checklist_id" UUID NOT NULL;

-- DropTable
DROP TABLE "event_checklists";

-- CreateTable
CREATE TABLE "checklists" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(300),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "checklists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "checklists_is_active_idx" ON "checklists"("is_active");

-- CreateIndex
CREATE INDEX "events_checklist_id_idx" ON "events"("checklist_id");

-- CreateIndex
CREATE INDEX "questions_checklist_id_idx" ON "questions"("checklist_id");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_checklist_id_fkey" FOREIGN KEY ("checklist_id") REFERENCES "checklists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_checklist_id_fkey" FOREIGN KEY ("checklist_id") REFERENCES "checklists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
