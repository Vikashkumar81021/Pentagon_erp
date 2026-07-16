import express from "express";
import {
  createTaskChecklistController,
  getTaskChecklistController,
  toggleTaskCheckListController,
  getTaskChecklistByEmployeeController,
} from "../controllers/TaskChecklist.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createChecklist", authMiddleware, createTaskChecklistController);

router.get("/fetchChecklist", authMiddleware, getTaskChecklistController);
router.patch("/task-checklist/:taskId/toggle", toggleTaskCheckListController);
router.get("/fetchChecklistId/:id", getTaskChecklistByEmployeeController)
export default router;
