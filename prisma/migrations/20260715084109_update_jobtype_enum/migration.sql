/*
  Warnings:

  - Changed the type of `employmentType` on the `HiringRequirement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "HiringRequirement" DROP COLUMN "employmentType",
ADD COLUMN     "employmentType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "JobType";
