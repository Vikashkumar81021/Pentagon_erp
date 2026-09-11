import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createSalesVisit,
  getSalesVisits,
  fetchclientname,
  updateSalesVisitStatus,
  getApprovedStatus,
  getRejectStatus,
} from "../services/salesVisit.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createSalesVisitController = asyncHandler(async (req, res) => {
  const data = {
    ...req.body,
    visit_date: new Date(req.body.visit_date),
    meeting_photo: req.file ? req.file.path : null,
    userId: Number(req.user.id),
  };
  const salesVisit = await createSalesVisit(data);

  await createAuditLog({
    userId: req.user.id,
    action: "CREATE",
    module: "SALES_VISIT",
    activity: "Sales Visit created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Sales Visit created successfully",
    data: salesVisit,
  });
});

const getSalesVisitsController = asyncHandler(async (req, res) => {
  const salesVisits = await getSalesVisits();
  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "SALES_VISIT",
    activity: "Sales Visit fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Sales Visits fetched successfully",
    data: salesVisits,
  });
});

const fetchclientnameController = asyncHandler(async (req, res) => {
  const salesVisits = await fetchclientname();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "SALES_VISIT",
    activity: "Client name fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Client Name fetched successfully",
    data: salesVisits,
  });
});

const updateSalesVisitStatusController = asyncHandler(async (req, res) => {
  const salesVisit = await updateSalesVisitStatus(req.body);

  await createAuditLog({
    userId: req.user.id,
    action: "UPDATE",
    module: "SALES_VISIT",
    activity: "Sales Visit status updated successfully",
  });

  res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Sales Visit updated successfully",
    data: salesVisit,
  });
});
const getApprovedStausController = asyncHandler(async (req, res) => {
  const approvedStatus = await getApprovedStatus();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "SALES_VISIT",
    activity: "Client approved status fetched successfully",
  });
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Client Approved Status fetched successfully",
    data: approvedStatus,
  });
});
const getRejectStatusController = asyncHandler(async (req, res) => {
  const getReject = await getRejectStatus();
  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "SALES_VISIT",
    activity: "Client Reject Status fetched successfully",
  });
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Client Reject Status fetched successfully",
    data: getReject,
  });
});
export {
  createSalesVisitController,
  getSalesVisitsController,
  fetchclientnameController,
  updateSalesVisitStatusController,
  getApprovedStausController,
  getRejectStatusController,
};
