import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createJournalEntry = async (data) => {
  return await prisma.journalEntry.create({
    data: {
      voucherNo: data.voucherNo,
      journalDate: data.journalDate,
      reference: data.reference,
      description: data.description,
      debitAccount: data.debitAccount,
      creditAccount: data.creditAccount,
      amount: data.amount,
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
  updateJournalEntry,
  deleteJournalEntry,
};