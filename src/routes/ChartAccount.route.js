import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
    createChartAccountController,
  getAllChartAccountsController,
  getChartAccountByIdController,
  getChartByAccountController,
  updateChartAccountController,
  deleteChartAccountController,
} from "../controllers/ChartAccount.controller.js";
const router = express.Router();

router.post("/createChartAccount", authMiddleware, createChartAccountController);

router.get("/getChartAccounts", authMiddleware, getAllChartAccountsController);

router.get("/getChartAccount/:id", authMiddleware, getChartAccountByIdController);

router.get("/getChartByAccount", authMiddleware, getChartByAccountController);

router.patch("/updateChartAccount/:id", authMiddleware, updateChartAccountController);

router.delete("/deleteChartAccount/:id", authMiddleware, deleteChartAccountController);
export default router;