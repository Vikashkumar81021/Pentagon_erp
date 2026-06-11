/*
  Warnings:

  - Added the required column `industry_sector` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "industry_sector" TEXT NOT NULL;
