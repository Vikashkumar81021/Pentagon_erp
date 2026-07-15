import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createJobApplication = async (data) => {
  const hiringRequirement = await prisma.hiringRequirement.findUnique({
    where: {
      id: data.hiringRequirementId,
    },
  });

  if (!hiringRequirement) {
    throw new BadRequestError("Hiring Requirement not found");
  }

  return await prisma.jobApplication.create({
    data,
    include: {
      hiringRequirement: true,
    },
  });
};

const getJobApplications = async () => {
  return await prisma.jobApplication.findMany({
    include: {
      hiringRequirement: true,
    },
    orderBy: {
      appliedAt: "desc",
    },
  });
};

export {
  createJobApplication,
  getJobApplications,
};