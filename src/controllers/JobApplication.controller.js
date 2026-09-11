import {
  createJobApplication,
  getJobApplicationCv,
  getJobApplications,
  updateJobApplicationSelection,
  getJobApplicationsBySelection,
  deleteJobApplication,
  getJobApplicationsByBackGroundCheck,
  getJobApplicationsByHired,
} from "../services/JobApplication.service.js";

import { createJobApplicationValidator } from "../validators/JobApplication.validator.js";
import { createAuditLog } from "../services/AuditLog.service.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

const createJobApplicationController = asyncHandler(async (req, res) => {
  const payload = createJobApplicationValidator.parse(req.body);
  const application = await createJobApplication(payload, req.file);

  // await createAuditLog({
  //     userId: req.user.id,
  //     action: "CREATE",
  //     module: "JOB_APPLICATION",
  //     activity: "Job Application created successfully",
  // });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    data: application,
  });
});

const getAllJobApplicationController = asyncHandler(async (req, res) => {
  const applications = await getJobApplications();

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "GET",
  //   module: "JOB_APPLICATION",
  //   activity: "Job Application fetched successfully",
  // });

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
    const { status } = req.body;

    const application = await updateJobApplicationSelection(id, status);

    // await createAuditLog({
    //   userId: req.user.id,
    //   action: "PATCH",
    //   module: "JOB_APPLICATION",
    //   activity: "Job application selection updated successfully",
    // });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Job application selection updated successfully",
      data: application,
    });
  },
);

const filterJobApplications = async (req, res, next) => {
  try {
    const { status } = req.query;
    if (!status) {
      return res.status(STATUS_CODE.BAD_REQUESTS).json({
        success: false,
        message: "selected query parameter is required",
      });
    }
    const applications = await getJobApplicationsBySelection(status);

    // await createAuditLog({
    //   userId: req.user.id,
    //   action: "GET",
    //   module: "JOB_APPLICATION",
    //   activity: "Job application fetched successfully",
    // });

    res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    next(error);
  }
};

const removeJobApplication = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteJobApplication(id);

    // await createAuditLog({
    //   userId: req.user.id,
    //   action: "DELETE",
    //   module: "JOB_APPLICATION",
    //   activity: "Job application deleted successfully",
    // });

    res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

const fetchJobApplicationsbybackgroundcheck = async (req, res, next) => {  
    const applications = await getJobApplicationsByBackGroundCheck();

  //   await createAuditLog({
  //     userId: req.user.id,
  //     action: "GET",
  //     module: "JOB_APPLICATION",
  //     activity: "Job application fetched successfully",
  // });

    res.status(STATUS_CODE.SUCCESS).json({ 
      success: true, 
      count: applications.length, 
      data: applications, 
    });
};

const fetchJobApplicationsbyhired = async (req, res, next) => {  
    const applications = await getJobApplicationsByHired();

  //   await createAuditLog({
  //     userId: req.user.id,
  //     action: "GET",
  //     module: "JOB_APPLICATION",
  //     activity: "Job application fetched successfully",
  // });

    res.status(STATUS_CODE.SUCCESS).json({ 
      success: true, 
      count: applications.length, 
      data: applications, 
    });
};

export {
  createJobApplicationController,
  getAllJobApplicationController,
  getJobApplicationCvController,
  updateJobApplicationSelectionController,
  filterJobApplications,
  removeJobApplication,
  fetchJobApplicationsbybackgroundcheck,
  fetchJobApplicationsbyhired,
};
