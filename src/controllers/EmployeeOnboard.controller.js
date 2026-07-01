import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

import {
  createEmployeeOnboard,
  fetchEmployeeOnboards,
  updateEmployeeOnboard,
  deleteEmployeeOnboard,
} from "../services/EmployeeOnboard.service.js";

import {
  createEmployeeOnboardValidator,
  updateEmployeeOnboardValidator,
} from "../validators/EmployeeOnboard.validator.js";

const createEmployeeOnboardController = asyncHandler(async (req, res) => {
  const validatedData = createEmployeeOnboardValidator.parse(req.body);

  const employee = await createEmployeeOnboard(validatedData);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Employee Onboard created successfully",
    data: employee,
  });
});

const getEmployeeOnboardController = asyncHandler(async (req, res) => {
  const employees = await fetchEmployeeOnboards();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: employees.length,
    data: employees,
  });
});

const updateEmployeeOnboardController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const validatedData = updateEmployeeOnboardValidator.parse(req.body);

  const employee = await updateEmployeeOnboard(id, validatedData);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee Onboard updated successfully",
    data: employee,
  });
});

const deleteEmployeeOnboardController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteEmployeeOnboard(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee Onboard deleted successfully",
  });
});

export {
    createEmployeeOnboardController,
    getEmployeeOnboardController,
    updateEmployeeOnboardController,
    deleteEmployeeOnboardController
};