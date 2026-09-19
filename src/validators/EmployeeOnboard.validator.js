import { z } from "zod";

export const createEmployeeOnboardValidator = z.object({
  joiningDate: z.coerce.date(),
  candidateName: z.string().optional().nullable(),
  jobTitle: z.string().optional().nullable(),
  department: z.string().optional(),
});

export const updateEmployeeOnboardValidator =
  createEmployeeOnboardValidator.partial();
