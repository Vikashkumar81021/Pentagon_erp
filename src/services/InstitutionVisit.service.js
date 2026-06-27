import prisma from "../config/db.js";

const createInstitutionVisit = async (data) => {
  return await prisma.institutionVisit.create({
    data: {
      ...data,
      planned_visit_date: new Date(data.planned_visit_date),
    },
  });
};

const getInstitutionVisits = async () => {
  return await prisma.institutionVisit.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export {createInstitutionVisit, getInstitutionVisits};