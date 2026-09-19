import express from "express";

import {
  createTelecallingController,
  getAllTelecallingController,
  getApprovedTelecallingController,
  getRejectedTelecallingController,
  updateTelecallingController,
  deleteTelecallingController,
} from "../controllers/teleCalling.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createTelecalling", authMiddleware, createTelecallingController);
router.get("/fetchAllTelecalling", authMiddleware, getAllTelecallingController);
router.get("/getApprovedTelecalling", authMiddleware, getApprovedTelecallingController);
router.get("/getRejectedTelecalling", authMiddleware, getRejectedTelecallingController);
router.patch("/updateTelecalling/:id",authMiddleware, updateTelecallingController);
router.delete("/deleteTelecalling/:id", authMiddleware, deleteTelecallingController);

export default router;