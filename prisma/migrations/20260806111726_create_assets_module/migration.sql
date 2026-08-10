-- CreateTable
CREATE TABLE "Assets" (
    "id" SERIAL NOT NULL,
    "assetsId" TEXT NOT NULL,
    "asset" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "asset_value" TEXT NOT NULL,
    "depreciation" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("id")
);
