import { z } from "zod";

export const invoiceSchema = z.object({
  description: z.string().min(1, "Description is required"),

  status: z.enum([
  "Paid",
  "Outstanding",
  "Overdue",
  "Draft",
]).optional(),

  quantity: z.number().int().positive("Quantity must be greater than 0"),

  price: z.number().positive("Price must be greater than 0"),

  invoiceId: z.string().min(1, "Invoice ID is required"),

  customer: z.string().min(1, "Customer is required"),

  dueDate: z.string().min(1, "Due Date is required"),
});