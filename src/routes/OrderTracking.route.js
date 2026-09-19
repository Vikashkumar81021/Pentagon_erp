import express from "express";

import {
  createOrderTrackingController,
  getOrderTrackingsController,
  getOrderTrackingByIdController,
  updateOrderTrackingController,
  deleteOrderTrackingController,
} from "../controllers/OrderTracking.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createOrderTracking", authMiddleware, createOrderTrackingController);
router.get("/fetchOrderTrackings", authMiddleware, getOrderTrackingsController);
router.get("/getOrderTracking/:id", authMiddleware, getOrderTrackingByIdController);
router.put("/updateOrderTracking/:id", authMiddleware, updateOrderTrackingController);
router.delete("/deleteOrderTracking/:id", authMiddleware, deleteOrderTrackingController);

export default router;