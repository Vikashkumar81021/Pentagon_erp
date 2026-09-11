import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
    createHoliday,
    getAllHolidays,
    getUpcomingHoliday,
    deleteHoliday,
} from "../services/Holidays.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createHolidayController = async (req, res) => {
  try {
    const holiday = await createHoliday(req.body)

    await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "HOLIDAYS",
      activity: "Holiday created successfully",
    });

    res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Holiday created successfully",
      data: holiday,
    });
  } catch (error) {
    res.status(STATUS_CODE.INTERNALERROR).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllHolidaysController = async (req, res) => {
  try {
    const holidays = await getAllHolidays()

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "HOLIDAYS",
      activity: "Holiday fetched successfully",
    });
    res.status(STATUS_CODE.SUCCESS).json({
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

const getUpcomingHolidayController = async (req, res, next) => {
  try {
    const holiday = await getUpcomingHoliday();

    if (!holiday) {
      return res.status(STATUS_CODE.NOTFOUND).json({
        success: false,
        message: "No holiday found in the next 2 days",
      });
    }

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "HOLIDAYS",
      activity: "Holiday fetched successfully",
    });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Upcoming holiday found",
      data: holiday,
    });
  } catch (error) {
    next(error);
  }
};

const deleteHolidayController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const holiday = await deleteHoliday(id);

    await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "HOLIDAYS",
      activity: "Holiday deleted successfully",
    });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Holiday deleted successfully",
      data: holiday,
    });
  } catch (error) {
    next(error);
  }
};

export {
  createHolidayController,
  getAllHolidaysController,
  getUpcomingHolidayController,
  deleteHolidayController,
};