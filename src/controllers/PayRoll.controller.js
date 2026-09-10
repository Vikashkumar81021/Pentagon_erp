import { STATUS_CODE } from "../constants/status.code.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";
import {
  createPayroll,
  getAllPayrolls,
  getPayrollById,
  updatePayroll,
  deletePayroll,
} from "../services/PayRoll.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createPayrollController = async (req, res, next) => {
    
  const payroll = await createPayroll(req.body);

  await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "PAY_ROLL",
      activity: "Payroll created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Payroll created successfully",
    data: serializeBigInt(payroll),
  });
};

const getAllPayrollsController = async (req, res, next) => {
  const payrolls = await getAllPayrolls();

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "PAY_ROLL",
      activity: "Payroll fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: payrolls.length,
    data: serializeBigInt(payrolls),
  });
};

const getPayrollByIdController = async (req, res, next) => {
  const payroll = await getPayrollById(req.params.id);

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "PAY_ROLL",
      activity: "Payroll fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: serializeBigInt(payroll),
  });
};

const updatePayrollController = async (req, res, next) => {
  const payroll = await updatePayroll(
    req.params.id,
    req.body
  );

  await createAuditLog({
      userId: req.user.id,
      action: "PATCH",
      module: "PAY_ROLL",
      activity: "Payroll updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Payroll updated successfully",
    data: serializeBigInt(payroll),
  });
};

const deletePayrollController = async (req, res, next) => {
  await deletePayroll(req.params.id);

  await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "PAY_ROLL",
      activity: "Payroll deleted successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Payroll deleted successfully",
  });
};

export {
  createPayrollController,
  getAllPayrollsController,
  getPayrollByIdController,
  updatePayrollController,
  deletePayrollController,
};