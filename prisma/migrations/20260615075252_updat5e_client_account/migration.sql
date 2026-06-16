/*
  Warnings:

  - You are about to drop the column `industry` on the `ClientAccount` table. All the data in the column will be lost.
  - You are about to drop the column `orgName` on the `ClientAccount` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `ClientAccount` table. All the data in the column will be lost.
  - You are about to drop the column `pocName` on the `ClientAccount` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[leadId]` on the table `ClientAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `leadId` to the `ClientAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_name` to the `ClientAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClientAccount" DROP COLUMN "industry",
DROP COLUMN "orgName",
DROP COLUMN "phone",
DROP COLUMN "pocName",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "industry_sector" TEXT,
ADD COLUMN     "leadId" INTEGER NOT NULL,
ADD COLUMN     "name_of_poc" TEXT,
ADD COLUMN     "organization_name" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ClientAccount_leadId_key" ON "ClientAccount"("leadId");

-- AddForeignKey
ALTER TABLE "ClientAccount" ADD CONSTRAINT "ClientAccount_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
