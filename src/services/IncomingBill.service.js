import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createIncomingBill = async (data) => {
  return await prisma.incomingBill.create({
    data: {
      vendor: data.vendor,
      duedate: data.duedate,
      costcategory: data.costcategory,
      invoicevalue: data.invoicevalue,
    },
  });
};

const getAllIncomingBills = async () => {
  return await prisma.incomingBill.findMany({
    orderBy: {
      createdAt: "desc",
    },
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

  return await prisma.incomingBill.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.vendor && { vendor: data.vendor }),
      ...(data.dueDate && { duedate: data.duedate }),
      ...(data.costcategory && {
        costcategory: data.costcategory,
      }),
      ...(data.invoicevalue && {
        invoicevalue: data.invoicevalue,
      }),
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