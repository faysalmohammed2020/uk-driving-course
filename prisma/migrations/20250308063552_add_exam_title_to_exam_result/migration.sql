/*
  Warnings:

  - Added the required column `examTitle` to the `ExamResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamResult" ADD COLUMN     "examTitle" TEXT NOT NULL;
