import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createEmployeeService,
  getEmployeesService,
  updateEmployeeService,
  deleteEmployeeService,
  filterEmployees,
} from "../services/employee.service.js";

import {
  createEmployeeValidator,
  updateEmployeeValidator,
} from "../validators/employee.validators.js";

const createEmployeeController = asyncHandler(async (req, res) => {
  const data = createEmployeeValidator.parse(req.body);

  const employee = await createEmployeeService(data);

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Employee created successfully",
    data: {
      ...employee,
      mobile_number: employee.mobile_number.toString(),
    },
  });
});

const getEmployeesController = asyncHandler(async (req, res) => {
  const employees = await getEmployeesService();

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: employees,
  });
});

const updateEmployeeController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = updateEmployeeValidator.parse(req.body);

  const employee = await updateEmployeeService(id, data);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee updated successfully",
    data: employee,
  });
});

const deleteEmployeeController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteEmployeeService(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee deleted successfully",
  });
});

const  filterEmployeeController = asyncHandler(async (req, res) => {
  const filters = req.query;

  const employees = await filterEmployees(filters);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: employees.length,
    data: employees,
  });
});

export {
  createEmployeeController,
  getEmployeesController,
  updateEmployeeController,
  deleteEmployeeController,
  filterEmployeeController
};
