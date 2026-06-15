-- CreateEnum
CREATE TYPE "PurchaseMode" AS ENUM ('GEM', 'DIRECT_PURCHASE', 'TENDER');

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "purchaseMode" "PurchaseMode" NOT NULL,
    "clientAccountId" INTEGER NOT NULL,
    "proposal" TEXT,
    "poNumber" TEXT,
    "salesPersonId" INTEGER NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "shippingAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientAccountId_fkey" FOREIGN KEY ("clientAccountId") REFERENCES "ClientAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_salesPersonId_fkey" FOREIGN KEY ("salesPersonId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
