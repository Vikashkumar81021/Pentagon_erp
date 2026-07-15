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
ADD COLUMN     "employmentType" TEXT NOT NULL,
ADD COLUMN     "jobStatus" TEXT NOT NULL DEFAULT 'OPEN',
ADD COLUMN     "jobTitle" TEXT NOT NULL;

-- DropEnum
DROP TYPE "JobType";

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" SERIAL NOT NULL,
    "hiringRequirementId" INTEGER NOT NULL,
    "candidateName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_hiringRequirementId_fkey" FOREIGN KEY ("hiringRequirementId") REFERENCES "HiringRequirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
