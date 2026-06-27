import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  createInstitutionVisitController,
  getInstitutionVisitsController,
  updateInstitutionVisitController,
  deleteInstitutionVisitController,
} from "../controllers/InstitutionVisit.controller.js";

const router = express.Router();

router.post("/InstitutionVisit/create", createInstitutionVisitController);
router.get( "/InstitutionVisit", authMiddleware, getInstitutionVisitsController);
router.put("/Visitupdate/:id", authMiddleware, updateInstitutionVisitController);
router.delete("/delete/:id", authMiddleware, deleteInstitutionVisitController);
export default router;