import { z } from "zod";

const employeeSchema = z.object({
  full_name: z.string().min(3, "Full name is required"),

  email: z.string().email("Invalid email"),

  mobile_number: z.coerce
    .number(),

  desgination: z.string().min(1, "Designation is required"),

  department: z.string().min(1, "Department is required"),

  salary: z.string().min(1, "Salary is required"),

  status_desgnation: z.string().optional(),

  Bank_instutuion: z.string().min(1, "Bank Institution is required"),

  pan_id_card_number: z.string().min(10),

  aadhard_card_number: z
    .string()
    .regex(/^[0-9]{12}$/, "Aadhar must be 12 digits"),

  bank_account_number: z.string().min(8),
});

export const createEmployeeValidator = employeeSchema;

export const updateEmployeeValidator = employeeSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required for update",
  });