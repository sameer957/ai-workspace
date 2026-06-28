/*
  Warnings:

  - Added the required column `operation` to the `Tools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tools" ADD COLUMN     "error" TEXT,
ADD COLUMN     "operation" TEXT NOT NULL,
ADD COLUMN     "result" JSONB;
