-- CreateTable
CREATE TABLE "ExpenseClaim" (
    "claimId" SERIAL NOT NULL,
    "employee" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "workflow" TEXT,
    "description" TEXT NOT NULL,
    "decision" TEXT,
    "remarks" TEXT,

    CONSTRAINT "ExpenseClaim_pkey" PRIMARY KEY ("claimId")
);
