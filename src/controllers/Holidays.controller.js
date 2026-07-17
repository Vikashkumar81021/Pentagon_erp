import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
    createHoliday,
    getAllHolidays,
} from "../services/Holidays.service.js";

const createHolidayController = async (req, res) => {
  try {
    const holiday = await createHoliday(req.body)

    res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Holiday created successfully",
      data: holiday,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllHolidaysController = async (req, res) => {
  try {
    const holidays = await getAllHolidays()

    res.status(200).json({
      success: true,
      count: holidays.length,
      data: holidays,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  createHolidayController,
  getAllHolidaysController,
};