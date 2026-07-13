/*
  Warnings:

  - You are about to drop the column `joining_date` on the `EmployeeOnboard` table. All the data in the column will be lost.
  - Added the required column `joiningDate` to the `EmployeeOnboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmployeeOnboard" DROP COLUMN "joining_date",
ADD COLUMN     "joiningDate" TIMESTAMP(3) NOT NULL;
