import express from "express";
import { fetchDashboardStatsController, fetchClientAccountCRMStatsController } from "../controllers/dashboard.stats.controller.js";

const router = express.Router();


router.get("/dashboard/stats", fetchDashboardStatsController);
router.get("/dashboard/client-account-stats", fetchClientAccountCRMStatsController);

export default router;
