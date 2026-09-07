import express from "express";
import {
  createSalesVisitController,
  getSalesVisitsController,
  fetchclientnameController,
  updateSalesVisitStatusController,
  getApprovedStausController,
  getRejectStatusController,
} from "../controllers/salesVisit.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.post(
  "/createSalesVisit",
  upload.single("meeting_photo"),
  authMiddleware,
  createSalesVisitController,
);
router.get("/fetchSalesVisits", authMiddleware, getSalesVisitsController);
router.get("/fetchclientname", authMiddleware, fetchclientnameController);
router.patch(
  "/updateApprovedStatus",
  authMiddleware,
  updateSalesVisitStatusController,
);
router.get("/fetch/approved", authMiddleware, getApprovedStausController);
router.get("/fetch/reject", authMiddleware, getRejectStatusController);
export default router;
