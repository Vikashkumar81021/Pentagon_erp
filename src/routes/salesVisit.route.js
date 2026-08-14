import express from "express";
import {
  createSalesVisitController,
  getSalesVisitsController,
  fetchclientnameController,
} from "../controllers/salesVisit.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/createSalesVisit", upload.single("meeting_photo"),authMiddleware, createSalesVisitController);
router.get("/fetchSalesVisits", authMiddleware, getSalesVisitsController);
router.get("/fetchclientname", authMiddleware, fetchclientnameController);
export default router;
