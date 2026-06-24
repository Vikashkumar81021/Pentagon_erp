import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { salesVisitValidator } from "../validators/salesVisit.validator.js";
import {
  getSalesVisitsService,
  salesVisitService,
  updateSalesVisit,
} from "../services/salesVisit.service.js";

const createSalesVisitController = asyncHandler(async (req, res, next) => {
  const validateData = salesVisitValidator.parse(req.body);
  const salesVisit = await salesVisitService(validateData);
  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Sales Visit created successfully",
    data: salesVisit,
  });
});
const getSalesVisitsController = asyncHandler(async (req, res, next) => {
  const salesVisits = await getSalesVisitsService();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Sales Visits fetched successfully",
    data: salesVisits,
  });
});
const updateSalesVisitController = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const validateData = salesVisitValidator.parse(req.body);
  const salesVisit = await updateSalesVisit(id, validateData);
  return res.status(STATUS_CODE.OK).json({
    success: true,
    message: "Sales Visit updated successfully",
    data: salesVisit,
  });
});
export {
  createSalesVisitController,
  getSalesVisitsController,
  updateSalesVisitController,
};
