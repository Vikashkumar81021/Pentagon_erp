import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createHiringRequirement = async (data) => {
  return await prisma.hiringRequirement.create({
    data,
  });
};

const getHiringRequirement = async () => {
  const today = new Date().toISOString().split("T")[0];
  
  await prisma.hiringRequirement.deleteMany({
    where: {
      applicationDeadline: {
        lt: today,
      },
    },
  });

  const fetchjob = await prisma.hiringRequirement.findMany({
    where: {
      applicationDeadline: {
        gte: today,
      },
      jobStatus: "OPEN",
    },

    include: {
      _count: {
        select: {
          applications: {
            where: {
              status: {
                not: "HIRED",
              },
            },
          },
        },
      },
    },

    orderBy: {
      applicationDeadline: "asc",
    },
  });

  return fetchjob;
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
