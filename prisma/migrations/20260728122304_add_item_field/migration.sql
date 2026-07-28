/*
  Warnings:

  - You are about to drop the column `issueDate` on the `invoices` table. All the data in the column will be lost.
  - Added the required column `description` to the `invoice_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `invoice_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `invoice_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoice_items" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "issueDate";
