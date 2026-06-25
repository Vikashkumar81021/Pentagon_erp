import express from "express";
import {
  createSalesVisitController,
  getSalesVisitsController,
  updateSalesVisitController,
  deleteSalesVisitController,
  mySalesVisitsController,
} from "../controllers/salesVisit.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createSalesVisitController);
router.get("/get", authMiddleware, getSalesVisitsController);
router.put("/update/:id", updateSalesVisitController);
router.delete("/delete/:id", deleteSalesVisitController);
router.get("/my-visits", authMiddleware, mySalesVisitsController);
export default router;
