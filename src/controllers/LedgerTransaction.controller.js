import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import{
    createLedgerTransaction,
  getAllLedgerTransactions,
  getLedgerTransactionById,
  getGeneralLedger,
  getTrialBalance,
  updateLedgerTransaction,
  deleteLedgerTransaction,
} from "../services/LedgerTransaction.service.js";

const createLedgerTransactionController = async (req, res, next) => {
  try {
    const transaction = await createLedgerTransaction(req.body);

    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Ledger Transaction created successfully",
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

const getAllLedgerTransactionsController = async (req, res, next) => {
  try {
    const transactions = await getAllLedgerTransactions();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Ledger Transactions fetched successfully",
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    next(error);
  }
};

const getLedgerTransactionByIdController = async (req, res, next) => {
  try {
    const transaction = await getLedgerTransactionById(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Ledger Transaction fetched successfully",
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

const getGeneralLedgerController = async (req, res, next) => {
  try {
    const data = await getGeneralLedger();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "General Ledger fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getTrialBalanceController = async (req, res, next) => {
  try {
    const data = await getTrialBalance();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Trial Balance fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const updateLedgerTransactionController = async (req, res, next) => {
  try {
    const transaction = await updateLedgerTransaction(
      req.params.id,
      req.body
    );

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Ledger Transaction updated successfully",
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

const deleteLedgerTransactionController = async (req, res, next) => {
  try {
    const transaction = await deleteLedgerTransaction(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Ledger Transaction deleted successfully",
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

export {
  createLedgerTransactionController,
  getAllLedgerTransactionsController,
  getLedgerTransactionByIdController,
  getGeneralLedgerController,
  getTrialBalanceController,
  updateLedgerTransactionController,
  deleteLedgerTransactionController,
};