import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";

const createLead = async (leadData) => {
  const lead = await prisma.lead.create({
    data: leadData,
  });

  return lead;
};
const fetchLeads = async () => {
  const lead = await prisma.lead.findMany();

  return lead;
};
export { createLead };
