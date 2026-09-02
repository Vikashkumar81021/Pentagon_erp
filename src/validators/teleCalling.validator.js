import { z } from "zod";

export const telecallingValidator = z.object({
  executive_name: z
    .string()
    .min(1, "Executive name is required"),

  visit_date: z
    .string()
    .min(1, "Visit date is required"),

  customer_name: z
    .string()
    .min(1, "Customer name is required"),

  contact_person: z
    .string()
    .min(1, "Contact person is required"),

  contact_number: z
    .string()
    .min(10, "Invalid contact number"),

  customer_email: z
    .string()
    .email("Invalid email"),

  city: z
    .string()
    .min(1, "City is required"),

  lead_priority: z
    .string()
    .min(1, "Lead priority is required"),

  remarks: z
    .string()
    .optional()
});

export const updateTelecallingValidator =
  telecallingValidator.partial();