import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createHiringRequirement = async (data) => {
  return await prisma.hiringRequirement.create({
    data,
  });
};

const getHiringRequirement = async () => {
  return await prisma.hiringRequirement.findMany({
    select: {
      id: true,
      jobTitle: true,
      department: true,
      employmentType: true,
      // openings: true,
      experienceRequired: true,
      qualification: true,
      location: true,
      applicationDeadline: true,
      jobStatus: true,
      description: true,
      // createdAt: true,
      // updatedAt: true,

      // _count: {
      //   select: {
      //     applications: true,
      //   },
      // },
    },
  });
};

const getHiringRequirementById = async (id) => {
  const hiringRequirement = await prisma.hiringRequirement.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!hiringRequirement) {
    throw new NotFoundError("Hiring requirement not found");
  }

  return hiringRequirement;
};

const updateHiringRequirement = async (id, data) => {
  return await prisma.hiringRequirement.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteHiringRequirement = async (id) => {
  return await prisma.hiringRequirement.delete({
    where: { id: Number(id) },
  });
};

const searchHiringRequirement = async (search) => {
  const { job_Title } = search;

  const where = {};

  if (job_Title) {
    where.job_Title = {
      contains: job_Title,
      mode: "insensitive",
    };
  }

  return await prisma.hiringRequirement.findMany({
    where,
    orderBy: {
      id: "desc",
    },
  });
};

const getOpenHiringRequirements = async () => {
  return await prisma.hiringRequirement.findMany({
    where: {
      jobStatus: {
        equals: "OPEN",
        mode: "insensitive",
      },
    },
    include: {
      _count: {
        select: {
          applications: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export {
  createHiringRequirement,
  getHiringRequirement,
  getHiringRequirementById,
  updateHiringRequirement,
  deleteHiringRequirement,
  searchHiringRequirement,
  getOpenHiringRequirements,
};
