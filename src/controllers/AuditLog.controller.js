import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";import {
  createAuditLog,
  getAuditLogs,
  getAuditLogById,
  updateAuditLog,
  deleteAuditLog,
} from "../services/AuditLog.service.js";

const createAuditLogController = asyncHandler(async (req, res) => {
const data = createAuditLogValidator.parse(req.body);
const auditLog = await createAuditLog(data);

  res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Audit Log created successfully",
    data: auditLog,
  });
});

const getAuditLogsController = asyncHandler(async (req, res) => {
  const auditLogs = await getAuditLogs();

  res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: auditLogs,
  });
});

const getAuditLogByIdController = asyncHandler(async (req, res) => {
  const auditLog = await getAuditLogById(req.params.id);

  res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: auditLog,
  });
});

const updateAuditLogController = asyncHandler(async (req, res) => {
const data = updateAuditLogValidator.parse(req.body);
const auditLog = await updateAuditLog(req.params.id, data);

  res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Audit Log updated successfully",
    data: auditLog,
  });
});

const deleteAuditLogController = asyncHandler(async (req, res) => {
  await deleteAuditLog(req.params.id);

  res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Audit Log deleted successfully",
  });
});

export {
  createAuditLogController,
  getAuditLogsController,
  getAuditLogByIdController,
  updateAuditLogController,
  deleteAuditLogController,
};