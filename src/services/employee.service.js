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

export {
  createEmployeeService,
  getEmployeesService,
  updateEmployeeService,
  deleteEmployeeService,
};
