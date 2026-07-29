import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createExpenseClaim = async (data) => {
  return await prisma.expenseClaim.create({
    data: {
      employee: data.employee,
      category: data.category,
      date: data.date,
      amount: Number(data.amount),
      description: data.description,
      workflow: data.workflow,
      status: data.status,
      decision: data.decision,
      remarks: data.remarks,
    },
  });
};

const getAllExpenseClaims = async () => {
  return await prisma.expenseClaim.findMany({
    orderBy: {
      claimId: "desc",
    },
  });
};

const getExpenseClaimById = async (id) => {
  const claim = await prisma.expenseClaim.findUnique({
    where: {
      claimId: Number(id),
    },
  });

  if (!claim) {
    throw new NotFoundError("Expense Claim not found");
  }

  return claim;
};

const updateExpenseClaim = async (id, data) => {
  const claim = await prisma.expenseClaim.findUnique({
    where: {
      claimId: Number(id),
    },
  });

  if (!claim) {
    throw new NotFoundError("Expense Claim not found");
  }

  return await prisma.expenseClaim.update({
    where: {
      claimId: Number(id),
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
      ...(data.workflow !== undefined && {
        workflow: data.workflow,
      }),
      ...(data.status && { status: data.status }),
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
      claimId: Number(id),
    },
  });

  if (!claim) {
    throw new NotFoundError("Expense Claim not found");
  }

  await prisma.expenseClaim.delete({
    where: {
      claimId: Number(id),
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