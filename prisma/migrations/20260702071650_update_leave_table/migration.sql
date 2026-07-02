/*
  Warnings:

  - The values [APPROVE,REJECT] on the enum `ApprovedType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ApprovedType_new" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');
ALTER TABLE "LeaveApplicant" ALTER COLUMN "leave_approve" TYPE "ApprovedType_new" USING ("leave_approve"::text::"ApprovedType_new");
ALTER TYPE "ApprovedType" RENAME TO "ApprovedType_old";
ALTER TYPE "ApprovedType_new" RENAME TO "ApprovedType";
DROP TYPE "public"."ApprovedType_old";
COMMIT;
