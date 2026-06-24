import { z } from "zod";

export const salesVisitValidator = z.object({
  executiveName: z.string().min(1, "Executive Name is required"),

  visitDate: z.coerce.date(),

  customerType: z.enum(["COLD", "REPEAT", "TELE_CALL"]),

  customerName: z.string().min(1, "Customer Name is required"),

  customerCompleteAddress: z.string().optional(),

  contactPerson: z.string().min(1, "Contact Person is required"),

  contactNumber: z.string().min(10, "Invalid contact number"),

  customerMailId: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  productType: z.string().min(1, "Product Type is required"),

  productDescription: z.string().optional(),

  quantity: z.number().int().positive().optional(),

  organizationName: z.string().optional(),

  category: z.string().optional(),

  closureDate: z.coerce.date().optional(),

  basicAmount: z.number().nonnegative().optional(),

  status: z
    .enum(["PENDING", "IN_PROGRESS", "WON", "LOST", "CLOSED"])
    .optional(),

  remarks: z.string().optional(),
});
