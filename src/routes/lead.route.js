import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createLeadController,
  fetchLeadsController,
  getConvertedLeadsController,
} from "../controllers/leads.controller.js";

const router = express.Router();

router.get("/fetchLeads", fetchLeadsController);

router.post("/createLead", createLeadController);
router.get("/convertedLeads", getConvertedLeadsController);

export default router;
