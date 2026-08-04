/*
  Warnings:

  - A unique constraint covering the columns `[claimId]` on the table `ExpenseClaim` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ExpenseClaim" ALTER COLUMN "claimId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ExpenseClaim_claimId_key" ON "ExpenseClaim"("claimId");
