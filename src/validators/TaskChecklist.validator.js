import { z } from "zod";

export const updateTaskChecklistValidator = z.object({
  category: z.string().min(1).optional(),
  text: z.string().min(1).optional(),
  completed: z.boolean().optional(),
  employeeId: z.number().int().positive().optional(),
});