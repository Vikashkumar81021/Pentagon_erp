import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

import {
  createOrder,
  getOrders,
  updateOrder,
  searchOrders,
  deleteOrder,
} from "../services/order.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createOrderController = asyncHandler(async (req, res) => {
  
  const order = await createOrder(req.body);

  await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "ORDER",
      activity: "Order created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Order created successfully",
    data: order,
  });
});

const getOrdersController = asyncHandler(async (req, res) => {
  const orders = await getOrders();

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "ORDER",
      activity: "Order fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Orders fetched successfully",
    data: orders,
  });
});

const updateOrderController = asyncHandler(async (req, res) => {
  const order = await updateOrder(
    req.params.id,
    req.body
  );

  await createAuditLog({
      userId: req.user.id,
      action: "PATCH",
      module: "ORDER",
      activity: "Order updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Order updated successfully",
    data: order,
  });
});

const searchOrdersController = asyncHandler(async (req, res) => {
  const {
    search = "",
    page = 1,
    limit = 10,
  } = req.query;

  const result = await searchOrders(
    search,
    page,
    limit
  );

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "ORDER",
      activity: "Orders fetched successfully",
  });

  return res.status(200).json({
    success: true,
    message: "Orders fetched successfully",
    data: result.orders,
    pagination: result.pagination,
  });
});

const deleteOrderController = asyncHandler(async (req, res) => {
  await deleteOrder(req.params.id);

  await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "ORDER",
      activity: "Order deleted successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Order deleted successfully",
  });
});


export {
  createOrderController,
  getOrdersController,
  updateOrderController,
  searchOrdersController,
  deleteOrderController,
};