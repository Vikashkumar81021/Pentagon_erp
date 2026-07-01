import { z } from "zod";

export const createEmployeeOnboardValidator = z.object({
  emp_full_name: z
    .string()
    .min(3, "Employee name is required"),

  designation_role: z
    .string()
    .min(2, "Designation is required"),

  joining_date: z.coerce.date(),
});

export const updateEmployeeOnboardValidator =
  createEmployeeOnboardValidator
    .partial()