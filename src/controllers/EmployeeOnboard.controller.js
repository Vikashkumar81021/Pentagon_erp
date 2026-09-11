import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";

import {
  createEmployeeOnboard,
  fetchEmployeeOnboards,
  updateEmployeeOnboard,
  deleteEmployeeOnboard,
  getTaskChecklist,
  updateTaskChecklist,
  getEmployeeOnboardById,
} from "../services/EmployeeOnboard.service.js";

import { createAuditLog } from "../services/AuditLog.service.js";

import {
  createEmployeeOnboardValidator,
  updateEmployeeOnboardValidator,
} from "../validators/EmployeeOnboard.validator.js";

import { updateTaskChecklistValidator } from "../validators/TaskChecklist.validator.js";


const createEmployeeOnboardController = asyncHandler(async (req, res) => {
  const validatedData = createEmployeeOnboardValidator.parse(req.body);

  const employee = await createEmployeeOnboard(validatedData);

  await createAuditLog({
    userId: req.user.id,
    action: "CREATE",
    module: "EMPLOYEE_ONBOARD",
    activity: "Employee Onboard created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Employee Onboard created successfully",
    data: serializeBigInt(employee),
  });
});


const getEmployeeOnboardController = asyncHandler(async (req, res) => {
  const employees = await fetchEmployeeOnboards();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE_ONBOARD",
    activity: "Employee Onboard fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: employees.length,
    data: serializeBigInt(employees),
  });
});


const updateEmployeeOnboardController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const validatedData = updateEmployeeOnboardValidator.parse(req.body);

  const employee = await updateEmployeeOnboard(id, validatedData);

  await createAuditLog({
    userId: req.user.id,
    action: "PUT",
    module: "EMPLOYEE_ONBOARD",
    activity: "Employee Onboard updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee Onboard updated successfully",
    data: serializeBigInt(employee),
  });
});


const deleteEmployeeOnboardController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteEmployeeOnboard(id);

  await createAuditLog({
    userId: req.user.id,
    action: "DELETE",
    module: "EMPLOYEE_ONBOARD",
    activity: "Employee Onboard deleted successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee Onboard deleted successfully",
  });
});


const getTaskChecklistController = asyncHandler(async (req, res) => {
  const result = await getTaskChecklist();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE_ONBOARD",
    activity: "Task Checklist fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: result.length,
    data: serializeBigInt(result),
  });
});


const updateTaskChecklistController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const validatedData = updateTaskChecklistValidator.parse(req.body);

  const result = await updateTaskChecklist(id, validatedData);

  await createAuditLog({
    userId: req.user.id,
    action: "PUT",
    module: "EMPLOYEE_ONBOARD",
    activity: "Task Checklist updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Task Checklist updated successfully",
    data: serializeBigInt(result),
  });
});


const fetchEmployeeOnboardByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const onboard = await getEmployeeOnboardById(id);

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE_ONBOARD",
    activity: "Employee Onboard fetched by ID successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: serializeBigInt(onboard),
  });
});


export {
  createEmployeeOnboardController,
  getEmployeeOnboardController,
  updateEmployeeOnboardController,
  deleteEmployeeOnboardController,
  getTaskChecklistController,
  updateTaskChecklistController,
  fetchEmployeeOnboardByIdController,
};