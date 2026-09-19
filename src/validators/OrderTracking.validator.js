import { z } from "zod";

export const createOrderTrackingValidator = z.object({
  orderId: z.coerce.number().int().positive(),
  customer: z.string().min(1, "Customer is required"),
  orderDate: z.coerce.date(),
  userId: z.coerce.number().int().positive(),
  amount: z.coerce.number().nonnegative(),
  status: z.string().min(1, "Status is required"),
});

export const updateOrderTrackingValidator =
  createOrderTrackingValidator.partial();