import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { serializeBigInt } from "../utils/bigIntSerializer.js";
import {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
  filterEmployees,
  searchEmployeService,
  getEmployeService,
  generateEmpCode,
  getEmployeeNameDesignationService,
} from "../services/employee.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

import {
  createEmployeeValidator,
  updateEmployeeValidator,
} from "../validators/employee.validators.js";

const createEmployeeController = asyncHandler(async (req, res) => {
  const data = createEmployeeValidator.parse(req.body);

  if (data.dob) {
    data.dob = new Date(data.dob);
  }
  const employee = await createEmployeeService(data);

  await createAuditLog({
    userId: req.user.id,
    action: "CREATE",
    module: "EMPLOYEE",
    activity: "Employee created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Employee created successfully",
    data: {
      ...employee,
      mobileNumber: employee.mobileNumber.toString(),
    },
  });
});

const getEmployeesController = asyncHandler(async (req, res) => {
  const employees = await getEmployeesService();
  const safeEmployees = (Array.isArray(employees) ? employees : [employees])
    .filter(Boolean)
    .map((emp) => ({
      ...emp,
      mobileNumber: emp.mobileNumber?.toString(),
    }));

    await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE",
    activity: "Employee fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: safeEmployees,
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
  const safeEmployee = {
    ...employee,
    mobileNumber: employee.mobileNumber ? String(employee.mobileNumber) : null,
  };

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE",
    activity: "Employee fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee fetched successfully",
    data: safeEmployee,
  });
});

const updateEmployeeController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = updateEmployeeValidator.parse(req.body);

  const employee = await updateEmployeeService(id, data);

  await createAuditLog({
    userId: req.user.id,
    action: "PUT",
    module: "EMPLOYEE",
    activity: "Employee updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee updated successfully",
    data: serializeBigInt(employee),
  });
});

const deleteEmployeeController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteEmployeeService(id);

  await createAuditLog({
    userId: req.user.id,
    action: "DELETE",
    module: "EMPLOYEE",
    activity: "Employee deleted successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employee deleted successfully",
  });
});

const filterEmployeeController = asyncHandler(async (req, res) => {
  const filters = req.query;

  const employees = await filterEmployees(filters);

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE",
    activity: "Employee fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    count: employees.length,
    data: serializeBigInt(employees),
  });
});

const searchEmployeController = asyncHandler(async (req, res) => {
  const search = req.query;
  const searchData = await searchEmployeService(search);

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE",
    activity: "Employee search successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    data: searchData,
  });
});

const getEmployeController = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const result = await getEmployeService(page, limit);

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE",
    activity: "Employee fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Employees fetched successfully",
    data: result.employees,
    pagination: result.pagination,
    mobileNumber: result.mobileNumber ? String(result.mobileNumber) : null,
  });
});
const generateEmpCodeController = asyncHandler(async (req, res) => {
  const { employeeOnboardId } = req.body;

  const fetchEmpCodeService = await generateEmpCode(employeeOnboardId);

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE",
    activity: "Employee fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    data: fetchEmpCodeService,
  });
});

const getEmployeeNameDesignationController = asyncHandler(async (req, res) => {
  const employees = await getEmployeeNameDesignationService();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "EMPLOYEE",
    activity: "Employee fetched successfully",
  });
  
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: employees,
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
  getEmployeController,
  generateEmpCodeController,
  getEmployeeNameDesignationController,
};
