import { z } from "zod";

export const salesVisitValidator = z.object({
  executive_name: z
    .string()
    .min(1, "Executive name is required"),

  visit_date: z.coerce.date(),

  visit_type: z
    .string()
    .optional()
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

  // NEW
  city: z
    .string()
    .min(1, "City is required"),

  product_description: z
    .string()
    .optional(),

  quantity: z
    .coerce
    .number()
    .int()
    .positive()
    .optional(),

  remarks: z
    .string()
    .optional(),

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
    .string()
    .min(1, "Lead priority is required"),

  discussion_summary: z
    .string()
    .optional(),

  current_status: z
    .string()
    .optional(),

  expected_business_value: z
    .coerce
    .number()
    .nonnegative()
    .optional(),

  proposal_sent: z
    .enum(["YES", "NO"])
    .optional(),

  order_closed: z
    .enum(["YES", "NO"])
    .optional(),

  // NEW
  order_lost_reason: z
    .string()
    .optional(),

  // NEW
  total_calls_made: z
    .coerce
    .number()
    .int()
    .nonnegative()
    .optional(),

  // NEW
  connected_calls: z
    .coerce
    .number()
    .int()
    .nonnegative()
    .optional(),

  // NEW
  meetings_scheduled: z
    .coerce
    .number()
    .int()
    .nonnegative()
    .optional(),

  // NEW
  new_leads_generated: z
    .coerce
    .number()
    .int()
    .nonnegative()
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

  meeting_photo: z
    .string()
    .optional(),

  closure_date: z
    .string()
    .optional(),

  basic_amount: z
    .coerce
    .number()
    .nonnegative()
    .optional(),

  status: z
    .string()
    .optional(),

  type: z
    .string()
    .optional(),

  userId: z
    .coerce
    .number()
    .int()
    .positive(),
});