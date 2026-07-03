import express from "express";

import {
  createHiringRequirementController,
  getHiringRequirementController,
  getHiringRequirementByIdController,
  updateHiringRequirementController,
  deleteHiringRequirementController,
  searchHiringRequirementController,
} from "../controllers/hiringRequirement.controller.js";

const router = express.Router();

router.post("/hiring/create", createHiringRequirementController);
router.get("/fetchhiring", getHiringRequirementController);
router.get("/hiringId/:id", getHiringRequirementByIdController);
router.put("/hiring/:id", updateHiringRequirementController);
router.delete("/hiring/:id", deleteHiringRequirementController);
router.get("/hiring/search", searchHiringRequirementController);

export default router;