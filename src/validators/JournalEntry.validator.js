import { z } from "zod";

const journalEntrySchema = z.object({
  voucherNo: z.string().min(1, "Voucher No is required"),

  journalDate: z.string().min(1, "Journal Date is required"),

  reference: z.string().min(1, "Reference is required"),

  description: z.string().min(1, "Description is required"),

  debitAccount: z.string().min(1, "Debit Account is required"),

  creditAccount: z.string().min(1, "Credit Account is required"),

  status: z.enum(["Posted", "Pending",]),

  postImmediately: z.boolean(),

  amount: z
    .number({
      required_error: "Amount is required",
    })
    .positive("Amount must be greater than 0"),

  narration: z.string().min(1, "Narration is required"),

});

export const createJournalEntrySchema = z.object({
  body: journalEntrySchema,
});

export const updateJournalEntrySchema = z.object({
  body: journalEntrySchema.partial(),
});

export const journalEntryIdSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});