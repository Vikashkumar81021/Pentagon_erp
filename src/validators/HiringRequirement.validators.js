import { z } from "zod";

export const createHiringRequirementValidator = z.object({
  job_Title: z.string().min(1, "Job title is required"),
  department: z.string().min(1, "Department is required"),
  job_type: z.string().min(1, "Job type is required"),
  roles_requirements: z.string().min(1, "Roles & requirements are required"),
});


export const updateHiringRequirementValidator =
  createHiringRequirementValidator.partial()