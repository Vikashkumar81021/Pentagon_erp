import { z } from "zod";


export const BillingSchema = z.object({

  date: z
    .string()
    .datetime({
      message: "Invalid date format"
    }),

  particulars: z
    .string()
    .min(2, "Particulars is required"),

  item_details: z
    .string()
    .min(2, "Item details is required"),


  taxable_amount: z
    .number()
    .positive("Taxable amount must be greater than zero"),


  business_value: z
    .number()
    .int()
    .positive("Business value must be greater than zero"),



  customer_name: z
    .string()
    .min(2,"Customer name required"),


  po_contact_name: z.string().min(2),
  po_contact_email: z.string().email(),
  po_contact_phone: z.string().min(10),


  billing_contact_name: z.string().min(2),
  billing_contact_email: z.string().email(),
  billing_contact_phone: z.string().min(10),


  recipient_name: z.string().min(2),
  recipient_email: z.string().email(),
  recipient_phone: z.string().min(10),


  accounts_phone: z.string().min(10),

  execution_phone: z.string().min(10),

  support_phone: z.string().min(10),


  support_name: z.string().min(2),

  support_contact_phone: z.string().min(10)

});