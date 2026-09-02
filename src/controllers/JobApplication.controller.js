import {
  createJobApplication,
  getJobApplicationCv,
  getJobApplications,
} from "../services/JobApplication.service.js";

import { createJobApplicationValidator } from "../validators/JobApplication.validator.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

const createJobApplicationController = asyncHandler(async (req, res) => {
  const payload = createJobApplicationValidator.parse(req.body);
  const application = await createJobApplication(payload, req.file);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    data: application,
  });
});

const getAllJobApplicationController = asyncHandler(async (req, res) => {
  const applications = await getJobApplications();
  console.log("application", applications);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: applications,
  });
});
const getJobApplicationCvController = asyncHandler(async (req, res) => {
  const cvUrl = await getJobApplicationCv(req.params.id);

  const response = await fetch(cvUrl);

  if (!response.ok) {
    throw new BadRequestError("Unable to fetch CV from Cloudinary");
  }

  const pdfBuffer = Buffer.from(await response.arrayBuffer());

  res.setHeader("Content-Type", "application/pdf");

  res.setHeader("Content-Disposition", "inline");

  res.setHeader("Content-Length", pdfBuffer.length);

  return res.send(pdfBuffer);
});
export {
  createJobApplicationController,
  getAllJobApplicationController,
  getJobApplicationCvController,
};
