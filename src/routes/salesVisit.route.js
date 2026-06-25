import express from "express";
import {
     createSalesVisitController,
     getSalesVisitsController,
     updateSalesVisitController,
     deleteSalesVisitController,
} from "../controllers/salesVisit.controller.js";

const router = express.Router();

router.post("/create", createSalesVisitController);
router.get("/get", getSalesVisitsController);
router.put("/update/:id", updateSalesVisitController);
router.delete("/delete/:id", deleteSalesVisitController);
export default router;