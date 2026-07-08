/*
  Warnings:

  - Changed the type of `lead_type` on the `SalesVisit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `visit_type` on the `SalesVisit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LeadType" AS ENUM ('WARM_PROSPECTS', 'HOT_PROSPECTS', 'DSR');

-- AlterTable
ALTER TABLE "SalesVisit" DROP COLUMN "lead_type",
ADD COLUMN     "lead_type" "LeadType" NOT NULL,
DROP COLUMN "visit_type",
ADD COLUMN     "visit_type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "VisitType";
