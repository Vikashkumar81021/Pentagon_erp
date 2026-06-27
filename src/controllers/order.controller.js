import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { orderSchema } from "../validators/order.validator.js";
import { BadRequestError } from "../utils/error.js";
import {
   createOrderService, 
   fetechOrders, 
   updateOrderService, 
   deleteOrderService,
   } from "../services/order.service.js";

const createOrderController = asyncHandler(async (req, res) => {
  const validateData = orderSchema.parse(req.body);
  const order = await createOrderService(validateData, req.user.id);
  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "order created successfully",
    data: order,
  });
});

const fetchOdersController = asyncHandler(async (req, res) => {
  const orders = await fetechOrders();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Orders fetched successfully",
    data: orders,
  });
});

const updateOrderController = asyncHandler(async (req, res) => {
  req.body.salesPersonId = req.user.id;
  const orderId = req.params.id;
  const updatedOrder = await updateOrderService(orderId, req.body);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Order updated successfully",
    data: updatedOrder,
  });
});

const deleteOrderController = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  await deleteOrderService(orderId);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Order deleted successfully",
  });
});

export { createOrderController, fetchOdersController, updateOrderController, deleteOrderController };
