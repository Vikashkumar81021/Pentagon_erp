-- AlterTable
ALTER TABLE "ExpenseClaim" ALTER COLUMN "claimId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Telecall" (
    "id" SERIAL NOT NULL,
    "executive_name" TEXT NOT NULL,
    "visit_date" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "contact_person" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "lead_priority" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,

    CONSTRAINT "Telecall_pkey" PRIMARY KEY ("id")
);
