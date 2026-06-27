-- CreateTable
CREATE TABLE "billing_orders" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "particulars" TEXT NOT NULL,
    "item_details" TEXT NOT NULL,
    "taxable_amount" DOUBLE PRECISION NOT NULL,
    "support_of" TEXT NOT NULL,
    "quarterly_business" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "billing_orders_pkey" PRIMARY KEY ("id")
);
