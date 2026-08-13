/*
  Warnings:

  - The `location` column on the `HiringRequirement` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "HiringRequirement" DROP COLUMN "location",
ADD COLUMN     "location" TEXT[];
