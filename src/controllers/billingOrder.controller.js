import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

import {
  createBillingOrder,
  getBillingOrders,
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

export {
  createBillingOrderController,
  getBillingOrdersController,
};