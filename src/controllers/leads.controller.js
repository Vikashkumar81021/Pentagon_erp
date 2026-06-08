import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { createLeadSchema } from "../validators/lead.validator.js";
import { createLead, fetchLeads } from "../services/lead.service.js";

/**
 * @swagger
 * tags:
 *   name: Leads
 *   description: Lead Management APIs
 */

/**
 * @swagger
 * /api/leads/fetchLeads:
 *   get:
 *     summary: Fetch all leads
 *     tags: [Leads]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Leads fetched successfully
 */

const createLeadController = asyncHandler(async (req, res, next) => {
  const validateData = createLeadSchema.parse(req.body);
  console.log("valid", validateData);

  const lead = await createLead(validateData);
  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Lead created successfully",
    data: lead,
  });
});

/**
 * @swagger
 * /api/leads/createLead:
 *   post:
 *     summary: Create a new lead
 *     tags: [Leads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Lead created successfully
 */
const fetchLeadsController = asyncHandler(async (req, res, next) => {
  const leads = await fetchLeads();
  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Leads fetched successfully",
    data: leads,
  });
});

export { createLeadController, fetchLeadsController };
