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


const getTaskChecklist = async () => {
  return await prisma.taskChecklist.findMany({
    include: {
      employee: true,
    },
    orderBy: {
      id: "desc",
    },
  });
};

const updateTaskChecklist = async (id, data) => {
  if (data.employeId) {
    const employee = await prisma.employeeOnboard.findUnique({
      where: {
        id: Number(data.employeId),
      },
    });

    if (!employee) {
      throw new BadRequestError("Employee not found");
    }
  }

  return await prisma.taskChecklist.create({
    where: {
      id: Number(id),
    },
    data,
    include: {
      employee: true,
    },
  });
};

export {
  createEmployeeOnboard,
  fetchEmployeeOnboards,
  updateEmployeeOnboard,
  deleteEmployeeOnboard,
  getTaskChecklist,
  updateTaskChecklist,
};