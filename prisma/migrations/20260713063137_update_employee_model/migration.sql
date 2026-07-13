/*
  Warnings:

  - You are about to drop the column `aadhar_card_number` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `bank_account_number` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `bank_institution` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `desgination` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `mobile_number` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `pan_id_card_number` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `status_desgnation` on the `Employee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[workEmail]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aadhaarNumber` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountNumber` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `panNumber` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workEmail` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `salary` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "statusDesgnation" AS ENUM ('Active', 'Probation', 'On_Leave');

-- DropIndex
DROP INDEX "Employee_email_key";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "aadhar_card_number",
DROP COLUMN "bank_account_number",
DROP COLUMN "bank_institution",
DROP COLUMN "desgination",
DROP COLUMN "email",
DROP COLUMN "full_name",
DROP COLUMN "mobile_number",
DROP COLUMN "pan_id_card_number",
DROP COLUMN "status_desgnation",
ADD COLUMN     "aadhaarNumber" TEXT NOT NULL,
ADD COLUMN     "accountNumber" TEXT NOT NULL,
ADD COLUMN     "bankName" TEXT NOT NULL,
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "mobileNumber" BIGINT NOT NULL,
ADD COLUMN     "panNumber" TEXT NOT NULL,
ADD COLUMN     "status" "statusDesgnation" NOT NULL,
ADD COLUMN     "workEmail" TEXT NOT NULL,
DROP COLUMN "salary",
ADD COLUMN     "salary" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_workEmail_key" ON "Employee"("workEmail");
