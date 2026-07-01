import prisma from "../config/db.js";

const createHiringRequirement = async (data) => {
  return await prisma.hiringRequirement.create({
    data,
  });
};

const getHiringRequirement = async () => {
  return await prisma.hiringRequirement.findMany();
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

export{
    createHiringRequirement,
    getHiringRequirement,
    updateHiringRequirement,
    deleteHiringRequirement
};