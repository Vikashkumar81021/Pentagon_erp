import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

import {
  createHiringRequirement,
  getHiringRequirement,
  getHiringRequirementById,
  updateHiringRequirement,
  deleteHiringRequirement,
  searchHiringRequirement,
  getOpenHiringRequirements,
} from "../services/HiringRequirement.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

import {
  createHiringRequirementValidator,
  updateHiringRequirementValidator,
} from "../validators/HiringRequirement.validators.js";

const createHiringRequirementController = asyncHandler(async (req, res) => {
  const validatedData = createHiringRequirementValidator.parse(req.body);

  const result = await createHiringRequirement(validatedData);

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "CREARE",
  //   module: "HIRING_REQUIREMENT",
  //   activity: "Hiring requirement created successfully",
  // });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Hiring requirement created successfully",
    data: result,
  });
});

const getHiringRequirementController = asyncHandler(async (req, res) => {
  const result = await getHiringRequirement();

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "GET",
  //   module: "HIRING_REQUIREMENT",
  //   activity: "Hiring requirement fetched successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: result,
  });
});

const getHiringRequirementByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const result = await getHiringRequirementById(id);

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "GET",
  //   module: "HIRING_REQUIREMENT",
  //   activity: "Hiring requirement fetched successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: result,
  });
});

const updateHiringRequirementController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const validatedData = updateHiringRequirementValidator.parse(req.body);

  const result = await updateHiringRequirement(id, validatedData);

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "PUT",
  //   module: "HIRING_REQUIREMENT",
  //   activity: "Hiring requirement updated successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Updated successfully",
    data: result,
  });
});

const deleteHiringRequirementController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteHiringRequirement(id);

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "DELETE",
  //   module: "HIRING_REQUIREMENT",
  //   activity: "Hiring requirement deleted successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Deleted successfully",
  });
});

const searchHiringRequirementController = asyncHandler(async (req, res) => {
  const { job_Title } = req.query;

  const result = await searchHiringRequirement({ job_Title });

  // await createAuditLog({
  //   userId: req.user.id,
  //   action: "GET",
  //   module: "HIRING_REQUIREMENT",
  //   activity: "Hiring requirement fetched successfully",
  // });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: result,
  });
});

const getOpenHiringRequirementsController = asyncHandler(
  async (req, res, next) => {
    const hiringRequirements = await getOpenHiringRequirements();

    // await createAuditLog({
    //   userId: req.user.id,
    //   action: "GET",
    //   module: "HIRING_REQUIREMENT",
    //   activity: "Hiring requirement fetched successfully",
    // });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Open hiring requirements fetched successfully",
      data: hiringRequirements,
    });
  },
);

export {
  createHiringRequirementController,
  getHiringRequirementController,
  getHiringRequirementByIdController,
  updateHiringRequirementController,
  deleteHiringRequirementController,
  searchHiringRequirementController,
  getOpenHiringRequirementsController,
};
