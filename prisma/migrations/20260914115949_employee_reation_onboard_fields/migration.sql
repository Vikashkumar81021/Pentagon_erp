/*
  Warnings:

  - A unique constraint covering the columns `[employeeId]` on the table `EmployeeOnboard` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "EmployeeOnboard" ADD COLUMN     "employeeId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeOnboard_employeeId_key" ON "EmployeeOnboard"("employeeId");

-- AddForeignKey
ALTER TABLE "EmployeeOnboard" ADD CONSTRAINT "EmployeeOnboard_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
