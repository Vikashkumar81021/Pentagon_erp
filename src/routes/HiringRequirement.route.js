import express from "express";

import {
  createHiringRequirementController,
  getHiringRequirementController,
  updateHiringRequirementController,
  deleteHiringRequirementController,
} from "../controllers/hiringRequirement.controller.js";

const router = express.Router();

router.post("/hiring/create", createHiringRequirementController);
router.get("/fetchhiring", getHiringRequirementController);
router.put("/hiring/:id", updateHiringRequirementController);
router.delete("/hiring/:id", deleteHiringRequirementController);

export default router;