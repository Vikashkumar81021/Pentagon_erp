import { asyncHandler } from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/error.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { createLeadSchema } from "../validators/lead.validator.js";
import { createLead } from "../services/lead.service.js";

const createLeadController = asyncHandler(async (req, res, next) => {
  const validateData = createLeadSchema.parse(req.body);
  const lead = await createLead(validateData);
  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Lead created successfully",
    data: lead,
  });
});

export { createLeadController };
