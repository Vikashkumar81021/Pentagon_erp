/*
  Warnings:

  - The primary key for the `ExpenseClaim` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `designation` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `lead_type` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `product_type` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `balanceType` on the `chart_accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[claimId]` on the table `ExpenseClaim` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountName]` on the table `chart_accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lead_priority` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalBalance` to the `chart_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable


-- AlterTable
ALTER TABLE "SalesVisit" DROP COLUMN "designation",
DROP COLUMN "lead_type",
DROP COLUMN "product_type",
ADD COLUMN     "activity_type" TEXT,
ADD COLUMN     "additional_remarks" TEXT,
ADD COLUMN     "client_type" TEXT,
ADD COLUMN     "current_status" TEXT,
ADD COLUMN     "discussion_summary" TEXT,
ADD COLUMN     "expected_business_value" INTEGER,
ADD COLUMN     "expected_closure_date" TEXT,
ADD COLUMN     "lead_priority" TEXT NOT NULL,
ADD COLUMN     "management_support_required" TEXT,
ADD COLUMN     "meeting_photo" TEXT,
ADD COLUMN     "next_followup_date" TEXT,
ADD COLUMN     "order_closed" TEXT,
ADD COLUMN     "proposal_sent" TEXT,
ADD COLUMN     "reporting_location" TEXT,
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "chart_accounts" DROP COLUMN "balanceType",
ADD COLUMN     "accountType" TEXT,
ADD COLUMN     "normalBalance" "BalanceType" NOT NULL,
ADD COLUMN     "ownerType" TEXT;

-- DropEnum
DROP TYPE "LeadType";

-- CreateTable
CREATE TABLE "IncomingBill" (
    "id" SERIAL NOT NULL,
    "vendor" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "costCategory" TEXT NOT NULL,
    "invoiceValue" TEXT NOT NULL,
    "billNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Due Soon',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncomingBill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pay_rolls" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "gross" INTEGER NOT NULL,
    "tds" INTEGER NOT NULL,
    "pf" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "transaction_reference" TEXT,
    "remarks" TEXT,
    "payment_method" TEXT,
    "payment_date" TEXT,
    "deductions" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pay_rolls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assets" (
    "id" SERIAL NOT NULL,
    "assetsId" TEXT NOT NULL,
    "asset" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "asset_value" TEXT NOT NULL,
    "depreciation" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IncomingBill_billNumber_key" ON "IncomingBill"("billNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ExpenseClaim_claimId_key" ON "ExpenseClaim"("claimId");

-- CreateIndex
CREATE UNIQUE INDEX "chart_accounts_accountName_key" ON "chart_accounts"("accountName");

-- AddForeignKey
ALTER TABLE "pay_rolls" ADD CONSTRAINT "pay_rolls_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
