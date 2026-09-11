import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { telecallingValidator } from "../validators/teleCalling.validator.js";
import * as telecallingService from "../services/teleCalling.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await telecallingService.createTelecalling(req.body);

  await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "TELE_CALLING",
      activity: "Telecalling fetched successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Telecalling created successfully",
    data: telecalling,
  });
});

const getAllTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await telecallingService.getAllTelecalling();

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "TELE_CALLING",
      activity: "Telecalling fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling fetched successfully",
    data: telecalling,
  });
});

const updateTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await telecallingService.updateTelecalling(
    req.params.id,
    req.body,
  );

  await createAuditLog({
      userId: req.user.id,
      action: "PATCH",
      module: "TELE_CALLING",
      activity: "Telecalling updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling updated successfully",
    data: telecalling,
  });
});

const deleteTelecallingController = asyncHandler(async (req, res) => {
  await telecallingService.deleteTelecalling(req.params.id);

  await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "TELE_CALLING",
      activity: "Telecalling deleted successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling deleted successfully",
  });
});

export {
  createTelecallingController,
  getAllTelecallingController,
  updateTelecallingController,
  deleteTelecallingController,
};
