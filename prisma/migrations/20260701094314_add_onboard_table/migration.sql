-- CreateTable
CREATE TABLE "EmployeeOnboard" (
    "id" SERIAL NOT NULL,
    "emp_full_name" TEXT NOT NULL,
    "designation_role" TEXT NOT NULL,
    "joining_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeOnboard_pkey" PRIMARY KEY ("id")
);
