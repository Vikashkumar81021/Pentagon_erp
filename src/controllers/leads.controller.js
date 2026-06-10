import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { createLeadSchema } from "../validators/lead.validator.js";
import { createLead, fetchLeads, getConvertedLeads } from "../services/lead.service.js";




const createLeadController = asyncHandler(async (req, res, next) => {
  const validateData = createLeadSchema.parse(req.body);

  const lead = await createLead(validateData);
  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Lead created successfully",
    data: lead,
  });
});


const fetchLeadsController = asyncHandler(async (req, res, next) => {
  const leads = await fetchLeads();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Leads fetched successfully",
    data: leads,
  });
});
const getConvertedLeadsController = asyncHandler(async (req, res, next) => {
  const leads = await getConvertedLeads();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Converted leads fetched successfully",
    data: leads,
  });
});

export { createLeadController, fetchLeadsController, getConvertedLeadsController };
