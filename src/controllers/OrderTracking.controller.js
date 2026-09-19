import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";

import {
  createOrderTracking,
  getOrderTrackings,
  getOrderTrackingById,
  updateOrderTracking,
  deleteOrderTracking,
} from "../services/OrderTracking.service.js";

import {
  createOrderTrackingValidator,
  updateOrderTrackingValidator,
} from "../validators/OrderTracking.validator.js";

const createOrderTrackingController = asyncHandler(async (req, res) => {
  const validatedData = createOrderTrackingValidator.parse(req.body);

  const result = await createOrderTracking(validatedData);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Order Tracking created successfully",
    data: serializeBigInt(result),
  });
});

const getOrderTrackingsController = asyncHandler(async (req, res) => {
  const result = await getOrderTrackings();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: result.length,
    data: serializeBigInt(result),
  });
});

const getOrderTrackingByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await getOrderTrackingById(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: serializeBigInt(result),
  });
});

const updateOrderTrackingController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const validatedData = updateOrderTrackingValidator.parse(req.body);

  const result = await updateOrderTracking(id, validatedData);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Order Tracking updated successfully",
    data: serializeBigInt(result),
  });
});

const deleteOrderTrackingController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await deleteOrderTracking(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: result.message,
  });
});

export {
  createOrderTrackingController,
  getOrderTrackingsController,
  getOrderTrackingByIdController,
  updateOrderTrackingController,
  deleteOrderTrackingController,
};