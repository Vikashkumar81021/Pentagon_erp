import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createEmployeeService = async (empdata) => {
  const existEmpEmail = await prisma.employee.findFirst({
    where: {
      email: empdata.email,
    },
  });
  if (existEmpEmail) {
    throw new BadRequestError("Employee Already Exists.");
  }
  const employeedata = await prisma.employee.create({
    data: empdata,
  });
  return employeedata;
};

const getEmployeesService = async () => {
  return prisma.employee.findMany({});
};

const getEmployeeByIdService = async (id) => {
  return await prisma.employee.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const updateEmployeeService = async (id, data) => {
  return prisma.employee.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteEmployeeService = async (id) => {
  return prisma.employee.delete({
    where: {
      id: Number(id),
    },
  });
};

const filterEmployees = async (filters) => {
  const { department, status_desgnation } = filters;
  const where = {};
  if (department) where.department = department;

  if (status_desgnation) where.status_desgnation = status_desgnation;
  return await prisma.employee.findMany({
    where,
    select: {
      status_desgnation: true,
      department: true,
    },
  });
};
const searchEmployeService = async (search) => {
  const { full_name } = search;

  const where = {};
  if (full_name) {
    where.full_name = {
      contains: full_name,
      mode: "insensitive",
    };
  }
  return await prisma.employee.findMany({
    where,
    select: {
      full_name: true,
    },
  });
};
export {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
  filterEmployees,
  searchEmployeService,
};
