import express from "express";

import {
  createJobApplicationController,
  getAllJobApplicationController,
  getJobApplicationCvController,
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
 *                 description: Candidate CV in PDF format
 *     responses:
 *       201:
 *         description: Job application created successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Hiring requirement not found
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

export default router;
