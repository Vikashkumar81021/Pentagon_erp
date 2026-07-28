import prisma from "../config/db.js";

const createInvoiceservice = async (data) => {
  return await prisma.invoiceItem.create({
    data: {
      description: data.description,
      quantity: Number(data.quantity),
      price: Number(data.price),
      invoiceId: data.invoiceId,
      customer: data.customer,
      dueDate: data.dueDate,
    },
  });
};

const getAllInvoiceservice = async () => {
  const invoices = await prisma.invoiceItem.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return invoices.map((item) => ({
    id: item.invoiceId,
    customer: item.customer,
    issueDate: item.createdAt.toISOString().split("T")[0],
    dueDate: item.dueDate,
    status: "Outstanding",
    amount: Number(item.price) * Number(item.quantity),
    createdAt: item.createdAt,
  }));
};

export {
  createInvoiceservice,
  getAllInvoiceservice,
};