import express from "express";
import {
  createTaskChecklistController,
  getTaskChecklistController,
  toggleTaskCheckListController,
  getTaskChecklistByEmployeeController,
  getRecentPendingChecklistController,
} from "../controllers/TaskChecklist.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createChecklist", authMiddleware, createTaskChecklistController);
router.get("/fetchChecklist/recentChecklist", authMiddleware, getRecentPendingChecklistController);
router.get("/fetchChecklist", authMiddleware, getTaskChecklistController);
router.patch("/task-checklist/:taskId/toggle", toggleTaskCheckListController);
router.get("/fetchChecklist/:id", getTaskChecklistByEmployeeController);
export default router;
