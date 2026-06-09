import { z } from "zod";

export const createLeadSchema = z
  .object({
    organization_name: z.string().min(1, "Organization name is required"),

    name_of_poc: z.string().min(1, "POC name is required"),

    designation: z.string().min(1, "Designation is required"),

    phoneNumber: z.string().optional(),

    email: z.string().email("Invalid email").optional(),

    address: z.string().optional(),

    city: z.string().min(1, "City is required"),

    notes: z.string().optional(),

    priority: z.enum(["LOW", "MEDIUM", "HIGH"]).default("MEDIUM"),
  })
  .refine((data) => data.phoneNumber || data.email, {
    message: "Either phone number or email is required",
    path: ["phoneNumber"],
  });
