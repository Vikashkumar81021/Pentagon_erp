import express from "express";
import {
    createLeaveApplicantController,
  getLeaveApplicantsController,
  getLeaveApplicantByIdController,
  updateLeaveApplicantController,
  deleteLeaveApplicantController,
  getLeaveByDateController,
} from "../controllers/LeaveApplicant.controller.js";

const router = express.Router();

router.post("/createLeave", createLeaveApplicantController);

router.get("/fetchLeave", getLeaveApplicantsController);

router.get("/fetchLeave/:id", getLeaveApplicantByIdController);

router.patch("/updateLeave/:id", updateLeaveApplicantController);

router.delete("/deleteLeave/:id", deleteLeaveApplicantController);

router.get("/fetchLeaveByDate", getLeaveByDateController);

export default router;