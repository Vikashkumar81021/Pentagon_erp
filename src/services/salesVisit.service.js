import prisma from "../config/db.js";

const salesVisitService = async (salesVisitData) => {
  const salesVisit = await prisma.salesVisit.create({
    data: salesVisitData,
  });
  return salesVisit;
};
const getSalesVisitsService = async () => {
  const salesVisits = await prisma.salesVisit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return salesVisits;
};
const updateSalesVisit = async (id, data) => {
  return await prisma.salesVisit.update({
    where: {
      id: Number(id),
    },
    data,
  });
};
const deleteSalesVisit = async (id) => {
  return await prisma.salesVisit.delete({
    where: {
      id: Number(id),
    },
  });
};
const mySalesVisitsService = async (userId) => {
  return await prisma.salesVisit.findMany({
    where: {
      userId: Number(userId),
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export {
  salesVisitService,
  getSalesVisitsService,
  updateSalesVisit,
  deleteSalesVisit,
  mySalesVisitsService,
};
