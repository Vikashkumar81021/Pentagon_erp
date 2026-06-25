-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('COLD', 'REPEAT', 'TELE_CALL');

-- CreateEnum
CREATE TYPE "SalesStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'WON', 'LOST', 'CLOSED');

-- CreateTable
CREATE TABLE "SalesVisit" (
    "id" SERIAL NOT NULL,
    "executiveName" TEXT NOT NULL,
    "visitDate" TIMESTAMP(3) NOT NULL,
    "customerType" "CustomerType" NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerCompleteAddress" TEXT,
    "contactPerson" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "customerMailId" TEXT,
    "productType" TEXT NOT NULL,
    "productDescription" TEXT,
    "quantity" INTEGER,
    "organizationName" TEXT,
    "category" TEXT,
    "closureDate" TIMESTAMP(3),
    "basicAmount" DECIMAL(12,2),
    "status" "SalesStatus" NOT NULL DEFAULT 'PENDING',
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcurementRequest" (
    "id" SERIAL NOT NULL,
    "requestNo" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "remarks" TEXT,
    "requestedById" INTEGER NOT NULL,
    "approvedById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProcurementRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "city" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "rating" DOUBLE PRECISION DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'READY',
    "trackingNumber" TEXT,
    "carrier" TEXT,
    "expectedDate" TIMESTAMP(3),
    "shippedDate" TIMESTAMP(3),
    "deliveredDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProcurementRequest_requestNo_key" ON "ProcurementRequest"("requestNo");

-- AddForeignKey
ALTER TABLE "ProcurementRequest" ADD CONSTRAINT "ProcurementRequest_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcurementRequest" ADD CONSTRAINT "ProcurementRequest_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
