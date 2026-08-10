import express from "express";

import {
  createFollowupController,
  getFollowupController,
} from "../controllers/calltype.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/callToAction", authMiddleware, createFollowupController);

router.get("/callToAction", authMiddleware, getFollowupController);

export default router;