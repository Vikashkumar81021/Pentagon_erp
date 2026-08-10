import express from "express";
import {
  createSalesVisitController,
  getSalesVisitsController,
  updateSalesVisitController,
  deleteSalesVisitController,
  mySalesVisitsController,
  getConvertedSalesVisitController,
  getFailedSalesVisistController,
  getSalesVisitsByTypeController,
} from "../controllers/salesVisit.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/create",authMiddleware, upload.single("meeting_photo"), createSalesVisitController);
router.get("/get", authMiddleware, getSalesVisitsController);
router.put("/update/:id", updateSalesVisitController);
router.delete("/delete/:id", deleteSalesVisitController);
router.get("/my-visits", authMiddleware, mySalesVisitsController);
router.get("/convert", authMiddleware, getConvertedSalesVisitController );
router.get("/failed", authMiddleware, getFailedSalesVisistController );
router.get("/fetchSalesVisitsByType", authMiddleware, getSalesVisitsByTypeController);
export default router;
