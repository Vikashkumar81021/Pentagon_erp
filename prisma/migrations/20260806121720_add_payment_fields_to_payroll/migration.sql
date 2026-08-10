-- AlterTable
ALTER TABLE "pay_rolls" ADD COLUMN     "deductions" TEXT,
ADD COLUMN     "payment_date" TEXT,
ADD COLUMN     "payment_method" TEXT,
ADD COLUMN     "remarks" TEXT,
ADD COLUMN     "transaction_reference" TEXT;
