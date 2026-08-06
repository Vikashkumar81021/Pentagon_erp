import { z } from "zod";

export const payrollSchema = z.object({

  gross: z.number().positive(),

  tds: z.number().min(0),

  pf: z.number().min(0),

  status: z.enum([
    "Pending",
    "Processed",
    "Paid",
  ]),
});

export const updatePayrollSchema =
  payrollSchema.partial();