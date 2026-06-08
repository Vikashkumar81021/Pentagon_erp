import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createLeadController } from "../controllers/leads.controller.js";

const router = express.Router();
router.post("/createLead", authMiddleware, createLeadController);

export default router;
