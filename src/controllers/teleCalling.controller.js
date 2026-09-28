import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";

import {
  createTelecalling,
  getAllTelecalling,
  getApprovedTelecalling,
  getCallDiscussionAndTelecalling,
  getRejectedTelecalling,
  updateTelecalling,
  deleteTelecalling,
} from "../services/teleCalling.service.js";

const createTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await createTelecalling(req.body);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Telecalling created successfully",
    data: serializeBigInt(telecalling),
  });
});

const getAllTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await getAllTelecalling();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling fetched successfully",
    count: telecalling.length,
    data: serializeBigInt(telecalling),
  });
});

const getApprovedTelecallingController = asyncHandler(async (req, res) => {
  const result = await getApprovedTelecalling();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Approved Telecalling fetched successfully",
    count: result.length,
    data: serializeBigInt(result),
  });
});

const getRejectedTelecallingController = asyncHandler(async (req, res) => {
  const result = await getRejectedTelecalling();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Rejected Telecalling fetched successfully",
    count: result.length,
    data: serializeBigInt(result),
  });
});

const getCallDiscussionAndTelecallingController = asyncHandler(
  async (req, res) => {
    const result = await getCallDiscussionAndTelecalling();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Call Discussion and Telecalling fetched successfully",
      data: serializeBigInt(result),
    });
  }
);

const updateTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await updateTelecalling(
    req.params.id,
    req.body
  );

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling updated successfully",
    data: serializeBigInt(telecalling),
  });
});

const deleteTelecallingController = asyncHandler(async (req, res) => {
  await deleteTelecalling(req.params.id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling deleted successfully",
  });
});

export {
  createTelecallingController,
  getAllTelecallingController,
  getApprovedTelecallingController,
  getRejectedTelecallingController,
  getCallDiscussionAndTelecallingController,
  updateTelecallingController,
  deleteTelecallingController,
};