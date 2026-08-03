import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
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
} from "../controllers/ChartAccount.controller.js";
const router = express.Router();

router.post("/createChartAccount", authMiddleware, createChartAccountController);

router.post("/createAmountInBank", authMiddleware, createAmountInBankController);

router.get("/getChartAccounts", authMiddleware, getAllChartAccountsController);

router.get("/getChartAccount/:id", authMiddleware, getChartAccountByIdController);

router.get("/getChartByAccount", authMiddleware, getChartByAccountController);

router.get("/fetchAllBankAccounts", authMiddleware, getBankAccountsController);

router.get("/fetchBankAccounts", authMiddleware, fetchBankAccountController);

router.get("/filterChartAccount", authMiddleware, filterChartAccountController);

router.patch("/updateChartAccount/:id", authMiddleware, updateChartAccountController);

router.delete("/deleteChartAccount/:id", authMiddleware, deleteChartAccountController);
export default router;