import prisma from "../config/db.js";

const createLeaveApplicantService = async (data) => {
  return await prisma.leaveApplicant.create({
    data,
  });
};

const getLeaveApplicantsService = async () => {
  return await prisma.leaveApplicant.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getLeaveApplicantByIdService = async (id) => {
  return await prisma.leaveApplicant.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const updateLeaveApplicantService = async (id, data) => {
  return await prisma.leaveApplicant.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteLeaveApplicantService = async (id) => {
  return await prisma.leaveApplicant.delete({
    where: {
      id: Number(id),
    },
  });
};
export {
  createLeaveApplicantService,
  getLeaveApplicantsService,
  getLeaveApplicantByIdService,
  updateLeaveApplicantService,
  deleteLeaveApplicantService,
};