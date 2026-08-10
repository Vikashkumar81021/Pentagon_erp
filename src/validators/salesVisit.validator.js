import { z } from "zod";

export const LeadTypeEnum = z.enum([
  "WARM_PROSPECTS",
  "HOT_PROSPECTS",
  "DSR",
]);

export const salesVisitValidator = z.object({
  executive_name: z
    .string()
    .min(1, "Executive name is required"),

  designation: z
    .string()
    .min(1, "Designation is required"),

  visit_date: z.coerce.date(),

  visit_type: z
    .string()
    .min(1, "Visit type is required"),

  customer_name: z
    .string()
    .min(1, "Customer name is required"),

  customer_address: z
    .string()
    .optional(),

  contact_person: z
    .string()
    .min(1, "Contact person is required"),

  contact_number: z
    .string()
    .min(10, "Invalid contact number"),

  customer_email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  product_type: z
    .string()
    .min(1, "Product type is required"),

  product_description: z
    .string()
    .optional(),

  quantity: z
    .number()
    .int()
    .positive()
    .optional(),

  remarks: z
    .string()
    .optional(),

  lead_type: LeadTypeEnum,

  reporting_location: z
    .string()
    .optional(),

  activity_type: z
    .string()
    .optional(),

  client_type: z
    .enum(["NEW", "EXISTING"])
    .optional(),

  lead_priority: z
    .enum(["HOT", "WARM", "COLD"])
    .optional(),

  discussion_summary: z
    .string()
    .optional(),

  current_status: z
    .string()
    .optional(),

  expected_business_value: z
    .number()
    .nonnegative()
    .optional(),

  proposal_sent: z
    .enum(["YES", "NO"])
    .optional(),

  order_closed: z
    .enum(["YES", "NO"])
    .optional(),

  expected_closure_date: z
    .string()
    .optional(),

  next_followup_date: z
    .string()
    .optional(),

  management_support_required: z
    .enum(["YES", "NO", "OTHER"])
    .optional(),

  additional_remarks: z
    .string()
    .optional(),

  closure_date: z
    .string()
    .optional(),

  basic_amount: z
    .number()
    .nonnegative()
    .optional(),

  status: z
    .string()
    .optional(),
});