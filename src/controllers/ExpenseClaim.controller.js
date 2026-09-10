import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createExpenseClaim,
  getAllExpenseClaims,
  getExpenseClaimById,
  updateExpenseClaim,
  deleteExpenseClaim,
} from "../services/ExpenseClaim.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createExpenseClaimController = asyncHandler(async (req, res) => {
  const claim = await createExpenseClaim(req.body);

  await createAuditLog({
    userId: req.user.id,
    action: "CREATE",
    module: "EXPENSE_CLAIM",
    activity: "Expense Claim created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Expense Claim created successfully",
    data: claim,
  });
});

const getAllExpenseClaimsController = asyncHandler(async (req, res) => {
  const claims = await getAllExpenseClaims();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EXPENSE_CLAIM",
    activity: "Expense Claim fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: claims.length,
    data: claims,
  });
});

const getExpenseClaimByIdController = asyncHandler(async (req, res) => {
  const claim = await getExpenseClaimById(req.params.id);

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EXPENSE_CLAIM",
    activity: "Expense Claim fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: claim,
  });
});

const updateExpenseClaimController = asyncHandler(async (req, res) => {
  const claim = await updateExpenseClaim(req.params.id, req.body);

  await createAuditLog({
    userId: req.user.id,
    action: "PATCH",
    module: "EXPENSE_CLAIM",
    activity: "Expense Claim UPDATED successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Expense Claim updated successfully",
    data: claim,
  });
});

const deleteExpenseClaimController = asyncHandler(async (req, res) => {
  await deleteExpenseClaim(req.params.id);

  await createAuditLog({
    userId: req.user.id,
    action: "DELETE",
    module: "EXPENSE_CLAIM",
    activity: "Expense Claim deleted successfully",
  });

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