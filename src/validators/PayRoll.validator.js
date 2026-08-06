import { z } from "zod";

export const payrollSchema = z.object({

  gross: z.number().positive(),

  tds: z.number().min(0),

  pf: z.number().min(0),

  transaction_reference: z.string().optional(),

  remarks: z.string().optional(),

  payment_method: z.string().optional(),

  payment_date: z.string().optional(),
  deductions: z.string().optional(),

  status: z.enum([
    "Pending",
    "Processed",
    "Paid",
  ]),
});

export const updatePayrollSchema =
  payrollSchema.partial();