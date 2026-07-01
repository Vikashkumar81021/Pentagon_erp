-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('Full_time', 'Part_time', 'Contract', 'Remote');

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "HiringRequirement" (
    "id" SERIAL NOT NULL,
    "job_Title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "job_type" "JobType" NOT NULL,
    "roles_requirements" TEXT NOT NULL,

    CONSTRAINT "HiringRequirement_pkey" PRIMARY KEY ("id")
);
