import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createLedgerTransaction = async (data) => {
  return await prisma.ledgerTransaction.create({
    data: {
      date: new Date(data.date),
      description: data.description,
      category: data.category,
      account: data.account,
      amount: data.amount,
      type: data.type,
    },
  });
};

const getAllLedgerTransactions = async () => {
  return await prisma.ledgerTransaction.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getLedgerTransactionById = async (id) => {
  const transaction = await prisma.ledgerTransaction.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!transaction) {
    throw new NotFoundError("Ledger Transaction not found");
  }

  return transaction;
};

const updateLedgerTransaction = async (id, data) => {
  const transaction = await prisma.ledgerTransaction.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!transaction) {
    throw new NotFoundError("Ledger Transaction not found");
  }

  return await prisma.ledgerTransaction.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.date && { date: new Date(data.date) }),
      ...(data.description && { description: data.description }),
      ...(data.category && { category: data.category }),
      ...(data.account && { account: data.account }),
      ...(data.amount !== undefined && { amount: data.amount }),
      ...(data.type && { type: data.type }),
    },
  });
};

const deleteLedgerTransaction = async (id) => {
  const transaction = await prisma.ledgerTransaction.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!transaction) {
    throw new NotFoundError("Ledger Transaction not found");
  }

  await prisma.ledgerTransaction.delete({
    where: {
      id: Number(id),
    },
  });

  return transaction;
};

export {
  createLedgerTransaction,
  getAllLedgerTransactions,
  getLedgerTransactionById,
  updateLedgerTransaction,
  deleteLedgerTransaction,
};