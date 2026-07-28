import { z } from "zod";

export const invoiceSchema = z.object({

  status: z.enum([
  "Paid",
  "Outstanding",
  "Overdue",
  "Draft",
]).optional(),

items: z.array(
    z.object({
      description: z.string(),

      quantity: z.number().int().positive(),

      price: z.number().positive(),
    })
  ),

  invoiceId: z.string().min(1, "Invoice ID is required"),

  customer: z.string().min(1, "Customer is required"),

  dueDate: z.string().min(1, "Due Date is required"),
});