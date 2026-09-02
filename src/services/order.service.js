import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createOrder = async (data) => {
  return await prisma.order.create({
    data: {
      customerName: data.customerName,
      phone: data.phone,
      email: data.email,
      purchaseOrderNumber: data.purchaseOrderNumber,
      orderDate: data.orderDate,
      deliveryTargetDate: data.deliveryTargetDate,

      upfrontAdvancePayment: data.upfrontAdvancePayment,

      advanceAmount:
        data.advanceAmount !== undefined
          ? Number(data.advanceAmount)
          : undefined,

      depositAccount: data.depositAccount,
      paymentMode: data.paymentMode,
      paymentReference: data.paymentReference,
      termsAndNotes: data.termsAndNotes,

      items: {
        create: data.items.map((item) => ({
          description: item.description,
          quantity: Number(item.quantity),
          unitPrice: Number(item.unitPrice),
        })),
      },
    },

    include: {
      items: true,
    },
  });
};

const getOrders = async () => {
  return await prisma.order.findMany({
    include: {
      items: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const updateOrder = async (id, data) => {
  const orderId = Number(id);

  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    throw new NotFoundError("Order not found");
  }

  const { items, ...orderData } = data;

  return await prisma.$transaction(async (tx) => {
    if (items !== undefined) {
      await tx.orderItem.deleteMany({
        where: { orderId },
      });
    }

    return await tx.order.update({
      where: { id: orderId },

      data: {
        ...orderData,

        ...(items !== undefined && {
          items: {
            create: items.map((item) => ({
              description: item.description,
              quantity: Number(item.quantity),
              unitPrice: Number(item.unitPrice),
            })),
          },
        }),
      },

      include: {
        items: true,
      },
    });
  });
};

const searchOrders = async (query, page = 1, limit = 10) => {
  const skip = (Number(page) - 1) * Number(limit);

  const where = query
    ? {
        OR: [
          {
            customerName: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            purchaseOrderNumber: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      }
    : {};

  const [orders, total] = await prisma.$transaction([
    prisma.order.findMany({
      where,
      skip,
      take: Number(limit),
      include: {
        items: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.order.count({
      where,
    }),
  ]);

  return {
    orders,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
};

const deleteOrder = async (id) => {
  const order = await prisma.order.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!order) {
    throw new NotFoundError("Order not found");
  }

  return await prisma.order.delete({
    where: {
      id: Number(id),
    },
  });
};


export {
  createOrder,
  getOrders,
  updateOrder,
  searchOrders,
  deleteOrder,
};