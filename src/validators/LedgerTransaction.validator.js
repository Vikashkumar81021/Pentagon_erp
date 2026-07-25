import { z } from "zod";

const ledgerTransactionSchema = z.object({
  date: z.string().optional(),

  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .optional(),

  category: z
    .string()
    .optional(),

  account: z
  .string({
    required_error: "Account is required",
  })
  .min(1, "Account is required"),

  amount: z
    .number()
    .positive("Amount must be greater than 0")
    .optional(),

  type: z.enum(["CREDIT", "DEBIT"]).optional(),
  transactionId: z
  .string({
    required_error: "Transaction ID is required",
  })
  .min(1, "Transaction ID is required"),
});

export const createLedgerTransactionSchema = z.object({
  body: ledgerTransactionSchema.required(),
});

export const updateLedgerTransactionSchema = z.object({
  body: ledgerTransactionSchema,
});

export const ledgerTransactionIdSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});