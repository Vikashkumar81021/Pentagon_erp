import { z } from "zod";

const chartAccountSchema = z.object({
  code: z
    .string({
      required_error: "Code is required",
    })
    .min(1, "Code is required"),

  accountName: z
    .string({
      required_error: "Account Name is required",
    })
    .min(3, "Account Name must be at least 3 characters"),

  classification: z.enum([
    "Assets",
    "Liabilities",
    "Equity",
    "Revenue",
    "Expenses"
  ]),

  subClassification: z.enum([
    'Current Assets',
    'Non Current Assets',
    'Current Liabilities',
    'Long Term Liabilities',
    'Direct Income',
    'Indirect Income',
    'Direct Expenses',
    'Indirect Expenses'
  ]),

  balanceType: z.enum([
    "Debit",
    "Credit",
  ]),

  openingBalance: z
    .number({
      required_error: "Opening Balance is required",
    })
    .min(0, "Opening Balance cannot be negative"),

  status: z.enum([
    "Active",
    "Inactive",
  ]),

  description: z.string().optional(),
});

export const createChartAccountSchema = z.object({
  body: chartAccountSchema,
});
export const updateChartAccountSchema = z.object({
  body: chartAccountSchema.partial(),
});

export const chartAccountIdSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});