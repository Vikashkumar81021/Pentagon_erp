import prisma from "../config/db.js";

const createEmployeeService = async (empdata) => {
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
