/*
  Warnings:

  - Changed the type of `classification` on the `chart_accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `subClassification` on the `chart_accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "chart_accounts" DROP COLUMN "classification",
ADD COLUMN     "classification" TEXT NOT NULL,
DROP COLUMN "subClassification",
ADD COLUMN     "subClassification" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Classification";

-- DropEnum
DROP TYPE "SubClassification";
