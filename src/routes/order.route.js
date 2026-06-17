import express from "express";
import {
  createOrderController,
  fetchOdersController,
} from "../controllers/order.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createOrder", authMiddleware, createOrderController);
router.get("/fetchOrders", fetchOdersController);
export default router;
