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
    .enum([
      "ICICI_BANK_CA_PENTAGON",
      "ICICI_BANK_OD_PENTAGON",
      "INDUSIND_BANK_CA_SMART",
      "INDUSIND_BANK_CA_PENTAGON",
      "ICICI_BANK_CA_SEST",
    ]),

  amount: z
    .number()
    .positive("Amount must be greater than 0")
    .optional(),

  type: z.enum(["CREDIT", "DEBIT"]).optional(),
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