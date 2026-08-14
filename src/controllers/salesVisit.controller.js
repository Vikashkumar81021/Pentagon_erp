import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { salesVisitValidator } from "../validators/salesVisit.validator.js";
import path from "path";
import {
  createSalesVisit,
  getSalesVisits,
  createTelecalling,
  getTelecalling,
} from "../services/salesVisit.service.js";

const createSalesVisitController = asyncHandler(async (req, res) => {
  console.log(req.body);
  const data = {
    ...req.body,
    visit_date: new Date(req.body.visit_date),
    meeting_photo: req.file ? req.file.path : null,
    userId: Number(req.user.id),
  };
  console.log(data);
  const salesVisit = await createSalesVisit(data);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Sales Visit created successfully",
    data: salesVisit,
  });
});

const getSalesVisitsController = asyncHandler(async (req, res) => {
  const salesVisits = await getSalesVisits();
  console.log("sales visis", salesVisits);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Sales Visits fetched successfully",
    data: salesVisits,
  });
});

const createTelecallingController = asyncHandler(async (req, res) => {
  const data = {
    ...req.body,
    visit_date: new Date(req.body.visit_date),
    userId: req.user.id,
  };

  const telecalling = await createTelecalling(data);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Telecalling created successfully",
    data: telecalling,
  });
});

const getTelecallingController = asyncHandler(async (req, res) => {
  const telecalling = await getTelecalling();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Telecalling fetched successfully",
    data: telecalling,
  });
});

export {
  createSalesVisitController,
  getSalesVisitsController,
  createTelecallingController,
  getTelecallingController,
};
