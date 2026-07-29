import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createJournalEntry = async (data) => {

  if (data.debitAccount === data.creditAccount) {
    throw new Error("Debit and Credit account cannot be same");
  }
  const credit = await prisma.chartAccount.findFirst({
    where: {
      accountName: data.creditAccount,
    },
  });
  if (!credit) {
    throw new Error("Credit account not found");
  }
  if (credit.status !== "Active") {
    throw new Error("Credit account is inactive");
  }
  const debit = await prisma.chartAccount.findFirst({
    where: {
      accountName: data.debitAccount,
    },
  });
  if (!debit) {
    throw new Error("Debit account not found");
  }
  if (debit.status !== "Active") {
    throw new Error("Debit account is inactive");
  }
  return await prisma.journalEntry.create({
    data: {
      voucherNo: data.voucherNo,
      journalDate: data.journalDate,
      reference: data.reference,
      description: data.description,
      debitAccount: data.debitAccount,
      creditAccount: data.creditAccount,
      amount: Number(data.amount),
      narration: data.narration,
      attachment: data.attachment,
    },
  });
};

const getAllJournalEntries = async () => {
  const journals = await prisma.journalEntry.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return journals.map((journal) => ({
    ...journal,
    status: "Pending",
    postImmediately: false,
  }));
};

const getJournalEntryById = async (id) => {
  const journal = await prisma.journalEntry.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!journal) {
    throw new NotFoundError("Journal Entry not found");
  }

  return {
    ...journal,
    status: "Pending",
    postImmediately: false,
  };
};

const getJournalEntry = async () => {
  const journals = await prisma.journalEntry.findMany({
    orderBy: {
      journalDate: "asc",
    },
  });

  let balance = 0;

  return journals.map((journal) => {
    const debit = Number(journal.amount);
    const credit = Number(journal.amount);

    balance += debit - credit;

    return {
      date: journal.journalDate,
      reference: journal.reference,
      account: `${journal.debitAccount} / ${journal.creditAccount}`,
      description: journal.description,
      debit,
      credit,
      balance,
    };
  });
};

const viewJournalAttachment = async (id) => {
  const journal = await prisma.journalEntry.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      attachment: true,
    },
  });

  if (!journal) {
    throw new NotFoundError("Journal Entry not found");
  }

  if (!journal.attachment) {
    throw new NotFoundError("Attachment not found");
  }

  return journal;
};

const updateJournalEntry = async (id, data) => {
  const journal = await prisma.journalEntry.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!journal) {
    throw new NotFoundError("Journal Entry not found");
  }

  return await prisma.journalEntry.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.voucherNo && { voucherNo: data.voucherNo }),
      ...(data.journalDate && { journalDate: data.journalDate }),
      ...(data.reference && { reference: data.reference }),
      ...(data.description && { description: data.description }),
      ...(data.debitAccount && { debitAccount: data.debitAccount }),
      ...(data.creditAccount && { creditAccount: data.creditAccount }),
      ...(data.amount !== undefined && { amount: data.amount }),
      ...(data.narration && { narration: data.narration }),
      ...(data.attachment !== undefined && {
        attachment: data.attachment,
      }),
    },
  });
};

const deleteJournalEntry = async (id) => {
  const journal = await prisma.journalEntry.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!journal) {
    throw new NotFoundError("Journal Entry not found");
  }

  await prisma.journalEntry.delete({
    where: {
      id: Number(id),
    },
  });

  return journal;
};

export {
  createJournalEntry,
  getAllJournalEntries,
  getJournalEntryById,
  getJournalEntry,
  viewJournalAttachment,
  updateJournalEntry,
  deleteJournalEntry,
};
