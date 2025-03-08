/*
  Warnings:

  - Made the column `userId` on table `ExamResult` required. This step will fail if there are existing NULL values in that column.
  - Made the column `examId` on table `ExamResult` required. This step will fail if there are existing NULL values in that column.
  - Made the column `score` on table `ExamResult` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total` on table `ExamResult` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `ExamResult` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `ExamResult` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `ExamResult` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ExamResult" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "examId" SET NOT NULL,
ALTER COLUMN "score" SET NOT NULL,
ALTER COLUMN "total" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
