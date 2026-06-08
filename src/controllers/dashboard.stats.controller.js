import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { fetchDashboardStats } from "../services/dashboard.stats.service.js";

const fetchDashboardStatsController = asyncHandler(async (req, res) => {
  const stats = await fetchDashboardStats();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Dashboard stats fetched successfully",
    data: stats,
  });
});

export { fetchDashboardStatsController };
