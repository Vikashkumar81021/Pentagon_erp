import express, { Router } from "express";

import {
  createJobApplicationController,
  getAllJobApplicationController,
  getJobApplicationCvController,
  updateJobApplicationSelectionController,
  filterJobApplications,
} from "../controllers/JobApplication.controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

// router.post("/jobApplication", authMiddleware, createJobApplicationController);
/**
 * @swagger
 * /jobApplication:
 *   post:
 *     summary: Create a job application
 *     description: Submit a job application with candidate details and CV.
 *     tags:
 *       - Job Application
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - hiringRequirementId
 *               - candidateName
 *               - email
 *               - mobile
 *               - cv
 *             properties:
 *               hiringRequirementId:
 *                 type: integer
 *                 example: 1
 *               candidateName:
 *                 type: string
 *                 example: Vikash Kumar
 *               email:
 *                 type: string
 *                 format: email
 *                 example: vikash@gmail.com
 *               mobile:
 *                 type: string
 *                 example: "9876543210"
 *               cv:
 *                 type: string
 *                 format: binary
 *                 description: Upload candidate CV in PDF format
 *     responses:
 *       201:
 *         description: Job application created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post(
  "/jobApplication",
  upload.single("cv"),
  createJobApplicationController,
);
router.get("/jobApplication/:id/cv", getJobApplicationCvController);
router.get("/jobApplication", getAllJobApplicationController);
router.patch("/updatejobApplication/:id", updateJobApplicationSelectionController);
router.get("/filterjobApplication", filterJobApplications);

export default router;
