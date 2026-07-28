import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
    createLedgerTransactionController,
    getAllLedgerTransactionsController,
    getLedgerTransactionByIdController,
    getGeneralLedgerController,
    getTrialBalanceController,
    searchTrialBalanceController,
    filterTrialBalanceController,
    updateLedgerTransactionController,
    deleteLedgerTransactionController,
} from "../controllers/LedgerTransaction.controller.js";
const router = express.Router();

router.post("/createLedgerTransaction", authMiddleware , createLedgerTransactionController);

router.get("/getLedgerTransactions",authMiddleware, getAllLedgerTransactionsController);

router.get("/getLedgerTransaction/:id", authMiddleware, getLedgerTransactionByIdController);

router.get("/fetchLedgerEntry", authMiddleware, getGeneralLedgerController);

router.get("/fetchTrialBalance", authMiddleware, getTrialBalanceController);

router.get("/searchTrialBalance", authMiddleware, searchTrialBalanceController);

router.get("/filterTrialBalance", authMiddleware, filterTrialBalanceController);

router.put("/updateLedgerTransaction/:id", authMiddleware, updateLedgerTransactionController);

router.delete("/deleteLedgerTransaction/:id", authMiddleware, deleteLedgerTransactionController);
export default router;