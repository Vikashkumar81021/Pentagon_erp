import express from "express";
import {
  createTaskChecklistController,
  getTaskChecklistController,
} from "../controllers/TaskChecklist.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createChecklist", authMiddleware, createTaskChecklistController);

router.get("/fetchChecklist", authMiddleware, getTaskChecklistController);

export default router;