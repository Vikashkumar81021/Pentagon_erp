import { z } from "zod";


const userSchema = z.object({
  name: z.string().trim(),

  email: z.string().trim(),

  password: z.string(),

  empcode: z.string().trim(),
});

export const createUserValidator = userSchema;
export const updateUserValidator = userSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required for update",
  });