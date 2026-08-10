-- CreateTable
CREATE TABLE "IncomingBill" (
    "id" SERIAL NOT NULL,
    "vendor" TEXT NOT NULL,
    "duedate" TEXT NOT NULL,
    "costcategory" TEXT NOT NULL,
    "invoicevalue" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncomingBill_pkey" PRIMARY KEY ("id")
);
