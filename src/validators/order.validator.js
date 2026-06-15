import { z } from "zod";

export const orderSchema = z.object({
  order_no: z.string().min(1, "Order number is required"),

  purchaseMode: z.enum(["GEM", "DIRECT_PURCHASE", "TENDER"]),

  clientAccountId: z
    .number()
    .int()
    .positive("Client Account ID must be positive"),

  proposal: z.string().optional(),

  poNumber: z.string().optional(),

  totalAmount: z.number().positive("Total amount must be greater than 0"),

  shippingAddress: z.string().optional(),
});
