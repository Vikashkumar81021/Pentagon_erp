import prisma from "../config/db.js";

const salesVisitService = async (salesVisitData) => {
  console.log(salesVisitData)
  //future mein isme db mein ek parmater add hoga isPermission ka true ya false jb mangment permisison approved hoga tb jb ui pe calltoaction show krega 
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
const getConvertedLeads = async () => {
  const convertedLeads = await prisma.salesVisit.findMany({
    where: {
      status: "Converted",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return convertedLeads;
};

const getFailedLeads = async () => {
  const convertedLeads = await prisma.salesVisit.findMany({
    where: {
      status: "Failed",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return convertedLeads;
};

const getSalesVisitsByType = async (type) => {
  const where = {};

  if (type) {
    where.type = {
      equals: type,
      mode: "insensitive",
    };
  }

  return await prisma.salesVisit.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });
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
  getConvertedLeads,
  getSalesVisitsByType,
  getFailedLeads,
};
