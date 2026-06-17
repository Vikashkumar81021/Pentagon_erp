import express from "express";
import {
  createOrderController,
  fetchOdersController,
  updateOrderController,
  deleteOrderController,
} from "../controllers/order.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createOrder", authMiddleware, createOrderController);
router.get("/fetchOrders", authMiddleware, fetchOdersController);
router.put("/updateOrder/:id", authMiddleware, updateOrderController);
router.delete("/deleteOrder/:id", authMiddleware, deleteOrderController);
export default router;
