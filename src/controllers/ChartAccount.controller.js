import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createChartAccount,
  createAmountInBank,
  getAllChartAccounts,
  getChartAccountById,
  getChartByAccount,
  getBankAccounts,
  fetchBankAccount,
  filterChartAccounts,
  updateChartAccount,
  deleteChartAccount,
} from "../services/ChartAccount.service.js";

const createChartAccountController = async (req, res, next) => {
  try {
    const account = await createChartAccount(req.body);

    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Chart Account created successfully",
      data: account,
    });
  } catch (error) {
    next(error);
  }
};

const createAmountInBankController = asyncHandler(async (req, res) => {
  const bank = await createAmountInBank(req.body);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Amount added successfully",
    data: bank,
  });
});

const getAllChartAccountsController = async (req, res, next) => {
  try {
    const accounts = await getAllChartAccounts();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Chart Accounts fetched successfully",
      count: accounts.length,
      data: accounts,
    });
  } catch (error) {
    next(error);
  }
};

const getChartAccountByIdController = async (req, res, next) => {
  try {
    const account = await getChartAccountById(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Chart Account fetched successfully",
      data: account,
    });
  } catch (error) {
    next(error);
  }
};

const getChartByAccountController = async (req, res, next) => {
  try {
    const account = await getChartByAccount(req.query.balanceType);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: account.length,
      data: account,
    });
  } catch (error) {
    next(error);
  }
};

const fetchBankAccountController = asyncHandler(async (req, res) => {
  const banks = await fetchBankAccount();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: banks.length,
    data: banks,
  });
});

const getBankAccountsController = asyncHandler(async (req, res) => {
  const banks = await getBankAccounts();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: banks.length,
    data: banks,
  });
});

const filterChartAccountController = asyncHandler(async (req, res) => {
  console.log("node",req.query)
  const accounts = await filterChartAccounts(req.query);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: accounts.length,
    data: accounts,
  });
});

const updateChartAccountController = async (req, res, next) => {
  try {
    const account = await updateChartAccount(req.params.id, req.body);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Chart Account updated successfully",
      data: account,
    });
  } catch (error) {
    next(error);
  }
};

const deleteChartAccountController = async (req, res, next) => {
  try {
    const account = await deleteChartAccount(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Chart Account deleted successfully",
      data: account,
    });
  } catch (error) {
    next(error);
  }
};

export {
  createChartAccountController,
  createAmountInBankController,
  getAllChartAccountsController,
  getChartAccountByIdController,
  getChartByAccountController,
  getBankAccountsController,
  fetchBankAccountController,
  filterChartAccountController,
  updateChartAccountController,
  deleteChartAccountController,
};
