import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createLeadController,
  fetchLeadsController,
} from "../controllers/leads.controller.js";

const router = express.Router();
/**
 * @swagger
 * /api/leads/fetchLeads:
 *   get:
 *     summary: Fetch all leads
 *     tags:
 *       - Leads
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Leads fetched successfully
 */
router.get("/fetchLeads", fetchLeadsController);
/**
 * @swagger
 * /api/leads/createLead:
 *   post:
 *     summary: Create a new lead
 *     tags:
 *       - Leads
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - organization_name
 *               - name_of_poc
 *               - designation
 *               - city
 *             properties:
 *               organization_name:
 *                 type: string
 *               name_of_poc:
 *                 type: string
 *               designation:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               notes:
 *                 type: string
 *               priority:
 *                 type: string
 *                 enum: [LOW, MEDIUM, HIGH]
 *     responses:
 *       201:
 *         description: Lead created successfully
 */
router.post("/createLead", authMiddleware, createLeadController);

export default router;
