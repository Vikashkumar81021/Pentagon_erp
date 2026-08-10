import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createTaskChecklist = async (data) => {
  const onboard = await prisma.employeeOnboard.findUnique({
    where: {
      id: Number(data.employeeOnboardId),
    },
  });

  if (!onboard) {
    throw new BadRequestError("Employee Onboard record not found");
  }

  return await prisma.taskChecklist.create({
    data: {
      ...data,
      employeeOnboardId: Number(data.employeeOnboardId),
    },
    include: {
      employeeOnboard: true,
    },
  });
};

const toggleTaskStatus = async (taskId) => {
  const exisitngTask = await prisma.taskChecklist.findUnique({
    where: {
      id: Number(taskId),
    },
  });
  if (!exisitngTask) {
    throw new BadRequestError("Task checklist not found");
  }
  return await prisma.taskChecklist.update({
    where: {
      id: Number(taskId),
    },
    data: {
      completed: !exisitngTask.completed,
    },
    include: {
      employeeOnboard: true,
    },
  });
};
const getTaskChecklist = async () => {
  return await prisma.taskChecklist.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      employeeOnboard: true,
    },
  });
};

const getTaskChecklistByEmployee = async (employeeOnboardId) => {
  const onboard = await prisma.employeeOnboard.findUnique({
    where: {
      id: Number(employeeOnboardId),
    },
  });

  if (!onboard) {
    throw new BadRequestError("Employee Onboard record not found");
  }

  return await prisma.taskChecklist.findMany({
    where: {
      employeeOnboardId: Number(employeeOnboardId),
    },
    orderBy: {
      id: "desc",
    },
    include: {
      employeeOnboard: true,
    },
  });
};

const getRecentPendingChecklist = async () => {
  return await prisma.taskChecklist.findMany({
    where: {
      completed: false,
    },
    include: {
      employeeOnboard: {
        include: {
          employee: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
    take: 2,
  });
};

export {
  createTaskChecklist,
  getTaskChecklist,
  toggleTaskStatus,
  getTaskChecklistByEmployee,
  getRecentPendingChecklist,
};
