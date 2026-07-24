-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('GENERAL', 'SALES_INCOME', 'SOFTWARE_SUBSCRIPTION', 'OFFICE_RENT', 'LOGISTICS', 'TAX', 'REFUND', 'CONSULTING');

-- CreateEnum
CREATE TYPE "BankAccount" AS ENUM ('ICICI_BANK_CA_PENTAGON', 'ICICI_BANK_OD_PENTAGON', 'INDUSIND_BANK_CA_SMART', 'INDUSIND_BANK_CA_PENTAGON', 'ICICI_BANK_CA_SEST');

-- CreateTable
CREATE TABLE "ledger_transactions" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "category" "TransactionCategory" NOT NULL,
    "account" "BankAccount" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ledger_transactions_pkey" PRIMARY KEY ("id")
);
