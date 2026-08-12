import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { salesVisitValidator } from "../validators/salesVisit.validator.js";
import path from "path";
import {
  getSalesVisitsService,
  salesVisitService,
  updateSalesVisit,
  deleteSalesVisit,
  mySalesVisitsService,
  getConvertedLeads,
  getSalesVisitsByType,
  getFailedLeads,
} from "../services/salesVisit.service.js";

const createSalesVisitController = asyncHandler(async (req, res, next) => {
  
  const data = {
    ...req.body,

    meeting_photo: req.file
      ? `/uploads/${req.file.filename}`
      : undefined,

   userId: Number(req.user.id),
  };
  const validateData = salesVisitValidator.parse(data);

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
  
  const saleVisit = await updateSalesVisit(id, req.body);
  
  // const salesVisit = await updateSalesVisit(id, validateData);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Sales Visit updated successfully",
    data: saleVisit,
  });
});
const deleteSalesVisitController = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  await deleteSalesVisit(id);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Sales Visit deleted successfully",
  });
});
const mySalesVisitsController = asyncHandler(async (req, res) => {
  const salesVisits = await mySalesVisitsService(req.user.id);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "My sales visits fetched successfully",
    data: salesVisits,
  });
});
const getConvertedSalesVisitController = asyncHandler(async (req, res, next) => {
  const leads = await getConvertedLeads();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Converted leads fetched successfully",
    data: leads,
  });
});

const getFailedSalesVisistController = asyncHandler(async (req, res, next) => {
  const leads = await getConvertedLeads();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Failed leads fetched successfully",
    data: leads,
  });
});

const getSalesVisitsByTypeController = async (req, res, next) => {
  try {
    const { type } = req.query;

    const salesVisits = await getSalesVisitsByType(type);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: salesVisits.length,
      data: salesVisits,
    });
  } catch (error) {
    next(error);
  }
};

export {
  createSalesVisitController,
  getSalesVisitsController,
  updateSalesVisitController,
  deleteSalesVisitController,
  mySalesVisitsController,
  getConvertedSalesVisitController,
  getFailedSalesVisistController,
  getSalesVisitsByTypeController,
};
