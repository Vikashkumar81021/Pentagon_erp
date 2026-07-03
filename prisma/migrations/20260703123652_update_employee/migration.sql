-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "dob" TIMESTAMP(3),
ADD COLUMN     "org_name" TEXT;

-- AlterTable
ALTER TABLE "LeaveApplicant" ADD COLUMN     "reason_reject" TEXT;
