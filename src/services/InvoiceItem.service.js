import prisma from "../config/db.js";

const createInvoiceservice = async (data) => {
  return await prisma.invoice.create({
    data: {
      invoiceId: data.invoiceId,
      customer: data.customer,
      dueDate: data.dueDate,

      items: {
        create: data.items.map((item) => ({
          description: item.description,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: {
      items: true,
    },
  });
};

const getAllInvoiceservice = async () => {
  const invoices = await prisma.invoice.findMany({
    orderBy: {
      id: "desc",
    },
    select: {
      items: true,
    },
  });

  return invoices.map((invoice) => ({
    id: invoice.invoiceId,
    customer: invoice.customer,
    issueDate: invoice.createdAt,
    dueDate: invoice.dueDate,
    status: invoice.status,
    amount: invoice.items.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0,
    ),
    createdAt: invoice.createdAt,
    items: invoice.items,
  }));
};

const updateInvoiceservice = async (id, data) => {
  return await prisma.invoice.update({
    where: {
      id: Number(id),
    },
    data: {
      invoiceId: data.invoiceId,
      customer: data.customer,
      dueDate: data.dueDate,
      status: data.status,

      ...(data.items && {
        items: {
          deleteMany: {},
          create: data.items.map((item) => ({
            description: item.description,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      }),
    },
    include: {
      items: true,
    },
  });
};

export { createInvoiceservice, getAllInvoiceservice, updateInvoiceservice };
