import { z } from "zod";

export const salesVisitValidator = z.object({
  executive_name: z.string().min(1, "Executive name is required"),

  visit_date: z.coerce.date(),

  visit_type: z.string(),
  lead_type: z.string(),
  customer_name: z.string().min(1, "Customer name is required"),

  customer_address: z.string().optional(),

  contact_person: z.string().min(1, "Contact person is required"),

  contact_number: z.string().min(10, "Invalid contact number"),

  customer_email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  product_type: z.string().min(1, "Product type is required"),

  product_description: z.string().optional(),

  quantity: z.number().int().positive().optional(),

  remarks: z.string().optional(),

  status: z
    .enum(["PENDING", "IN_PROGRESS", "WON", "LOST", "CLOSED"])
    .optional(),
});
