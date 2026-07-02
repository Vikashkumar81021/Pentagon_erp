import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
    createLeaveApplicantValidator,
    updateLeaveApplicantValidator,
} from "../validators/LeaveApplicant.validator.js";
import {
    createLeaveApplicantService,
    getLeaveApplicantsService,
    getLeaveApplicantByIdService,
    updateLeaveApplicantService,
    deleteLeaveApplicantService,
} from "../services/LeaveApplicant.service.js";

const createLeaveApplicantController = asyncHandler(async (req, res) => {
  const validateData = createLeaveApplicantValidator.parse(req.body);

  const leave = await createLeaveApplicantService(validateData);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Leave applied successfully",
    data: leave,
  });
});

const getLeaveApplicantsController = asyncHandler(async (req, res) => {
  const leaves = await getLeaveApplicantsService();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Leave applications fetched successfully",
    data: leaves,
    leaveCount:leaves.length
  });
});

const getLeaveApplicantByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const leave = await getLeaveApplicantByIdService(id);

  if (!leave) {
    return res.status(404).json({
      success: false,
      message: "Leave application not found",
    });
  }
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Leave application fetched successfully",
    data: leave,
  });
});

const updateLeaveApplicantController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const validateData = updateLeaveApplicantValidator.parse(req.body);

  const leave = await updateLeaveApplicantService(id, validateData);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Leave updated successfully",
    data: leave,
  });
});

const deleteLeaveApplicantController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteLeaveApplicantService(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Leave deleted successfully",
  });
});

export {
  createLeaveApplicantController,
  getLeaveApplicantsController,
  getLeaveApplicantByIdController,
  updateLeaveApplicantController,
  deleteLeaveApplicantController,
};