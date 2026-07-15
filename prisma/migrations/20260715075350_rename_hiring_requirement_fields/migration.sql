/*
  Warnings:

  - You are about to drop the column `job_Title` on the `HiringRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `job_status` on the `HiringRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `job_type` on the `HiringRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `roles_requirements` on the `HiringRequirement` table. All the data in the column will be lost.
  - Added the required column `description` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employmentType` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobTitle` to the `HiringRequirement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HiringRequirement" DROP COLUMN "job_Title",
DROP COLUMN "job_status",
DROP COLUMN "job_type",
DROP COLUMN "roles_requirements",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "employmentType" "JobType" NOT NULL,
ADD COLUMN     "jobStatus" TEXT NOT NULL DEFAULT 'OPEN',
ADD COLUMN     "jobTitle" TEXT NOT NULL;
