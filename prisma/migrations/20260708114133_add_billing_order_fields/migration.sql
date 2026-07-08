/*
  Warnings:

  - The values [WARM,HOT] on the enum `VisitType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `monthly_business` on the `billing_orders` table. All the data in the column will be lost.
  - You are about to drop the column `support_of` on the `billing_orders` table. All the data in the column will be lost.
  - Added the required column `designation` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `visit_type` on the `SalesVisit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `accounts_phone` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billing_contact_email` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billing_contact_name` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billing_contact_phone` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_value` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_name` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `execution_phone` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `po_contact_email` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `po_contact_name` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `po_contact_phone` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_email` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_name` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_phone` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `support_contact_phone` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `support_name` to the `billing_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `support_phone` to the `billing_orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VisitType_new" AS ENUM ('WARM_PROSPECTS', 'HOT_PROSPECTS', 'DSR');
ALTER TABLE "SalesVisit" ALTER COLUMN "visit_type" TYPE "VisitType_new" USING ("visit_type"::text::"VisitType_new");
ALTER TYPE "VisitType" RENAME TO "VisitType_old";
ALTER TYPE "VisitType_new" RENAME TO "VisitType";
DROP TYPE "public"."VisitType_old";
COMMIT;

-- AlterTable
ALTER TABLE "SalesVisit" ADD COLUMN     "designation" TEXT NOT NULL,
DROP COLUMN "visit_type",
ADD COLUMN     "visit_type" "VisitType" NOT NULL;

-- AlterTable
ALTER TABLE "billing_orders" DROP COLUMN "monthly_business",
DROP COLUMN "support_of",
ADD COLUMN     "accounts_phone" TEXT NOT NULL,
ADD COLUMN     "billing_contact_email" TEXT NOT NULL,
ADD COLUMN     "billing_contact_name" TEXT NOT NULL,
ADD COLUMN     "billing_contact_phone" TEXT NOT NULL,
ADD COLUMN     "business_value" INTEGER NOT NULL,
ADD COLUMN     "customer_name" TEXT NOT NULL,
ADD COLUMN     "execution_phone" TEXT NOT NULL,
ADD COLUMN     "po_contact_email" TEXT NOT NULL,
ADD COLUMN     "po_contact_name" TEXT NOT NULL,
ADD COLUMN     "po_contact_phone" TEXT NOT NULL,
ADD COLUMN     "recipient_email" TEXT NOT NULL,
ADD COLUMN     "recipient_name" TEXT NOT NULL,
ADD COLUMN     "recipient_phone" TEXT NOT NULL,
ADD COLUMN     "support_contact_phone" TEXT NOT NULL,
ADD COLUMN     "support_name" TEXT NOT NULL,
ADD COLUMN     "support_phone" TEXT NOT NULL;
