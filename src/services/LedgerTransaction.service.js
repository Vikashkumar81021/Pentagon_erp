import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createLedgerTransaction = async (data) => {
  return await prisma.ledgerTransaction.create({
    data: {
      date: new Date(data.date),
      description: data.description,
      category: data.category,
       transactionId: data.transactionId,
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

const getGeneralLedger = async () => {
  const transactions = await prisma.ledgerTransaction.findMany({
    orderBy: {
      date: "asc",
    },
  });

  let runningBalance = 0;

  return transactions.map((item) => {
    const amount = Number(item.amount);

    const debit =
      item.type.toLowerCase() === "debit" ? amount : 0;

    const credit =
      item.type.toLowerCase() === "credit" ? amount : 0;

    runningBalance += debit - credit;

    return {
      date: item.date.toISOString().split("T")[0],
      reference: item.transactionId,
      account: item.account,
      description: item.description,
      debit,
      credit,
      balance: runningBalance,
    };
  });
};

const getTrialBalance = async () => {
  const transactions = await prisma.ledgerTransaction.findMany();

  const accountMap = {};

  transactions.forEach((item) => {
    if (!accountMap[item.account]) {
      accountMap[item.account] = {
        accountCode: item.transactionId,
        accountName: item.account,
        debit: 0,
        credit: 0,
      };
    }

    if (item.type.toLowerCase() === "debit") {
      accountMap[item.account].debit += Number(item.amount);
    } else {
      accountMap[item.account].credit += Number(item.amount);
    }
  });

  return Object.values(accountMap);
};

const searchTrialBalance = async (search) => {
  const { accountName } = search;

  const where = {};

  if (accountName) {
    where.account = {
      contains: accountName,
      mode: "insensitive",
    };
  }

  const transactions = await prisma.ledgerTransaction.findMany({
    where,
  });

  const accountMap = {};

  transactions.forEach((item) => {
    if (!accountMap[item.account]) {
      accountMap[item.account] = {
        accountCode: item.transactionId,
        accountName: item.account,
        debit: 0,
        credit: 0,
      };
    }

    if (item.type.toLowerCase() === "debit") {
      accountMap[item.account].debit += Number(item.amount);
    } else {
      accountMap[item.account].credit += Number(item.amount);
    }
  });

  return Object.values(accountMap);
};

const filterTrialBalance = async (filters) => {
  const { type } = filters;

  const where = {};

  if (type) {
    where.type = {
      equals: type,
      mode: "insensitive",
    };
  }

  const transactions = await prisma.ledgerTransaction.findMany({
    where,
  });

  const accountMap = {};

  transactions.forEach((item) => {
    if (!accountMap[item.account]) {
      accountMap[item.account] = {
        accountCode: item.transactionId,
        accountName: item.account,
        debit: 0,
        credit: 0,
      };
    }

    if (item.type.toLowerCase() === "debit") {
      accountMap[item.account].debit += Number(item.amount);
    } else {
      accountMap[item.account].credit += Number(item.amount);
    }
  });

  return Object.values(accountMap);
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
      ...(data.transactionId && { transactionId: data.transactionId, }),
      ...(data.account && { account: data.account, }),
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
  getGeneralLedger,
  getTrialBalance,
  searchTrialBalance,
  filterTrialBalance,
  updateLedgerTransaction,
  deleteLedgerTransaction,
};