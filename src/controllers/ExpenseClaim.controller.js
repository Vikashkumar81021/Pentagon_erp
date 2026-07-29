import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createExpenseClaim,
  getAllExpenseClaims,
  getExpenseClaimById,
  updateExpenseClaim,
  deleteExpenseClaim,
} from "../services/ExpenseClaim.service.js";

const createExpenseClaimController = asyncHandler(async (req, res) => {
  const claim = await createExpenseClaim(req.body);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Expense Claim created successfully",
    data: claim,
  });
});

const getAllExpenseClaimsController = asyncHandler(async (req, res) => {
  const claims = await getAllExpenseClaims();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: claims.length,
    data: claims,
  });
});

const getExpenseClaimByIdController = asyncHandler(async (req, res) => {
  const claim = await getExpenseClaimById(req.params.id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: claim,
  });
});

const updateExpenseClaimController = asyncHandler(async (req, res) => {
  const claim = await updateExpenseClaim(req.params.id, req.body);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Expense Claim updated successfully",
    data: claim,
  });
});

const deleteExpenseClaimController = asyncHandler(async (req, res) => {
  await deleteExpenseClaim(req.params.id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Expense Claim deleted successfully",
  });
});

export {
  createExpenseClaimController,
  getAllExpenseClaimsController,
  getExpenseClaimByIdController,
  updateExpenseClaimController,
  deleteExpenseClaimController,
};