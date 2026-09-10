import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import{
    createLedgerTransaction,
  getAllLedgerTransactions,
  getLedgerTransactionById,
  getGeneralLedger,
  getTrialBalance,
  searchTrialBalance,
  filterTrialBalance,
  updateLedgerTransaction,
  deleteLedgerTransaction,
} from "../services/LedgerTransaction.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createLedgerTransactionController = async (req, res, next) => {
  try {
    const transaction = await createLedgerTransaction(req.body);

    await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "LEDGER_TRANSACTION",
      activity: "Ledger Transaction created successfully",
  });

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

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "LEDGER_TRANSACTION",
      activity: "Ledger Transaction fetched successfully",
  });

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

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "LEDGER_TRANSACTION",
      activity: "Ledger Transaction fetched successfully",
  });

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

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "LEDGER_TRANSACTION",
      activity: "General Ledger fetched successfully",
  });

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

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "LEDGER_TRANSACTION",
      activity: "Trial Balance fetched successfully",
  });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Trial Balance fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const filterTrialBalanceController = asyncHandler(async (req, res) => {
  const filters = req.query;

  const trialBalance = await filterTrialBalance(filters);

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "LEDGER_TRANSACTION",
      activity: "Ledger Transaction fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: trialBalance.length,
    data: trialBalance,
  });
});

const searchTrialBalanceController = asyncHandler(async (req, res) => {
  const search = req.query;

  const searchData = await searchTrialBalance(search);

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "LEDGER_TRANSACTION",
      activity: "Ledger Transaction fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: searchData.length,
    data: searchData,
  });
});

const updateLedgerTransactionController = async (req, res, next) => {
  try {
    const transaction = await updateLedgerTransaction(
      req.params.id,
      req.body
    );

    await createAuditLog({
      userId: req.user.id,
      action: "PUT",
      module: "LEDGER_TRANSACTION",
      activity: "Ledger Transaction updated successfully",
  });

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

    await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "LEDGER_TRANSACTION",
      activity: "Ledger Transaction deleted successfully",
  });

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
  searchTrialBalanceController,
  filterTrialBalanceController,
  updateLedgerTransactionController,
  deleteLedgerTransactionController,
};