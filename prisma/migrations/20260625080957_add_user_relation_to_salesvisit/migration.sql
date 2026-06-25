/*
  Warnings:

  - Added the required column `userId` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SalesVisit" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SalesVisit" ADD CONSTRAINT "SalesVisit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
