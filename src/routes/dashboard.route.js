import express from "express";
import {
  fetchDashboardStatsController,
  fetchClientAccountCRMStatsController,
  getApprovedLeaveStatsController,
} from "../controllers/dashboard.stats.controller.js";
import roleMiddleware from "../middleware/role.base.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/dashboard/stats", fetchDashboardStatsController);
router.get("/dashboard/client-account-stats",fetchClientAccountCRMStatsController,);
router.get("/dashboard/leave-stats", getApprovedLeaveStatsController);

export default router;
