import { z } from "zod";

export const createNoticeValidator = z.object({
  title: z
    .string()
    .min(3, "Title is required")
    .max(100, "Title must be less than 100 characters"),

  type: z
    .string()
    .min(1, "Type is required"),

  text: z
    .string()
    .min(5, "Notice text is required")
    .max(1000, "Notice text must be less than 1000 characters"),
});

export const updateNoticeValidator = createNoticeValidator
  .partial()