// import express from "express";

// import {
//   createHiringRequirementController,
//   getHiringRequirementController,
//   getHiringRequirementByIdController,
//   updateHiringRequirementController,
//   deleteHiringRequirementController,
//   searchHiringRequirementController,
//   getOpenHiringRequirementsController,
// } from "../controllers/HiringRequirement.controller.js";

// const router = express.Router();

// router.post("/hiring/create", createHiringRequirementController);
// router.get("/fetchhiring", getHiringRequirementController);
// router.get("/hiringId/:id", getHiringRequirementByIdController);
// router.put("/hiring/:id", updateHiringRequirementController);
// router.delete("/hiring/:id", deleteHiringRequirementController);
// router.get("/hiring/search", searchHiringRequirementController);
// router.get("/fetchOpenHiringRequirement", getOpenHiringRequirementsController);

// export default router;
import express from "express";

import {
  createHiringRequirementController,
  getHiringRequirementController,
  getHiringRequirementByIdController,
  updateHiringRequirementController,
  deleteHiringRequirementController,
  searchHiringRequirementController,
  getOpenHiringRequirementsController,
} from "../controllers/HiringRequirement.controller.js";

const router = express.Router();

/**
 * @swagger
 * /hiring/create:
 *   post:
 *     summary: Create Hiring Requirement
 *     tags:
 *       - Hiring Requirement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HiringRequirementCreate'
 *     responses:
 *       201:
 *         description: Hiring requirement created successfully
 *       400:
 *         description: Validation error
 */
router.post("/hiring/create", createHiringRequirementController);

/**
 * @swagger
 * /fetchhiring:
 *   get:
 *     summary: Get All Hiring Requirements
 *     tags:
 *       - Hiring Requirement
 *     responses:
 *       200:
 *         description: Hiring requirements fetched successfully
 */
router.get("/fetchhiring", getHiringRequirementController);
router.get("/hiringId/:id", getHiringRequirementByIdController);
router.put("/hiring/:id", updateHiringRequirementController);
router.delete("/hiring/:id", deleteHiringRequirementController);
router.get("/hiring/search", searchHiringRequirementController);
router.get("/fetchOpenHiringRequirement", getOpenHiringRequirementsController);

export default router;