import {
  createJobApplication,
  getJobApplications,
} from "../services/JobApplication.service.js";

import {
    createJobApplicationValidator 
} from "../validators/JobApplication.validator.js";

import {asyncHandler} from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

const createJobApplicationController = asyncHandler(async (req, res) => {
  const payload = createJobApplicationValidator.parse(req.body);

  const application = await createJobApplication(payload);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    data: application,
  });
});

const getAllJobApplicationController = asyncHandler(async (req, res) => {
  const applications = await getJobApplications();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: applications,
  });
});

export {
  createJobApplicationController,
  getAllJobApplicationController,
};