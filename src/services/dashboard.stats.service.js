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

const getApprovedLeaveStatsService = async () => {
  const[approvedLeaves,totalEmployee,totalOpportunities] = await Promise.all([
    prisma.leaveApplicant.count({
      where: {
        leave_approve: "APPROVED",
      },
    }),
    prisma.employee.count({}),
    prisma.hiringRequirement.count({}),
  ]);
  return { approvedLeaves, totalEmployee, totalOpportunities };
};
export { fetchDashboardStats, fetchClientAccountCRMStats, getApprovedLeaveStatsService };
