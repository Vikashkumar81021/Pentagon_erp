import express from "express";
import { fetchDashboardStatsController } from "../controllers/dashboard.stats.controller.js";

const router = express.Router();


router.get("/dashboard/stats", fetchDashboardStatsController);

export default router;
