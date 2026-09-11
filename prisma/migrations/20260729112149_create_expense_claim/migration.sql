/*
  Warnings:

  - The primary key for the `ExpenseClaim` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ExpenseClaim" DROP CONSTRAINT "ExpenseClaim_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "claimId" DROP DEFAULT,
ADD CONSTRAINT "ExpenseClaim_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExpenseClaim_claimId_seq";
