import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";
import { telecallingValidator } from "../validators/teleCalling.validator.js";
import {
  createTelecalling,
  getAllTelecalling,
  getApprovedTelecalling,
  getCallDiscussionAndTelecalling,
  getRejectedTelecalling,
  updateTelecalling,
  deleteTelecalling,
} from "../services/teleCalling.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await createTelecalling(req.body);

  // await createAuditLog({
  //     userId: req.user.id,
  //     action: "CREATE",
  //     module: "TELE_CALLING",
  //     activity: "Telecalling fetched successfully",
  // });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Telecalling created successfully",
    data: telecalling,
  });
});

const getAllTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await getAllTelecalling();

  // await createAuditLog({
  //     userId: req.user.id,
  //     action: "GET",
  //     module: "TELE_CALLING",
  //     activity: "Telecalling fetched successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling fetched successfully",
    data: telecalling,
  });
});

const getApprovedTelecallingController = asyncHandler(async (req, res) => {
  const result = await getApprovedTelecalling();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: result.length,
    data: serializeBigInt(result),
  });
});

const getCallDiscussionAndTelecallingController = asyncHandler(
  async (req, res) => {
    const result = await getCallDiscussionAndTelecalling();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      data: serializeBigInt(result),
    });
  },
);

const getRejectedTelecallingController = asyncHandler(async (req, res) => {
  const result = await getRejectedTelecalling();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: result.length,
    data: serializeBigInt(result),
  });
});

const updateTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await updateTelecalling(req.params.id, req.body);

  // await createAuditLog({
  //     userId: req.user.id,
  //     action: "PATCH",
  //     module: "TELE_CALLING",
  //     activity: "Telecalling updated successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling updated successfully",
    data: telecalling,
  });
});

const deleteTelecallingController = asyncHandler(async (req, res) => {
  await deleteTelecalling(req.params.id);

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "DELETE",
  //   module: "TELE_CALLING",
  //   activity: "Telecalling deleted successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling deleted successfully",
  });
});

export {
  createTelecallingController,
  getAllTelecallingController,
  getApprovedTelecallingController,
  getCallDiscussionAndTelecallingController,
  getRejectedTelecallingController,
  updateTelecallingController,
  deleteTelecallingController,
};
