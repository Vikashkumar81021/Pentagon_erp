/*
  Warnings:

  - Added the required column `applicationDeadline` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experienceRequired` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hiringManager` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openings` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualification` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salaryRange` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HiringRequirement" ADD COLUMN     "applicationDeadline" TEXT NOT NULL,
ADD COLUMN     "experienceRequired" TEXT NOT NULL,
ADD COLUMN     "hiringManager" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "openings" INTEGER NOT NULL,
ADD COLUMN     "qualification" TEXT NOT NULL,
ADD COLUMN     "salaryRange" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SalesVisit" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "connected_calls" INTEGER,
ADD COLUMN     "meetings_scheduled" INTEGER,
ADD COLUMN     "new_leads_generated" INTEGER,
ADD COLUMN     "order_lost_reason" TEXT,
ADD COLUMN     "total_calls_made" INTEGER;
