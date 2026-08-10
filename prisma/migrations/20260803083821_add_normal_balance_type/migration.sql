/*
  Warnings:

  - You are about to drop the column `balanceType` on the `chart_accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accountName]` on the table `chart_accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `normalBalance` to the `chart_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chart_accounts" DROP COLUMN "balanceType",
ADD COLUMN     "normalBalance" "BalanceType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "chart_accounts_accountName_key" ON "chart_accounts"("accountName");
