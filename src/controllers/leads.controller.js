import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { createLeadSchema } from "../validators/lead.validator.js";
import {
  createLead,
  discusionLead,
  fetchLeads,
  getConvertedLeads,
} from "../services/lead.service.js";
import { BadRequestError } from "../utils/error.js";

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

const leadDiscussionController = asyncHandler(async (req, res, next) => {
  const { leadId } = req.params;
  if (!leadId) {
    throw new BadRequestError(400, "leadId  are required");
  }
  const { durationSec, outcome, remarks } = req.body;

  if (!durationSec || !outcome || !remarks) {
    throw new BadRequestError(400, "Missing fileds are required");
  }
  const discussion = await discusionLead(leadId, durationSec, outcome, remarks);
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Lead discussion added successfully",
    data: discussion,
  });
});
export {
  createLeadController,
  fetchLeadsController,
  getConvertedLeadsController,
  leadDiscussionController,
};
