/*
  Warnings:

  - Added the required column `transactionId` to the `ledger_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Classification" AS ENUM ('Assets', 'Liabilities', 'Equity', 'Revenue', 'Expenses');

-- CreateEnum
CREATE TYPE "SubClassification" AS ENUM ('Current_Assets', 'Non_Current_Assets', 'Current_Liabilities', 'Long_Term_Liabilities', 'Direct_Income', 'Indirect_Income', 'Direct_Expenses', 'Indirect_Expenses');

-- CreateEnum
CREATE TYPE "BalanceType" AS ENUM ('Debit', 'Credit');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('Active', 'Inactive');

-- AlterTable
ALTER TABLE "ledger_transactions" ADD COLUMN     "transactionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "chart_accounts" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "classification" "Classification" NOT NULL,
    "subClassification" "SubClassification" NOT NULL,
    "balanceType" "BalanceType" NOT NULL,
    "openingBalance" DECIMAL(12,2) NOT NULL,
    "status" "AccountStatus" NOT NULL DEFAULT 'Active',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chart_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chart_accounts_code_key" ON "chart_accounts"("code");
