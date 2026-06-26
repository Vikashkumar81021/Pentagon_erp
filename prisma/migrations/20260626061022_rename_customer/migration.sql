/*
  Warnings:

  - You are about to drop the column `address` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `designation` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `industry_sector` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `name_of_poc` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `organization_name` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `SalesVisit` table. All the data in the column will be lost.
  - Added the required column `contact_number` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_person` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_name` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `executive_name` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lead_type` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_type` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visit_date` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visit_type` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VisitType" AS ENUM ('WARM', 'HOT');

-- AlterTable
ALTER TABLE "SalesVisit" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "designation",
DROP COLUMN "email",
DROP COLUMN "industry_sector",
DROP COLUMN "name_of_poc",
DROP COLUMN "notes",
DROP COLUMN "organization_name",
DROP COLUMN "phoneNumber",
DROP COLUMN "priority",
ADD COLUMN     "basic_amount" INTEGER,
ADD COLUMN     "closure_date" TEXT,
ADD COLUMN     "contact_number" TEXT NOT NULL,
ADD COLUMN     "contact_person" TEXT NOT NULL,
ADD COLUMN     "customer_address" TEXT,
ADD COLUMN     "customer_email" TEXT,
ADD COLUMN     "customer_name" TEXT NOT NULL,
ADD COLUMN     "executive_name" TEXT NOT NULL,
ADD COLUMN     "lead_type" TEXT NOT NULL,
ADD COLUMN     "product_description" TEXT,
ADD COLUMN     "product_type" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER,
ADD COLUMN     "remarks" TEXT,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "visit_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "visit_type" TEXT NOT NULL;
