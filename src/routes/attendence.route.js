import express from "express";
import {
  getAttendenceLogs,
  syncAttendanceController,
} from "../controllers/attendence.controller.js";

const router = express.Router();

router.get("/attendence", getAttendenceLogs);
router.post("/attendence", syncAttendanceController);

export default router;
