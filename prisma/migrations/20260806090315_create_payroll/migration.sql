/*
  Warnings:

  - You are about to drop the column `employeeCode` on the `pay_rolls` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `pay_rolls` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pay_rolls" DROP CONSTRAINT "pay_rolls_employeeCode_fkey";

-- AlterTable
ALTER TABLE "pay_rolls" DROP COLUMN "employeeCode",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pay_rolls" ADD CONSTRAINT "pay_rolls_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
