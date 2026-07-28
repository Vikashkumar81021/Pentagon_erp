-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('Paid', 'Outstanding', 'Overdue', 'Draft');

-- CreateTable
CREATE TABLE "invoice_items" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "status" "InvoiceStatus" NOT NULL DEFAULT 'Outstanding',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_items_pkey" PRIMARY KEY ("id")
);
