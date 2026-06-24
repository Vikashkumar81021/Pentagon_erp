import {asyncHandler} from '../utils/asyncHandler.js';
import { STATUS_CODE } from "../constants/status.code.js";
import { salesVisitValidator } from "../validators/salesVisit.validator.js";
import { salesVisitService } from "../services/salesVisit.service.js";
import { BadRequestError } from "../utils/error.js";


const createSalesVisitController = asyncHandler(async (req, res, next) => {
  const validateData = salesVisitValidator.parse(req.body);
  const salesVisit = await salesVisitService(validateData);
    return res.status(STATUS_CODE.CREATED).json({
        success: true,
        message: "Sales Visit created successfully",
        data: salesVisit,
    });
});
export { createSalesVisitController };