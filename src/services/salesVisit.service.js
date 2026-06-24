import prisma from "../config/db.js";

const salesVisitService = async (salesVisitData) => {
  const salesVisit = await prisma.salesVisit.create({
    data: salesVisitData,
  });
  return salesVisit;
};
export { salesVisitService };