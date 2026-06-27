import prisma from "../config/db.js";

const fetchDashboardStats = async () => {
  const [totalLeads] = await Promise.all([prisma.SalesVisit.count()]);
  return { totalLeads };
};

//clientAccountCRMStats
const fetchClientAccountCRMStats = async () => {
  const [totalAccounts, rawLeads] = await Promise.all([
    prisma.lead.count({
      where: {
        status: "Converted",
      },
    }),

    prisma.lead.count({
      where: {
        status: "RAW",
      },
    }),
  ]);

  return {
    totalAccounts,
    rawLeads,
  };
};
export { fetchDashboardStats, fetchClientAccountCRMStats };
