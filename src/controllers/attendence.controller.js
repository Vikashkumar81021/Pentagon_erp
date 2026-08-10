import {
  getAttendanceService,
  syncAttendanceService,
} from "../services/attendence.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { STATUS_CODE } from "../constants/status.code.js";
export const syncAttendanceController = async (req, res) => {
  try {
    const result = await syncAttendanceService();

    res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAttendenceLogs = asyncHandler(async (req, res) => {
  const fetchAttendenceLogs = await getAttendanceService();
  res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: fetchAttendenceLogs,
  });
});
