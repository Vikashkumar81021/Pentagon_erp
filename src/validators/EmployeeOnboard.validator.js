import { z } from "zod";

export const createEmployeeOnboardValidator = z.object({
  joiningDate: z.coerce.date(),
});

export const updateEmployeeOnboardValidator =
  createEmployeeOnboardValidator.partial();
