import prisma from "../config/db.js";

const createBillingOrder = async (data) => {
  return await prisma.billingOrder.create({
    data: {
      ...data,
      date: new Date(data.date),
    },
  });
};

const getBillingOrders = async () => {
  return await prisma.billingOrder.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
const updateBillingOrder = async (id, data) => {
  return await prisma.billingOrder.update({
    where: {
      id: Number(id),
    },
    data: {
      ...data,
      date: data.date ? new Date(data.date) : undefined,
    },
  });
};

const deleteBillingOrder = async (id) => {
  const billingOrder = await prisma.billingOrder.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!billingOrder) {
    throw new BadRequestError("Billing Order not found");
  }

  await prisma.billingOrder.delete({
    where: {
      id: Number(id),
    },
  });

  return;
};

export {
  createBillingOrder,
  getBillingOrders,
  updateBillingOrder,
  deleteBillingOrder,
};