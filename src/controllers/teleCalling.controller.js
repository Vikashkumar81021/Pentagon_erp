import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { telecallingValidator } from "../validators/teleCalling.validator.js";
import * as telecallingService from "../services/Telecalling.service.js";

const createTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await telecallingService.createTelecalling(
    req.body
  );

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Telecalling created successfully",
    data: telecalling,
  });
});

const getAllTelecallingController = asyncHandler(async (req, res) => {
  const telecalling =
    await telecallingService.getAllTelecalling();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling fetched successfully",
    data: telecalling,
  });
});



const updateTelecallingController = asyncHandler(async (req, res) => {
  const telecalling =
    await telecallingService.updateTelecalling(
      req.params.id,
      req.body
    );

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling updated successfully",
    data: telecalling,
  });
});

const deleteTelecallingController = asyncHandler(async (req, res) => {
  await telecallingService.deleteTelecalling(req.params.id);

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