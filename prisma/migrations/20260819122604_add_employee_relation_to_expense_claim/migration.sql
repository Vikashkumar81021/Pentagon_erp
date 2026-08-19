/*
  Warnings:

  - You are about to drop the column `employee` on the `ExpenseClaim` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `ExpenseClaim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ExpenseClaim` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpenseClaim" DROP COLUMN "employee",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "employeeId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "ExpenseClaim" ADD CONSTRAINT "ExpenseClaim_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
