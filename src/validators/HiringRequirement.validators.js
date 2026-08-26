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

  openings: z
    .coerce
    .number()
    .int()
    .positive("Openings must be greater than 0"),

  experienceRequired: z
    .string()
    .min(1, "Experience required is required"),

  qualification: z
    .string()
    .min(1, "Qualification is required"),

  location: z
  .array(z.string()
  .min(1))
  .min(1, "At least one location is required"),

  salaryRange: z
    .string()
    .optional(),

  applicationDeadline: z
    .string()
    .min(1, "Application deadline is required"),

  hiringManager: z
    .string()
    .optional(),

  jobStatus: z
    .string()
    .optional(),

  description: z
    .string()
    .min(1, "Description is required"),
});

export const updateHiringRequirementValidator =
  createHiringRequirementValidator.partial();