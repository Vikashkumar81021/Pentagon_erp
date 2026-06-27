/*
  Warnings:

  - You are about to drop the column `quarterly_business` on the `billing_orders` table. All the data in the column will be lost.
  - Added the required column `monthly_business` to the `billing_orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "billing_orders" DROP COLUMN "quarterly_business",
ADD COLUMN     "monthly_business" INTEGER NOT NULL;
