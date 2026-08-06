import { STATUS_CODE } from "../constants/status.code.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";
import {
  createPayroll,
  getAllPayrolls,
  getPayrollById,
  updatePayroll,
  deletePayroll,
} from "../services/PayRoll.service.js";

const createPayrollController = async (req, res, next) => {
    
  const payroll = await createPayroll(req.body);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Payroll created successfully",
    data: serializeBigInt(payroll),
  });
};

const getAllPayrollsController = async (req, res, next) => {
  const payrolls = await getAllPayrolls();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: payrolls.length,
    data: serializeBigInt(payrolls),
  });
};

const getPayrollByIdController = async (req, res, next) => {
  const payroll = await getPayrollById(req.params.id);

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

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Payroll updated successfully",
    data: serializeBigInt(payroll),
  });
};

const deletePayrollController = async (req, res, next) => {
  await deletePayroll(req.params.id);

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