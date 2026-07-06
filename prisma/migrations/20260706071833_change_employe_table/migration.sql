/*
  Warnings:

  - You are about to drop the column `Bank_instutuion` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `aadhard_card_number` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `designation_role` on the `EmployeeOnboard` table. All the data in the column will be lost.
  - You are about to drop the column `emp_full_name` on the `EmployeeOnboard` table. All the data in the column will be lost.
  - You are about to drop the column `employeId` on the `TaskChecklist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `EmployeeOnboard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aadhar_card_number` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank_institution` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `EmployeeOnboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeOnboardId` to the `TaskChecklist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TaskChecklist" DROP CONSTRAINT "TaskChecklist_employeId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "Bank_instutuion",
DROP COLUMN "aadhard_card_number",
ADD COLUMN     "aadhar_card_number" TEXT NOT NULL,
ADD COLUMN     "bank_institution" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "EmployeeOnboard" DROP COLUMN "designation_role",
DROP COLUMN "emp_full_name",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TaskChecklist" DROP COLUMN "employeId",
ADD COLUMN     "employeeOnboardId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeOnboard_employeeId_key" ON "EmployeeOnboard"("employeeId");

-- AddForeignKey
ALTER TABLE "EmployeeOnboard" ADD CONSTRAINT "EmployeeOnboard_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskChecklist" ADD CONSTRAINT "TaskChecklist_employeeOnboardId_fkey" FOREIGN KEY ("employeeOnboardId") REFERENCES "EmployeeOnboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
