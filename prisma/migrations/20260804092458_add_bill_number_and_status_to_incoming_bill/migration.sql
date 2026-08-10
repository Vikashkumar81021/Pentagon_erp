/*
  Warnings:

  - A unique constraint covering the columns `[billNumber]` on the table `IncomingBill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `billNumber` to the `IncomingBill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IncomingBill" ADD COLUMN     "billNumber" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Due Soon';

-- CreateIndex
CREATE UNIQUE INDEX "IncomingBill_billNumber_key" ON "IncomingBill"("billNumber");
