import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createFollowupService = async (data) => {
    
  const salesVisit = await prisma.salesVisit.findUnique({
    where: {
      id: Number(data.salesVisitId),
    },
  });

  if (!salesVisit) {
    throw new BadRequestError("Sales Visit not found");
  }

  return await prisma.followUp.create({
    data,
    include: {
      salesVisit: true,
    },
  });
};

const getFollowupService = async () => {
  return await prisma.followUp.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      salesVisit: true,
    },
  });
};

export {
  createFollowupService,
  getFollowupService,
};