import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createExpenseClaim = async (data) => {
  const claimId = `EXP-${Date.now()}`;

  const employee = await prisma.employee.findUnique({
    where: {
      id: Number(data.employeeId),
    },
  });

  if (!employee) {
    throw new NotFoundError("Employee not found");
  }

  return await prisma.expenseClaim.create({
    data: {
      claimId,
      employeeId: Number(data.employeeId),
      category: data.category,
      date: data.date,
      amount: Number(data.amount),
      workflow: "Waiting Approval",
      status: "Pending",
      description: data.description,
      decision: data.decision,
      remarks: data.remarks,
    },
    include: {
      employee: true,
    },
  });
};

const getAllExpenseClaims = async () => {
  const claims = await prisma.expenseClaim.findMany({
    orderBy: {
      claimId: "desc",
    },
  });
  return claims;
  // return claims.map(({ workflow, ...claim }) => claim);
};

const getExpenseClaimById = async (id) => {
  const claim = await prisma.expenseClaim.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!claim) {
    throw new NotFoundError("Expense Claim not found");
  }

  const { workflow, ...response } = claim;

  return response;
};

const updateExpenseClaim = async (id, data) => {
  const claim = await prisma.expenseClaim.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!claim) {
    throw new NotFoundError("Expense Claim not found");
  }

  return await prisma.expenseClaim.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.employee && { employee: data.employee }),
      ...(data.category && { category: data.category }),
      ...(data.date && { date: data.date }),
      ...(data.amount !== undefined && {
        amount: Number(data.amount),
      }),
      ...(data.description && {
        description: data.description,
      }),
   
     workflow: "Completed",

      ...(data.status && {
        status: data.status,
      }),

      ...(data.decision !== undefined && {
        decision: data.decision,
      }),

      ...(data.remarks !== undefined && {
        remarks: data.remarks,
      }),
    },
  });
};

const deleteExpenseClaim = async (id) => {
  const claim = await prisma.expenseClaim.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!claim) {
    throw new NotFoundError("Expense Claim not found");
  }

  await prisma.expenseClaim.delete({
    where: {
      id: Number(id),
    },
  });

  return claim;
};

export {
  createExpenseClaim,
  getAllExpenseClaims,
  getExpenseClaimById,
  updateExpenseClaim,
  deleteExpenseClaim,
};