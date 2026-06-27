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

const updateInstitutionVisit = async (id, data) => {
  return await prisma.institutionVisit.update({
    where: {
      id: Number(id),
    },
    data: {
      ...data,
      planned_visit_date: data.planned_visit_date
        ? new Date(data.planned_visit_date)
        : undefined,
    },
  });
};

const deleteInstitutionVisit = async (id) => {
  return await prisma.institutionVisit.delete({
    where: {
      id: Number(id),
    },
  });
};

export {
    createInstitutionVisit, 
    getInstitutionVisits, 
    updateInstitutionVisit, 
    deleteInstitutionVisit
};