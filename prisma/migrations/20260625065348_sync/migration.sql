/*
  Warnings:

  - You are about to drop the column `basicAmount` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `closureDate` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `contactPerson` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `customerCompleteAddress` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `customerMailId` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `customerName` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `customerType` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `executiveName` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `organizationName` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `productDescription` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `remarks` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `SalesVisit` table. All the data in the column will be lost.
  - You are about to drop the column `visitDate` on the `SalesVisit` table. All the data in the column will be lost.
  - Added the required column `address` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `designation` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_of_poc` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_name` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `SalesVisit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SalesVisit" DROP COLUMN "basicAmount",
DROP COLUMN "category",
DROP COLUMN "closureDate",
DROP COLUMN "contactNumber",
DROP COLUMN "contactPerson",
DROP COLUMN "customerCompleteAddress",
DROP COLUMN "customerMailId",
DROP COLUMN "customerName",
DROP COLUMN "customerType",
DROP COLUMN "executiveName",
DROP COLUMN "organizationName",
DROP COLUMN "productDescription",
DROP COLUMN "productType",
DROP COLUMN "quantity",
DROP COLUMN "remarks",
DROP COLUMN "status",
DROP COLUMN "visitDate",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "industry_sector" TEXT,
ADD COLUMN     "name_of_poc" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "organization_name" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "priority" "LeadPriority" NOT NULL DEFAULT 'MEDIUM';
