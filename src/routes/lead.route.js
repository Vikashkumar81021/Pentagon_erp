import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createLeadController,
  fetchLeadsController,
} from "../controllers/leads.controller.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Leads
 *   description: Lead Management APIs
 */
/**
 * @swagger
 * /api/v1/leads/createLead:
 *   post:
 *     summary: Create a new lead
 *     tags: [Leads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Lead created successfully
 */
router.get("/fetchLeads", fetchLeadsController);
/**
 * @swagger
 * /api/v1/leads/fetchLeads:
 *   get:
 *     summary: Fetch all leads
 *     tags: [Leads]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Leads fetched successfully
 */
router.post("/createLead", authMiddleware, createLeadController);

export default router;
