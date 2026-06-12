-- CreateTable
CREATE TABLE "ClientAccount" (
    "id" SERIAL NOT NULL,
    "orgName" TEXT NOT NULL,
    "pocName" TEXT,
    "designation" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "city" TEXT,
    "industry" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientAccount_pkey" PRIMARY KEY ("id")
);
