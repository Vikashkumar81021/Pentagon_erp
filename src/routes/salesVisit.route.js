import express from "express";
import {
     createSalesVisitController,
} from "../controllers/salesVisit.controller.js";

const router = express.Router();

router.post("/create", createSalesVisitController);
export default router;