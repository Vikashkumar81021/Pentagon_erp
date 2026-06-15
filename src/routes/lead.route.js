import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  actionConvertedController,
  createLeadController,
  fetchLeadsController,
  getConvertedLeadsController,
  leadDiscussionController,
} from "../controllers/leads.controller.js";

const router = express.Router();

router.get("/fetchLeads", fetchLeadsController);

router.post("/createLead", createLeadController);
router.get("/convertedLeads", authMiddleware, getConvertedLeadsController);
router.patch("/:leadId/discusion", leadDiscussionController);
router.patch("/:leadId/converted", actionConvertedController);
export default router;
