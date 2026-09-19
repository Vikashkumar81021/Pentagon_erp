/*
  Warnings:

  - You are about to drop the column `employeeId` on the `EmployeeOnboard` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmployeeOnboard" DROP CONSTRAINT "EmployeeOnboard_employeeId_fkey";

-- DropIndex
DROP INDEX "EmployeeOnboard_employeeId_key";

-- AlterTable
ALTER TABLE "EmployeeOnboard" DROP COLUMN "employeeId";
