/*
  Warnings:

  - Added the required column `leave_approve` to the `LeaveApplicant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ApprovedType" AS ENUM ('APPROVE', 'REJECT');

-- AlterTable
ALTER TABLE "LeaveApplicant" ADD COLUMN     "leave_approve" "ApprovedType" NOT NULL;
