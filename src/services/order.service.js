import prisma from "../config/db.js";

const createOrderService = async (orderData, userId) => {
  const order = await prisma.order.create({
    data: {
      ...orderData,
      salesPersonId: userId,
    },

    include: {
      salesPerson: {
        select: {
          id: true,
          name: true,
          //   empcode: true,
        },
      },

      clientAccount: true,
    },
  });

  return order;
};

const fetechOrders = async () => {
  const totalOrders = await prisma.order.findMany({
    include: {
      salesPerson: {
        select: {
          name: true,
        },
      },
      clientAccount: {
        select: {
          organization_name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return totalOrders;
};
export { createOrderService, fetechOrders };
