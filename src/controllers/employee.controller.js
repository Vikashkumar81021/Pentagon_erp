import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
  filterEmployees,
  searchEmployeService,
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

const getEmployeeByIdController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const employee = await getEmployeeByIdService(id);

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found",
    });
  }

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee fetched successfully",
    data:{ ...employee },
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

const filterEmployeeController = asyncHandler(async (req, res) => {
  const filters = req.query;

  const employees = await filterEmployees(filters);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: employees.length,
    data: employees,
  });
});

const searchEmployeController = asyncHandler(async (req, res) => {
  const search = req.query;
  const searchData = await searchEmployeService(search);
  return res.status(STATUS_CODE.SUCCESS).json({
    data: searchData,
  });
});
export {
  createEmployeeController,
  getEmployeesController,
  getEmployeeByIdController,
  updateEmployeeController,
  deleteEmployeeController,
  searchEmployeController,
  filterEmployeeController,
};
