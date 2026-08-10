/*
  Warnings:

  - You are about to drop the column `costcategory` on the `IncomingBill` table. All the data in the column will be lost.
  - You are about to drop the column `duedate` on the `IncomingBill` table. All the data in the column will be lost.
  - You are about to drop the column `invoicevalue` on the `IncomingBill` table. All the data in the column will be lost.
  - Added the required column `costCategory` to the `IncomingBill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `IncomingBill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceValue` to the `IncomingBill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IncomingBill" DROP COLUMN "costcategory",
DROP COLUMN "duedate",
DROP COLUMN "invoicevalue",
ADD COLUMN     "costCategory" TEXT NOT NULL,
ADD COLUMN     "dueDate" TEXT NOT NULL,
ADD COLUMN     "invoiceValue" TEXT NOT NULL;
