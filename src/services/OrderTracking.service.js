import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createOrderTracking = async (data) => {
  return await prisma.orderTracking.create({
    data: {
      orderId: Number(data.orderId),
      customer: data.customer,
      orderDate: data.orderDate,
      userId: Number(data.userId),
      amount: data.amount,
      status: data.status,
    },
  });
};

const getOrderTrackings = async () => {
  return await prisma.orderTracking.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

const getOrderTrackingById = async (id) => {
  const orderTracking = await prisma.orderTracking.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!orderTracking) {
    throw new BadRequestError("Order Tracking not found");
  }

  return orderTracking;
};

const updateOrderTracking = async (id, data) => {
  const existing = await prisma.orderTracking.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!existing) {
    throw new BadRequestError("Order Tracking not found");
  }

  return await prisma.orderTracking.update({
    where: {
      id: Number(id),
    },
    data: {
      ...(data.orderId !== undefined && {
        orderId: Number(data.orderId),
      }),

      ...(data.customer !== undefined && {
        customer: data.customer,
      }),

      ...(data.orderDate !== undefined && {
        orderDate: data.orderDate,
      }),

      ...(data.userId !== undefined && {
        userId: Number(data.userId),
      }),

      ...(data.amount !== undefined && {
        amount: data.amount,
      }),

      ...(data.status !== undefined && {
        status: data.status,
      }),
    },
  });
};

const deleteOrderTracking = async (id) => {
  const existing = await prisma.orderTracking.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!existing) {
    throw new BadRequestError("Order Tracking not found");
  }

  await prisma.orderTracking.delete({
    where: {
      id: Number(id),
    },
  });

  return {
    message: "Order Tracking deleted successfully",
  };
};

export {
  createOrderTracking,
  getOrderTrackings,
  getOrderTrackingById,
  updateOrderTracking,
  deleteOrderTracking,
};