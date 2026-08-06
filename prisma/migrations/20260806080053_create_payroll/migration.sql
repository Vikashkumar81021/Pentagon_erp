-- CreateTable
CREATE TABLE "pay_rolls" (
    "id" SERIAL NOT NULL,
    "employeeCode" TEXT NOT NULL,
    "gross" INTEGER NOT NULL,
    "tds" INTEGER NOT NULL,
    "pf" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pay_rolls_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pay_rolls" ADD CONSTRAINT "pay_rolls_employeeCode_fkey" FOREIGN KEY ("employeeCode") REFERENCES "Employee"("employeeCode") ON DELETE RESTRICT ON UPDATE CASCADE;
