import prisma from "../config/db.js";

const fetchDashboardStats = async () => {
  const [totalLeads] = await Promise.all([prisma.lead.count()]);
  return { totalLeads };
};

export { fetchDashboardStats };
