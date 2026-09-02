import {
  createJobApplication,
  getJobApplicationCv,
  getJobApplications,
  updateJobApplicationSelection,
  getJobApplicationsBySelection,
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

const updateJobApplicationSelectionController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const { selected } = req.body;

    const application = await updateJobApplicationSelection(id, selected);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Job application selection updated successfully",
      data: application,
    });
  },
);

const filterJobApplications = async (req, res, next) => { 
  try { 
    const { selected } = req.query; 
    if (!selected) { 
      return res.status(400).json({ 
        success: false, 
        message: "selected query parameter is required", 
      }); 
    } 
    const applications = await getJobApplicationsBySelection(selected);

    res.status(200).json({ 
      success: true, 
      count: applications.length, 
      data: applications, 
    });
  } catch (error) {
     next(error);
    } 
};

export {
  createJobApplicationController,
  getAllJobApplicationController,
  getJobApplicationCvController,
  updateJobApplicationSelectionController,
  filterJobApplications,
};
