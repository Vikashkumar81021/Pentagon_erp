import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  createInstitutionVisitController,
  getInstitutionVisitsController,
} from "../controllers/InstitutionVisit.controller.js";

const router = express.Router();

router.post("/InstitutionVisit/create", createInstitutionVisitController);

router.get( "/InstitutionVisit", authMiddleware, getInstitutionVisitsController);

export default router;