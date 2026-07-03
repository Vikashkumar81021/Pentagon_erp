-- AlterEnum
ALTER TYPE "VisitType" ADD VALUE 'DSR';

-- AlterTable
ALTER TABLE "HiringRequirement" ADD COLUMN     "job_status" TEXT NOT NULL DEFAULT 'OPEN';
