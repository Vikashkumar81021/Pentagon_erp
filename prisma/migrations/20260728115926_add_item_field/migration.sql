/*
  Warnings:

  - You are about to drop the column `customer` on the `invoice_items` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `invoice_items` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `invoice_items` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `invoice_items` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `invoice_items` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `invoice_items` table. All the data in the column will be lost.
  - Changed the type of `invoiceId` on the `invoice_items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LeadPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "CallType" AS ENUM ('PHONE', 'WHATSAPP', 'VIDEO_CALL', 'MEETING');

-- CreateEnum
CREATE TYPE "DiscussionOutcome" AS ENUM ('INTERESTED', 'FOLLOW_UP', 'NEGOTIATION', 'QUOTATION_REQUIRED', 'NOT_INTERESTED', 'CONVERTED');

-- CreateEnum
CREATE TYPE "FollowupMode" AS ENUM ('PHONE', 'WHATSAPP', 'EMAIL', 'MEETING');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('COLD', 'REPEAT', 'TELE_CALL');

-- CreateEnum
CREATE TYPE "SalesStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'WON', 'LOST', 'CLOSED');

-- CreateEnum
CREATE TYPE "LeadType" AS ENUM ('WARM_PROSPECTS', 'HOT_PROSPECTS', 'DSR');

-- CreateEnum
CREATE TYPE "ApprovedType" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "statusDesgnation" AS ENUM ('Active', 'Probation', 'On_Leave');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- CreateEnum
CREATE TYPE "BalanceType" AS ENUM ('Debit', 'Credit');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('Active', 'Inactive');

-- CreateEnum
CREATE TYPE "PunchType" AS ENUM ('IN', 'OUT');

-- CreateEnum
CREATE TYPE "PurchaseMode" AS ENUM ('GEM', 'DIRECT_PURCHASE', 'TENDER');

-- AlterTable
ALTER TABLE "invoice_items" DROP COLUMN "customer",
DROP COLUMN "description",
DROP COLUMN "dueDate",
DROP COLUMN "price",
DROP COLUMN "quantity",
DROP COLUMN "status",
ADD COLUMN     "item" JSONB,
DROP COLUMN "invoiceId",
ADD COLUMN     "invoiceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "empcode" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("userId","roleId")
);

-- CreateTable
CREATE TABLE "chart_accounts" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "subClassification" TEXT NOT NULL,
    "balanceType" "BalanceType" NOT NULL,
    "openingBalance" DECIMAL(12,2) NOT NULL,
    "status" "AccountStatus" NOT NULL DEFAULT 'Active',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chart_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ledger_transactions" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ledger_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
<<<<<<< HEAD
<<<<<<<< HEAD:prisma/migrations/20260727103224_create_journal_entry/migration.sql
=======
<<<<<<<< HEAD:prisma/migrations/20260728115926_add_item_field/migration.sql
CREATE TABLE "invoices" (
    "id" SERIAL NOT NULL,
    "customer" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "status" "InvoiceStatus" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
========
>>>>>>> 259f6752ec415c85db5795b215628ec90e8ea261
CREATE TABLE "JournalEntry" (
    "id" SERIAL NOT NULL,
    "voucherNo" TEXT NOT NULL,
    "journalDate" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "debitAccount" TEXT NOT NULL,
    "creditAccount" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "narration" TEXT NOT NULL,
    "attachment" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "postImmediately" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("id")
<<<<<<< HEAD
========
CREATE TABLE "invoices" (
    "id" SERIAL NOT NULL,
    "customer" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "status" "InvoiceStatus" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
>>>>>>>> c308b2520617351bf09a0a7499262d5506109929:prisma/migrations/20260728115926_add_item_field/migration.sql
=======
>>>>>>>> a242863b9230ee58542132e7bdf9ca28a6302351:prisma/migrations/20260727103224_create_journal_entry/migration.sql
>>>>>>> 259f6752ec415c85db5795b215628ec90e8ea261
);

-- CreateTable
CREATE TABLE "SalesVisit" (
    "id" SERIAL NOT NULL,
    "executive_name" TEXT NOT NULL,
    "visit_date" TIMESTAMP(3) NOT NULL,
    "visit_type" TEXT NOT NULL,
    "lead_type" "LeadType" NOT NULL,
    "designation" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_address" TEXT,
    "contact_person" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "customer_email" TEXT,
    "product_type" TEXT NOT NULL,
    "product_description" TEXT,
    "closure_date" TEXT,
    "basic_amount" INTEGER,
    "quantity" INTEGER,
    "remarks" TEXT,
    "status" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CallLog" (
    "id" SERIAL NOT NULL,
    "customer_name" TEXT NOT NULL,
    "contact_person" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "call_type" "CallType" NOT NULL,
    "discussion_outcome" "DiscussionOutcome" NOT NULL,
    "discussion_notes" TEXT,
    "followup_date" TIMESTAMP(3),
    "followup_mode" "FollowupMode",
    "approval_status" "ApprovalStatus" NOT NULL DEFAULT 'PENDING',
    "approved_by" TEXT,
    "approved_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "management_remarks" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CallLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaveApplicant" (
    "id" SERIAL NOT NULL,
    "applicant_name" TEXT NOT NULL,
    "leave_category" TEXT NOT NULL,
    "from_date" TIMESTAMP(3) NOT NULL,
    "to_date" TIMESTAMP(3) NOT NULL,
    "leave_approve" "ApprovedType" NOT NULL DEFAULT 'PENDING',
    "reason_absence" TEXT NOT NULL,
    "reason_reject" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeaveApplicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeOnboard" (
    "id" SERIAL NOT NULL,
    "joiningDate" TIMESTAMP(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeOnboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Holidays" (
    "id" SERIAL NOT NULL,
    "holidayName" TEXT NOT NULL,
    "holidayDate" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Holidays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskChecklist" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "employeeOnboardId" INTEGER NOT NULL,

    CONSTRAINT "TaskChecklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "employeeCode" TEXT,
    "workEmail" TEXT NOT NULL,
    "mobileNumber" BIGINT NOT NULL,
    "designation" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "org_name" TEXT,
    "dob" TIMESTAMP(3),
    "status" "statusDesgnation" NOT NULL,
    "bankName" TEXT NOT NULL,
    "panNumber" TEXT NOT NULL,
    "aadhaarNumber" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceLog" (
    "id" SERIAL NOT NULL,
    "employeeCode" TEXT NOT NULL,
    "punch_time" TIMESTAMP(3) NOT NULL,
    "punch_type" "PunchType" NOT NULL,

    CONSTRAINT "AttendanceLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HiringRequirement" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL,
    "jobStatus" TEXT NOT NULL DEFAULT 'OPEN',
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HiringRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "organization_name" TEXT NOT NULL,
    "name_of_poc" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "industry_sector" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "address" TEXT,
    "notes" TEXT,
    "priority" "LeadPriority" NOT NULL DEFAULT 'MEDIUM',
    "city" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'RAW',
    "attemptsCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadActivity" (
    "id" TEXT NOT NULL,
    "leadId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "activityDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "durationSec" INTEGER NOT NULL DEFAULT 0,
    "outcome" TEXT NOT NULL,
    "remarks" TEXT,
    "followUpDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "mailStatus" TEXT,
    "responses" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeadActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" SERIAL NOT NULL,
    "hiringRequirementId" INTEGER NOT NULL,
    "candidateName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientAccount" (
    "id" SERIAL NOT NULL,
    "leadId" INTEGER NOT NULL,
    "organization_name" TEXT NOT NULL,
    "name_of_poc" TEXT,
    "designation" TEXT,
    "industry_sector" TEXT,
    "email" TEXT,
    "phoneNumber" TEXT,
    "address" TEXT,
    "city" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "billing_orders" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "particulars" TEXT NOT NULL,
    "item_details" TEXT NOT NULL,
    "taxable_amount" DOUBLE PRECISION NOT NULL,
    "business_value" INTEGER NOT NULL,
    "customer_name" TEXT NOT NULL,
    "po_contact_name" TEXT NOT NULL,
    "po_contact_email" TEXT NOT NULL,
    "po_contact_phone" TEXT NOT NULL,
    "billing_contact_name" TEXT NOT NULL,
    "billing_contact_email" TEXT NOT NULL,
    "billing_contact_phone" TEXT NOT NULL,
    "recipient_name" TEXT NOT NULL,
    "recipient_email" TEXT NOT NULL,
    "recipient_phone" TEXT NOT NULL,
    "accounts_phone" TEXT NOT NULL,
    "execution_phone" TEXT NOT NULL,
    "support_phone" TEXT NOT NULL,
    "support_name" TEXT NOT NULL,
    "support_contact_phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "billing_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstitutionVisit" (
    "id" SERIAL NOT NULL,
    "institution_type" TEXT NOT NULL,
    "institution_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact_person" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "planned_visit_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InstitutionVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notice" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "purchaseMode" "PurchaseMode" NOT NULL,
    "clientAccountId" INTEGER NOT NULL,
    "proposal" TEXT,
    "poNumber" TEXT,
    "salesPersonId" INTEGER NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "shippingAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "category" TEXT,
    "unitPrice" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "totalStock" INTEGER NOT NULL DEFAULT 0,
    "reservedStock" INTEGER NOT NULL DEFAULT 0,
    "reorderLevel" INTEGER NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcurementRequest" (
    "id" SERIAL NOT NULL,
    "requestNo" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "remarks" TEXT,
    "requestedById" INTEGER NOT NULL,
    "approvedById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProcurementRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "city" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "rating" DOUBLE PRECISION DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'READY',
    "trackingNumber" TEXT,
    "carrier" TEXT,
    "expectedDate" TIMESTAMP(3),
    "shippedDate" TIMESTAMP(3),
    "deliveredDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_empcode_key" ON "User"("empcode");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "chart_accounts_code_key" ON "chart_accounts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeOnboard_employeeId_key" ON "EmployeeOnboard"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeCode_key" ON "Employee"("employeeCode");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_workEmail_key" ON "Employee"("workEmail");

-- CreateIndex
CREATE UNIQUE INDEX "ClientAccount_leadId_key" ON "ClientAccount"("leadId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_productId_key" ON "Inventory"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProcurementRequest_requestNo_key" ON "ProcurementRequest"("requestNo");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_items" ADD CONSTRAINT "invoice_items_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesVisit" ADD CONSTRAINT "SalesVisit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeOnboard" ADD CONSTRAINT "EmployeeOnboard_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskChecklist" ADD CONSTRAINT "TaskChecklist_employeeOnboardId_fkey" FOREIGN KEY ("employeeOnboardId") REFERENCES "EmployeeOnboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceLog" ADD CONSTRAINT "AttendanceLog_employeeCode_fkey" FOREIGN KEY ("employeeCode") REFERENCES "Employee"("employeeCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadActivity" ADD CONSTRAINT "LeadActivity_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_hiringRequirementId_fkey" FOREIGN KEY ("hiringRequirementId") REFERENCES "HiringRequirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientAccount" ADD CONSTRAINT "ClientAccount_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientAccountId_fkey" FOREIGN KEY ("clientAccountId") REFERENCES "ClientAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_salesPersonId_fkey" FOREIGN KEY ("salesPersonId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcurementRequest" ADD CONSTRAINT "ProcurementRequest_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcurementRequest" ADD CONSTRAINT "ProcurementRequest_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
