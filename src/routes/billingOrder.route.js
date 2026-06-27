import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  createBillingOrderController,
  getBillingOrdersController,
} from "../controllers/billingOrder.controller.js";

const router = Router();

router.post("/billing/create", authMiddleware, createBillingOrderController);

router.get("/fetchBillings", authMiddleware, getBillingOrdersController);

export default router;