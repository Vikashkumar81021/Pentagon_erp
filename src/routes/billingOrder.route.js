import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  createBillingOrderController,
  getBillingOrdersController,
  updateBillingOrderController,
} from "../controllers/billingOrder.controller.js";

const router = Router();

router.post("/billing/create", authMiddleware, createBillingOrderController);

router.get("/fetchBillings", authMiddleware, getBillingOrdersController);

router.put("/updates/:id", authMiddleware, updateBillingOrderController);

export default router;