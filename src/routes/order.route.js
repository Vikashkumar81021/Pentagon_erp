import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createOrderController,
  getOrdersController,
  deleteOrderController,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/orderCreate", createOrderController);

router.get("/fetchOrders", authMiddleware, getOrdersController);

router.delete("/deleteOrder/:id", authMiddleware, deleteOrderController);

export default router;