import prisma from "../config/db.js";

const salesVisitService = async (salesVisitData) => {
  const visitData = await prisma.salesVisit.create({
    data: salesVisitData,
  });
  return visitData;
};
