-- CreateTable
CREATE TABLE "Employee" (
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile_number" INTEGER NOT NULL,
    "desgination" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "status_desgnation" TEXT,
    "Bank_instutuion" TEXT NOT NULL,
    "pan_id_card_number" TEXT NOT NULL,
    "aadhard_card_number" TEXT NOT NULL,
    "bank_account_number" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
