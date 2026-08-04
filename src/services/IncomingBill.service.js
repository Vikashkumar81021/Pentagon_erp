import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createIncomingBill = async (data) => {
  const billNumber = `BILL-${Date.now()}`;

  let status = "Due Soon";

  if (new Date(data.dueDate) < new Date()) {
    status = "Overdue";
  }

  return await prisma.incomingBill.create({
    data: {
      vendor: data.vendor,
      dueDate: data.dueDate,
      costCategory: data.costCategory,
      invoiceValue: data.invoiceValue,
      billNumber,
      status,
    },
  });
};

const getAllIncomingBills = async () => {
  const bills = await prisma.incomingBill.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return bills.map((bill) => {
    if (
      bill.status !== "Paid" &&
      new Date(bill.dueDate) < new Date()
    ) {
      bill.status = "Overdue";
    }

    return bill;
  });
};

const getIncomingBillById = async (id) => {
  const bill = await prisma.incomingBill.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!bill) {
    throw new NotFoundError("Incoming Bill not found");
  }

  return bill;
};

const updateIncomingBill = async (id, data) => {
  const bill = await prisma.incomingBill.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!bill) {
    throw new NotFoundError("Incoming Bill not found");
  }

  let status = bill.status;

  if (data.status) {
    status = data.status;
  } else if (
    data.dueDate &&
    status !== "Paid" &&
    new Date(data.dueDate) < new Date()
  ) {
    status = "Overdue";
  }

  return await prisma.incomingBill.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.vendor && { vendor: data.vendor }),
      ...(data.dueDate && { dueDate: data.dueDate }),
      ...(data.costCategory && {
        costCategory: data.costCategory,
      }),
      ...(data.invoiceValue && {
        invoiceValue: data.invoiceValue,
      }),
      status,
    },
  });
};

const deleteIncomingBill = async (id) => {
  const bill = await prisma.incomingBill.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!bill) {
    throw new NotFoundError("Incoming Bill not found");
  }

  await prisma.incomingBill.delete({
    where: {
      id: Number(id),
    },
  });

  return bill;
};

export {
  createIncomingBill,
  getAllIncomingBills,
  getIncomingBillById,
  updateIncomingBill,
  deleteIncomingBill,
};