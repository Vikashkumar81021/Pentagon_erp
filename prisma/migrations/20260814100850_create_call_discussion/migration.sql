-- CreateTable
CREATE TABLE "call_discussions" (
    "id" SERIAL NOT NULL,
    "sales_visit_id" INTEGER NOT NULL,
    "call_date" TEXT NOT NULL,
    "call_time" TEXT NOT NULL,
    "call_type" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "discussion" TEXT NOT NULL,
    "requirement" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "outcome" TEXT NOT NULL,
    "expected_amount" INTEGER NOT NULL,
    "next_followup_date" TEXT NOT NULL,
    "followup_mode" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "call_discussions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "call_discussions_sales_visit_id_idx" ON "call_discussions"("sales_visit_id");

-- AddForeignKey
ALTER TABLE "call_discussions" ADD CONSTRAINT "call_discussions_sales_visit_id_fkey" FOREIGN KEY ("sales_visit_id") REFERENCES "SalesVisit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
