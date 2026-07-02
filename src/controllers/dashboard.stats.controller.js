import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { 
  fetchDashboardStats, 
  fetchClientAccountCRMStats, 
  getApprovedLeaveStatsService 
} from "../services/dashboard.stats.service.js";

const fetchDashboardStatsController = asyncHandler(async (req, res) => {
  const stats = await fetchDashboardStats();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Dashboard stats fetched successfully",
    data: stats,
  });
});

const fetchClientAccountCRMStatsController = asyncHandler(async (req, res) => {
  const stats = await fetchClientAccountCRMStats();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Client account CRM stats fetched successfully",
    data: stats,
  });
});

const getApprovedLeaveStatsController = asyncHandler(async (req, res) => {
  const stats = await getApprovedLeaveStatsService();

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
