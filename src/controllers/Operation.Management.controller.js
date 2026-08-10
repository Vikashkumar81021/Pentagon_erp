import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { 
    getPayrollService, 
} from "../services/Operation.Management.service.js";

const getPayrollController = asyncHandler(async (req, res) => {
    const { id } = req.params;
  const employees = await getPayrollService(id);

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Operation Management data fetched successfully",
    count: employees.length,
    data: employees,
  });
});

export {
     getPayrollController,
};