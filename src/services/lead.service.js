import prisma from "../config/db.js";

const createLead = async (leadData) => {
  console.log("leadData", leadData);
  const lead = await prisma.lead.create({
    data: leadData,
  });

  return lead;
};
const fetchLeads = async () => {
  const leads = await prisma.lead.findMany({
    select: {
      id: true,
      organization_name: true,
      phoneNumber: true,
      email: true,
      attemptsCount: true,
      status: true,
    },
  });

  return leads;
};
const getConvertedLeads = async () => {
  const convertedLeads = await prisma.lead.findMany({
    where: {
      status: "converted",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return convertedLeads;
};
export { createLead, fetchLeads, getConvertedLeads };
