import express from "express";

import {
  createHiringRequirementController,
  getHiringRequirementController,
  getHiringRequirementByIdController,
  updateHiringRequirementController,
  deleteHiringRequirementController,
  searchHiringRequirementController,
} from "../controllers/hiringRequirement.controller.js";

/**
 * @swagger
 * tags:
 *   name: Hiring Requirement
 *   description: Hiring Requirement Management APIs
 */

const router = express.Router();

/**
 * @swagger
 * /api/v1/hiring/create:
 *   post:
 *     summary: Create Hiring Requirement
 *     tags: [Hiring Requirement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - job_Title
 *               - department
 *               - job_type
 *               - roles_requirements
 *             properties:
 *               job_Title:
 *                 type: string
 *                 example: Software Developer
 *               department:
 *                 type: string
 *                 example: IT
 *               job_type:
 *                 type: string
 *                 enum:
 *                   - Full_time
 *                   - Part_time
 *                   - Contract
 *                   - Remote
 *                 example: Full_time
 *               job_status:
 *                 type: string
 *                 example: OPEN
 *               roles_requirements:
 *                 type: string
 *                 example: JavaScript, Node.js, Express, PostgreSQL, Prisma
 *     responses:
 *       201:
 *         description: Hiring Requirement Created Successfully
 *       400:
 *         description: Validation Error
 */

router.post("/hiring/create", createHiringRequirementController);

/**
 * @swagger
 * /api/v1/hiring/create:
 *   post:
 *     summary: Create Hiring Requirement
 *     tags: [Hiring Requirement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - job_Title
 *               - department
 *               - job_type
 *               - roles_requirements
 *             properties:
 *               job_Title:
 *                 type: string
 *                 example: Software Developer
 *               department:
 *                 type: string
 *                 example: IT
 *               job_type:
 *                 type: string
 *                 enum:
 *                   - Full_time
 *                   - Part_time
 *                   - Contract
 *                   - Remote
 *                 example: Full_time
 *               job_status:
 *                 type: string
 *                 example: OPEN
 *               roles_requirements:
 *                 type: string
 *                 example: JavaScript, Node.js, Express, PostgreSQL, Prisma
 *     responses:
 *       201:
 *         description: Hiring Requirement Created Successfully
 *       400:
 *         description: Validation Error
 */

router.get("/fetchhiring", getHiringRequirementController);

/**
 * @swagger
 * /api/v1/hiringId/{id}:
 *   get:
 *     summary: Get Hiring Requirement By ID
 *     tags: [Hiring Requirement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Hiring Requirement Found
 *       404:
 *         description: Hiring Requirement Not Found
 */

router.get("/hiringId/:id", getHiringRequirementByIdController);

/**
 * @swagger
 * /api/v1/hiring/{id}:
 *   put:
 *     summary: Update Hiring Requirement
 *     tags: [Hiring Requirement]
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
 *               job_Title:
 *                 type: string
 *               department:
 *                 type: string
 *               job_type:
 *                 type: string
 *                 enum:
 *                   - Full_time
 *                   - Part_time
 *                   - Contract
 *                   - Remote
 *               job_status:
 *                 type: string
 *                 example: CLOSED
 *               roles_requirements:
 *                 type: string
 *     responses:
 *       200:
 *         description: Hiring Requirement Updated Successfully
 *       404:
 *         description: Hiring Requirement Not Found
 */

router.put("/hiring/:id", updateHiringRequirementController);

/**
 * @swagger
 * /api/v1/hiring/{id}:
 *   delete:
 *     summary: Delete Hiring Requirement
 *     tags: [Hiring Requirement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Hiring Requirement Deleted Successfully
 *       404:
 *         description: Hiring Requirement Not Found
 */

router.delete("/hiring/:id", deleteHiringRequirementController);

/**
 * @swagger
 * /api/v1/hiring/search:
 *   get:
 *     summary: Search Hiring Requirement By Job Title
 *     tags: [Hiring Requirement]
 *     parameters:
 *       - in: query
 *         name: job_Title
 *         required: true
 *         schema:
 *           type: string
 *         example: Software
 *     responses:
 *       200:
 *         description: Matching Hiring Requirements
 */

router.get("/hiring/search", searchHiringRequirementController);

export default router;