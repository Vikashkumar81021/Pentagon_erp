import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { salesVisitValidator } from "../validators/salesVisit.validator.js";
import path from "path";
import {
  createSalesVisit,
  getSalesVisits,
} from "../services/salesVisit.service.js";

const createSalesVisitController = asyncHandler(async (req, res) => {
  const data = {
    ...req.body,
    visit_date: new Date(req.body.visit_date),
    meeting_photo: req.file ? req.file.path : null,
    userId: Number(req.user.id),
  };
  const salesVisit = await createSalesVisit(data);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Sales Visit created successfully",
    data: salesVisit,
  });
});

const getSalesVisitsController = asyncHandler(async (req, res) => {
  const salesVisits = await getSalesVisits();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Sales Visits fetched successfully",
    data: salesVisits,
  });
});

export {
  createSalesVisitController,
  getSalesVisitsController,
};
