import { z } from "zod";

export const createHiringRequirementValidator = z.object({
  jobTitle: z
    .string()
    .min(1, "Job title is required"),

  department: z
    .string()
    .min(1, "Department is required"),

  employmentType: z
    .string()
    .min(1, "Employment type is required"),

  jobStatus: z
    .string()
    .optional(),

  description: z
    .string()
    .min(1, "Description is required"),
});

export const updateHiringRequirementValidator =
  createHiringRequirementValidator.partial();