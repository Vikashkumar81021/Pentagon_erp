import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { BillingSchema } from "../validators/billingOrder.validator.js";

import {
  createBillingOrder,
  getBillingOrders,
  updateBillingOrder,
  deleteBillingOrder,
} from "../services/billingOrder.service.js";

const createBillingOrderController = asyncHandler(async (req, res) => {
  const billingOrder = await createBillingOrder(req.body);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Billing Order created successfully",
    data: billingOrder,
  });
});

const getBillingOrdersController = asyncHandler(async (req, res) => {
  const billingOrders = await getBillingOrders();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Billing Orders fetched successfully",
    data: billingOrders,
  });
});

const updateBillingOrderController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const billingOrder = await updateBillingOrder(id, req.body);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Billing Order updated successfully",
    data: billingOrder,
  });
});

const deleteBillingOrderController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteBillingOrder(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Billing Order deleted successfully",
  });
});

export {
  createBillingOrderController,
  getBillingOrdersController,
  updateBillingOrderController,
  deleteBillingOrderController,
};