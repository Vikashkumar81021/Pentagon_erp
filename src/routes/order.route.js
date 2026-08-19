import express, { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createOrderController,
  getOrdersController,
  updateOrderController,
  deleteOrderController,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/orderCreate", createOrderController);

router.get("/fetchOrders", authMiddleware, getOrdersController);

router.patch("/updateOrder/:id", authMiddleware, updateOrderController);

router.delete("/deleteOrder/:id", authMiddleware, deleteOrderController);

export default router;