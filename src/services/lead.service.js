import prisma from "../config/db.js";

const createLead = async (leadData) => {
  console.log("leadData", leadData);
  const lead = await prisma.lead.create({
    data: leadData,
  });

  return lead;
};
const fetchLeads = async () => {
  const lead = await prisma.lead.findMany();

  return lead;
};
export { createLead, fetchLeads };
