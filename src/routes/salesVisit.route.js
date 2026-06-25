import express from "express";
import {
     createSalesVisitController,
     getSalesVisitsController,
     updateSalesVisitController,
     deleteSalesVisitController,
     getcurrentuserController,
} from "../controllers/salesVisit.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", createSalesVisitController);
router.get("/get",authMiddleware, getSalesVisitsController);
router.put("/update/:id", updateSalesVisitController);
router.delete("/delete/:id", deleteSalesVisitController);
router.get("/my-visits", authMiddleware, getcurrentuserController);
export default router;