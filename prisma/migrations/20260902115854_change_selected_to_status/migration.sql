/*
  Warnings:

  - You are about to drop the column `selected` on the `JobApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobApplication" DROP COLUMN "selected",
ADD COLUMN     "status" TEXT;
