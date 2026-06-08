import express from "express";
import { fetchDashboardStatsController } from "../controllers/dashboard.stats.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard APIs
 */

/**
 * @swagger
 * /api/v1/dashboard/stats:
 *   get:
 *     summary: Get dashboard statistics
 *     description: Returns dashboard summary statistics
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalLeads:
 *                   type: integer
 *                   example: 120
 *                 totalCustomers:
 *                   type: integer
 *                   example: 45
 *                 totalRevenue:
 *                   type: number
 *                   example: 250000
 *       401:
 *         description: Unauthorized
 */
router.get("/dashboard/stats", fetchDashboardStatsController);

export default router;
