import prisma from "../config/db.js";

const createEmployeeOnboard = async (data) => {
    
  return await prisma.employeeOnboard.create({
    data,
  });
};

const fetchEmployeeOnboards = async () => {
  return await prisma.employeeOnboard.findMany({
    orderBy: {
    //   createdAt: "desc",
    },
  });
};

const updateEmployeeOnboard = async (id, data) => {
  return await prisma.employeeOnboard.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteEmployeeOnboard = async (id) => {
  return await prisma.employeeOnboard.delete({
    where: {
      id: Number(id),
    },
  });
};

export {
  createEmployeeOnboard,
  fetchEmployeeOnboards,
  updateEmployeeOnboard,
  deleteEmployeeOnboard
};