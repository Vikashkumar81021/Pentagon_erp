-- CreateTable
CREATE TABLE "LeaveApplicant" (
    "id" SERIAL NOT NULL,
    "applicant_name" TEXT NOT NULL,
    "leave_category" TEXT NOT NULL,
    "from_date" TIMESTAMP(3) NOT NULL,
    "to_date" TIMESTAMP(3) NOT NULL,
    "reason_absence" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeaveApplicant_pkey" PRIMARY KEY ("id")
);
