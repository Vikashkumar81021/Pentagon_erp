import express from "express";
import {
  createEmployeeOnboardController,
  getEmployeeOnboardController,
  updateEmployeeOnboardController,
  deleteEmployeeOnboardController
} from "../controllers/EmployeeOnboard.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

/**
 * @swagger
 * tags:
 *   name: Employee Onboard
 *   description: Employee Onboarding APIs
 */

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Employee Onboard
 *   description: Employee Onboarding APIs
 */

router.post("/onboard/create", createEmployeeOnboardController);

/**
 * @swagger
 * /api/v1/fetchonboard:
 *   get:
 *     summary: Get All Employee Onboard Records
 *     tags: [Employee Onboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Employee onboard list fetched successfully
 *       401:
 *         description: Unauthorized
 */

router.get("/fetchonboard", getEmployeeOnboardController);

/**
 * @swagger
 * /api/v1/onboard/{id}:
 *   put:
 *     summary: Update Employee Onboard
 *     tags: [Employee Onboard]
 *     security:
 *       - bearerAuth: []
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
 *               emp_full_name:
 *                 type: string
 *                 example: Shobhit Rajput
 *               designation_role:
 *                 type: string
 *                 example: Senior Software Developer
 *               joining_date:
 *                 type: string
 *                 format: date
 *                 example: 2026-08-01
 *     responses:
 *       200:
 *         description: Employee onboard updated successfully
 *       404:
 *         description: Employee onboard not found
 *       401:
 *         description: Unauthorized
 */

router.put("/onboard/:id", updateEmployeeOnboardController);

/**
 * @swagger
 * /api/v1/onboard/{id}:
 *   delete:
 *     summary: Delete Employee Onboard
 *     tags: [Employee Onboard]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Employee onboard deleted successfully
 *       404:
 *         description: Employee onboard not found
 *       401:
 *         description: Unauthorized
 */

router.delete("/onboard/:id", deleteEmployeeOnboardController);

export default router;