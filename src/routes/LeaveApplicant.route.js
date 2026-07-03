import express from "express";
import {
  createLeaveApplicantController,
  getLeaveApplicantsController,
  getLeaveApplicantByIdController,
  updateLeaveApplicantController,
  deleteLeaveApplicantController,
  getLeaveByDateController,
} from "../controllers/LeaveApplicant.controller.js";

/**
 * @swagger
 * tags:
 *   name: Leave Applicant
 *   description: Leave Management APIs
 */

const router = express.Router();

/**
 * @swagger
 * /api/v1/createLeave:
 *   post:
 *     summary: Apply Leave
 *     tags: [Leave Applicant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - applicant_name
 *               - leave_category
 *               - from_date
 *               - to_date
 *               - reason_absence
 *             properties:
 *               applicant_name:
 *                 type: string
 *                 example: Shobhit Rajput
 *               leave_category:
 *                 type: string
 *                 example: Casual Leave
 *               from_date:
 *                 type: string
 *                 format: date
 *                 example: 2026-07-01
 *               to_date:
 *                 type: string
 *                 format: date
 *                 example: 2026-07-05
 *               leave_approve:
 *                 type: string
 *                 enum:
 *                   - PENDING
 *                   - APPROVED
 *                   - REJECTED
 *                 example: PENDING
 *               reason_absence:
 *                 type: string
 *                 example: Family Function
 *     responses:
 *       201:
 *         description: Leave Applied Successfully
 */

router.post("/createLeave", createLeaveApplicantController);

/**
 * @swagger
 * /api/v1/fetchLeave:
 *   get:
 *     summary: Get All Leave Applications
 *     tags: [Leave Applicant]
 *     responses:
 *       200:
 *         description: Leave List
 */

router.get("/fetchLeave", getLeaveApplicantsController);

/**
 * @swagger
 * /api/v1/fetchLeave:
 *   get:
 *     summary: Get All Leave Applications
 *     tags: [Leave Applicant]
 *     responses:
 *       200:
 *         description: Leave List
 */

router.get("/fetchLeave/:id", getLeaveApplicantByIdController);

/**
 * @swagger
 * /api/v1/updateLeave/{id}:
 *   patch:
 *     summary: Update Leave
 *     tags: [Leave Applicant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               applicant_name:
 *                 type: string
 *               leave_category:
 *                 type: string
 *               from_date:
 *                 type: string
 *                 format: date
 *               to_date:
 *                 type: string
 *                 format: date
 *               leave_approve:
 *                 type: string
 *                 enum:
 *                   - PENDING
 *                   - APPROVED
 *                   - REJECTED
 *               reason_absence:
 *                 type: string
 *     responses:
 *       200:
 *         description: Leave Updated
 */

router.patch("/updateLeave/:id", updateLeaveApplicantController);

/**
 * @swagger
 * /api/v1/deleteLeave/{id}:
 *   delete:
 *     summary: Delete Leave
 *     tags: [Leave Applicant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Leave Deleted
 */

router.delete("/deleteLeave/:id", deleteLeaveApplicantController);

/**
 * @swagger
 * /api/v1/deleteLeave/{id}:
 *   delete:
 *     summary: Delete Leave
 *     tags: [Leave Applicant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Leave Deleted
 */

router.get("/fetchLeaveByDate", getLeaveByDateController);

export default router;