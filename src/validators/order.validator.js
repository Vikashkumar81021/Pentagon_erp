import { z } from "zod";

export const orderItemValidator = z.object({
  description: z
    .string()
    .min(1, "Description is required"),

  quantity: z
    .coerce
    .number()
    .int()
    .positive("Quantity must be greater than 0"),

  unitPrice: z
    .coerce
    .number()
    .nonnegative("Unit price cannot be negative"),
});

export const createOrderValidator = z.object({
  customerName: z
    .string()
    .min(1, "Customer name is required"),

  phone: z
    .string()
    .min(10, "Invalid phone number"),

  email: z
    .string()
    .email("Invalid email"),

  purchaseOrderNumber: z
    .string()
    .min(1, "Purchase order number is required"),

  orderDate: z
    .string()
    .min(1, "Order date is required"),

  deliveryTargetDate: z
    .string()
    .min(1, "Delivery target date is required"),

  items: z
    .array(orderItemValidator)
    .min(1, "At least one order item is required"),

  upfrontAdvancePayment: z
    .coerce
    .boolean(),

  advanceAmount: z
    .coerce
    .number()
    .nonnegative()
    .optional(),

  depositAccount: z
    .string()
    .optional(),

  paymentMode: z
    .string()
    .optional(),

  paymentReference: z
    .string()
    .optional(),

  termsAndNotes: z
    .string()
    .min(1, "Terms and notes are required"),
});