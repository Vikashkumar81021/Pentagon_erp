import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import{
    createJobApplicationController,
  getAllJobApplicationController,
} from "../controllers/JobApplication.controller.js";

const router = express.Router();

router.post("/jobApplication", authMiddleware, createJobApplicationController);

router.get("/jobApplication", authMiddleware, getAllJobApplicationController);

export default router;