import { z } from "zod";

const expenseClaimSchema = z.object({
  employee: z.string().min(1, "Employee is required"),

  category: z.string().min(1, "Category is required"),

  date: z.string().min(1, "Date is required"),

  amount: z.number().int().positive("Amount must be greater than 0"),

  description: z.string().min(1, "Description is required"),

  workflow: z.string().optional(),

  status: z.enum(["Pending", "Approved", "Rejected"]).optional(),

  decision: z.string().optional(),

  remarks: z.string().optional(),
});
export const updateExpenseClaimSchema =
  expenseClaimSchema.partial();