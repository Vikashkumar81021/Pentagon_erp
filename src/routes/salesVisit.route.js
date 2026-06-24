import express from "express";
import {
     createSalesVisitController,
     getSalesVisitsController,
     updateSalesVisitController
} from "../controllers/salesVisit.controller.js";

const router = express.Router();

router.post("/create", createSalesVisitController);
router.get("/get", getSalesVisitsController);
router.put("/update/:id", updateSalesVisitController);
export default router;