import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createLeadController, fetchLeadsController } from "../controllers/leads.controller.js";

const router = express.Router();
router.get("/fetchLeads", authMiddleware, fetchLeadsController);
router.post("/createLead", authMiddleware, createLeadController);

export default router;
