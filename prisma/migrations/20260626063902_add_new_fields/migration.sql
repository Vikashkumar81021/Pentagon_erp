/*
  Warnings:

  - The `status` column on the `SalesVisit` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "SalesVisit" ADD COLUMN     "basic_amount" INTEGER,
ADD COLUMN     "closure_date" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT;

-- DropEnum
DROP TYPE "VisitStatus";
