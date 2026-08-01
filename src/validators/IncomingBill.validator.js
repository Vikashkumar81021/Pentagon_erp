import { z } from "zod";

export const createIncomingBillSchema = z.object({

  vendor: z.string().min(1, "Vendor is required"),

  duedate: z.string().min(1, "Due Date is required"),

  costcategory: z.string().min(1, "Cost Category is required"),

  invoicevalue: z.string().min(1, "Invoice Value is required"),
  
});

export const updateIncomingBillSchema =
  createIncomingBillSchema.partial();