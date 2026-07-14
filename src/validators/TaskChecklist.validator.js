import { z } from "zod";

const taskChecklistSchema = z.object({
  category: z.string().trim().min(1, "Category is required"),

  text: z.string().trim().min(1, "Text is required"),

  completed: z.boolean().optional(),

  employeeOnboardId: z.coerce.number().int().positive(),
});

export const createTaskChecklistValidator = taskChecklistSchema;

export const updateTaskChecklistValidator = taskChecklistSchema
  .partial()