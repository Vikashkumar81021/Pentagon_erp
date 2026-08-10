import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createIncomingBill,
  getAllIncomingBills,
  getIncomingBillById,
  updateIncomingBill,
  deleteIncomingBill,
} from "../services/IncomingBill.service.js";

const createIncomingBillController = asyncHandler(async (req, res) => {
  const bill = await createIncomingBill(req.body);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Incoming Bill created successfully",
    data: bill,
  });
});

const getAllIncomingBillsController = asyncHandler(async (req, res) => {
  const bills = await getAllIncomingBills();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: bills.length,
    data: bills,
  });
});

const getIncomingBillByIdController = asyncHandler(async (req, res) => {
  const bill = await getIncomingBillById(req.params.id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: bill,
  });
});

const updateIncomingBillController = asyncHandler(async (req, res) => {
  const bill = await updateIncomingBill(
    req.params.id,
    req.body
  );

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Incoming Bill updated successfully",
    data: bill,
  });
});

const deleteIncomingBillController = asyncHandler(async (req, res) => {
  await deleteIncomingBill(req.params.id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Incoming Bill deleted successfully",
  });
});

export {
  createIncomingBillController,
  getAllIncomingBillsController,
  getIncomingBillByIdController,
  updateIncomingBillController,
  deleteIncomingBillController,
};