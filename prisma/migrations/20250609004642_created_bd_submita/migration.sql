/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `course_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to drop the `courses` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `id` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "article_status" AS ENUM ('SUBMITTED', 'IN_EVALUATION', 'APPROVED', 'APPROVED_WITH_REMARKS', 'REJECTED');

-- CreateEnum
CREATE TYPE "event_status" AS ENUM ('IN_PREPARATION', 'SUBMISSIONS_OPEN', 'IN_EVALUATION', 'FINISHED');

-- CreateEnum
CREATE TYPE "evaluation_type" AS ENUM ('DIRECT', 'PAIR', 'PANEL');

-- CreateEnum
CREATE TYPE "role_type" AS ENUM ('STUDENT', 'EVALUATOR', 'COORDINATOR');

-- CreateEnum
CREATE TYPE "question_type" AS ENUM ('YES_NO', 'SCALE', 'TEXT');

-- DropIndex
DROP INDEX "users_phone_key";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "course_id",
DROP COLUMN "phone",
ADD COLUMN     "birth_date" DATE,
ADD COLUMN     "is_from_bpk" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(300),
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "courses";

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL,
    "name" "role_type" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "banner" VARCHAR(200),
    "description" VARCHAR(300),
    "event_start_date" TIMESTAMP(3) NOT NULL,
    "event_end_date" TIMESTAMP(3) NOT NULL,
    "submission_start_date" TIMESTAMP(3) NOT NULL,
    "submission_end_date" TIMESTAMP(3) NOT NULL,
    "status" "event_status" NOT NULL DEFAULT 'IN_PREPARATION',
    "evaluation_type" "evaluation_type" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "summary" VARCHAR(300) NOT NULL,
    "thematic_area" VARCHAR(150),
    "current_version" INTEGER NOT NULL DEFAULT 1,
    "evaluations_done" INTEGER NOT NULL DEFAULT 0,
    "status" "article_status" NOT NULL DEFAULT 'SUBMITTED',
    "event_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_versions" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "pdf_path" VARCHAR(200) NOT NULL,
    "article_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "article_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_keywords" (
    "id" UUID NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "article_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "article_keywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "related_authors" (
    "id" UUID NOT NULL,
    "co_author_name" VARCHAR(100) NOT NULL,
    "article_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "related_authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evaluations" (
    "id" UUID NOT NULL,
    "grade" SMALLINT NOT NULL,
    "evaluation_description" TEXT,
    "evaluation_date" TIMESTAMP(3) NOT NULL,
    "user_id" UUID NOT NULL,
    "article_version_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_evaluators" (
    "id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_evaluators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_evaluator_assignments" (
    "id" UUID NOT NULL,
    "event_evaluator_id" UUID NOT NULL,
    "article_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "is_corrected" BOOLEAN NOT NULL DEFAULT false,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "article_evaluator_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_checklists" (
    "id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_checklists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" UUID NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "type" "question_type" NOT NULL DEFAULT 'YES_NO',
    "is_required" BOOLEAN NOT NULL DEFAULT true,
    "event_checklist_id" UUID NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_responses" (
    "id" UUID NOT NULL,
    "question_id" UUID NOT NULL,
    "article_version_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "boolean_response" BOOLEAN,
    "scale_response" SMALLINT,
    "text_response" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "question_responses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE INDEX "user_roles_user_id_idx" ON "user_roles"("user_id");

-- CreateIndex
CREATE INDEX "user_roles_role_id_idx" ON "user_roles"("role_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_user_id_role_id_key" ON "user_roles"("user_id", "role_id");

-- CreateIndex
CREATE INDEX "events_status_idx" ON "events"("status");

-- CreateIndex
CREATE INDEX "events_is_active_idx" ON "events"("is_active");

-- CreateIndex
CREATE INDEX "events_submission_start_date_submission_end_date_idx" ON "events"("submission_start_date", "submission_end_date");

-- CreateIndex
CREATE INDEX "articles_event_id_idx" ON "articles"("event_id");

-- CreateIndex
CREATE INDEX "articles_user_id_idx" ON "articles"("user_id");

-- CreateIndex
CREATE INDEX "articles_status_idx" ON "articles"("status");

-- CreateIndex
CREATE INDEX "articles_is_active_idx" ON "articles"("is_active");

-- CreateIndex
CREATE INDEX "article_versions_article_id_idx" ON "article_versions"("article_id");

-- CreateIndex
CREATE UNIQUE INDEX "article_versions_article_id_version_key" ON "article_versions"("article_id", "version");

-- CreateIndex
CREATE INDEX "article_keywords_article_id_idx" ON "article_keywords"("article_id");

-- CreateIndex
CREATE INDEX "related_authors_article_id_idx" ON "related_authors"("article_id");

-- CreateIndex
CREATE INDEX "evaluations_user_id_idx" ON "evaluations"("user_id");

-- CreateIndex
CREATE INDEX "evaluations_article_version_id_idx" ON "evaluations"("article_version_id");

-- CreateIndex
CREATE INDEX "evaluations_evaluation_date_idx" ON "evaluations"("evaluation_date");

-- CreateIndex
CREATE UNIQUE INDEX "evaluations_user_id_article_version_id_key" ON "evaluations"("user_id", "article_version_id");

-- CreateIndex
CREATE INDEX "event_evaluators_event_id_idx" ON "event_evaluators"("event_id");

-- CreateIndex
CREATE INDEX "event_evaluators_user_id_idx" ON "event_evaluators"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "event_evaluators_event_id_user_id_key" ON "event_evaluators"("event_id", "user_id");

-- CreateIndex
CREATE INDEX "article_evaluator_assignments_event_evaluator_id_idx" ON "article_evaluator_assignments"("event_evaluator_id");

-- CreateIndex
CREATE INDEX "article_evaluator_assignments_article_id_idx" ON "article_evaluator_assignments"("article_id");

-- CreateIndex
CREATE INDEX "article_evaluator_assignments_user_id_idx" ON "article_evaluator_assignments"("user_id");

-- CreateIndex
CREATE INDEX "article_evaluator_assignments_is_corrected_idx" ON "article_evaluator_assignments"("is_corrected");

-- CreateIndex
CREATE UNIQUE INDEX "article_evaluator_assignments_event_evaluator_id_article_id_key" ON "article_evaluator_assignments"("event_evaluator_id", "article_id");

-- CreateIndex
CREATE INDEX "event_checklists_event_id_idx" ON "event_checklists"("event_id");

-- CreateIndex
CREATE INDEX "event_checklists_is_active_idx" ON "event_checklists"("is_active");

-- CreateIndex
CREATE INDEX "questions_event_checklist_id_idx" ON "questions"("event_checklist_id");

-- CreateIndex
CREATE INDEX "questions_order_idx" ON "questions"("order");

-- CreateIndex
CREATE INDEX "questions_is_active_idx" ON "questions"("is_active");

-- CreateIndex
CREATE INDEX "question_responses_question_id_idx" ON "question_responses"("question_id");

-- CreateIndex
CREATE INDEX "question_responses_article_version_id_idx" ON "question_responses"("article_version_id");

-- CreateIndex
CREATE INDEX "question_responses_user_id_idx" ON "question_responses"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "question_responses_question_id_article_version_id_user_id_key" ON "question_responses"("question_id", "article_version_id", "user_id");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_is_active_idx" ON "users"("is_active");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_versions" ADD CONSTRAINT "article_versions_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_keywords" ADD CONSTRAINT "article_keywords_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "related_authors" ADD CONSTRAINT "related_authors_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_article_version_id_fkey" FOREIGN KEY ("article_version_id") REFERENCES "article_versions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_evaluators" ADD CONSTRAINT "event_evaluators_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_evaluators" ADD CONSTRAINT "event_evaluators_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_evaluator_assignments" ADD CONSTRAINT "article_evaluator_assignments_event_evaluator_id_fkey" FOREIGN KEY ("event_evaluator_id") REFERENCES "event_evaluators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_evaluator_assignments" ADD CONSTRAINT "article_evaluator_assignments_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_evaluator_assignments" ADD CONSTRAINT "article_evaluator_assignments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_checklists" ADD CONSTRAINT "event_checklists_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_event_checklist_id_fkey" FOREIGN KEY ("event_checklist_id") REFERENCES "event_checklists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_responses" ADD CONSTRAINT "question_responses_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_responses" ADD CONSTRAINT "question_responses_article_version_id_fkey" FOREIGN KEY ("article_version_id") REFERENCES "article_versions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_responses" ADD CONSTRAINT "question_responses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
