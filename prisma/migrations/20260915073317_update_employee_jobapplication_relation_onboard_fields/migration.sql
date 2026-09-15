/*
  Warnings:

  - A unique constraint covering the columns `[employeeId]` on the table `JobApplication` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "employeeId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "JobApplication_employeeId_key" ON "JobApplication"("employeeId");

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
