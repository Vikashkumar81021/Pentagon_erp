import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createEmployeeOnboard = async (data) => {
  return await prisma.employeeOnboard.create({
    data: {
      joiningDate: data.joiningDate,
      candidateName: data.candidateName,
      jobTitle: data.jobTitle,

      taskCheckLists: {
        create: [
          {
            category: "DOCUMENT",
            text: "Submit Documents",
            completed: false,
          },
          {
            category: "Create Email Account",
            text: "IT",
            completed: false,
          },
          {
            category: "ASSET",
            text: "Allocate Laptop",
            completed: false,
          },
          {
            category: "INDUCTION",
            text: "HR Induction",
            completed: false,
          },
        ],
      },
    },
    include: {
      taskCheckLists: true,
    },
  });
};

const fetchEmployeeOnboards = async () => {
  return await prisma.employeeOnboard.findMany({
    include: {
      taskCheckLists: true,
    },
  });
};

const updateEmployeeOnboard = async (id, data) => {
  const onboard = await prisma.employeeOnboard.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!onboard) {
    throw new BadRequestError("Employee Onboard record not found");
  }

  return await prisma.employeeOnboard.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteEmployeeOnboard = async (id) => {
  const onboard = await prisma.employeeOnboard.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!onboard) {
    throw new BadRequestError("Employee Onboard record not found");
  }

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

  return await prisma.taskChecklist.update({
    where: {
      id: Number(id),
    },
    data,
    include: {
      employee: true,
    },
  });
};

const getEmployeeOnboardById = async (id) => {
  const onboard = await prisma.employeeOnboard.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      taskCheckLists: true,
    },
  });

  if (!onboard) {
    throw new BadRequestError("Employee Onboard record not found");
  }

  return onboard;
};

export {
  createEmployeeOnboard,
  fetchEmployeeOnboards,
  updateEmployeeOnboard,
  deleteEmployeeOnboard,
  getTaskChecklist,
  updateTaskChecklist,
  getEmployeeOnboardById,
};