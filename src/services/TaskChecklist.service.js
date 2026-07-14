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

export { createTaskChecklist, getTaskChecklist };
