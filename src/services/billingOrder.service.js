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

export {
  createBillingOrder,
  getBillingOrders,
};