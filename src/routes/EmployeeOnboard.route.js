import express from "express";
import {
  createEmployeeOnboardController,
  getEmployeeOnboardController,
  updateEmployeeOnboardController,
  deleteEmployeeOnboardController,
  getTaskChecklistController,
  updateTaskChecklistController,
} from "../controllers/EmployeeOnboard.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/onboard/create",authMiddleware, createEmployeeOnboardController);
router.get("/fetchonboard", authMiddleware, getEmployeeOnboardController);
router.put("/onboard/:id", authMiddleware, updateEmployeeOnboardController);
router.delete("/onboard/:id", authMiddleware, deleteEmployeeOnboardController);
router.get("/taskChecklist", authMiddleware, getTaskChecklistController);
router.put("/taskChecklist/:id", authMiddleware, updateTaskChecklistController);

export default router;