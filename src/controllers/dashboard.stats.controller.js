import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import {
  fetchDashboardStats,
  fetchClientAccountCRMStats,
  getApprovedLeaveStatsService,
} from "../services/dashboard.stats.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const fetchDashboardStatsController = asyncHandler(async (req, res) => {
  const currentUser = req.user;
  const stats = await fetchDashboardStats(currentUser);

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "DASHBOARD_STATS",
    activity: "Dashboard stats fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Dashboard stats fetched successfully",
    data: stats,
  });
});

const fetchClientAccountCRMStatsController = asyncHandler(async (req, res) => {
  const stats = await fetchClientAccountCRMStats();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "DASHBOARD_STATS",
    activity: "Client account CRM stats fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Client account CRM stats fetched successfully",
    data: stats,
  });
});

const getApprovedLeaveStatsController = asyncHandler(async (req, res) => {
  const stats = await getApprovedLeaveStatsService();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "DASHBOARD_STATS",
    activity: "Leave & Employee stats fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Leave & Employee stats fetched successfully",
    data: {
      approvedLeaves: stats.approvedLeaves,
      totalEmployee: stats.totalEmployee,
      totalOpportunities: stats.totalOpportunities,
    },
  });
});

export {
  fetchDashboardStatsController,
  fetchClientAccountCRMStatsController,
  getApprovedLeaveStatsController,
};
