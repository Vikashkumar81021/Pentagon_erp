import { z } from "zod";

const jobApplicationSchema = z.object({
  hiringRequirementId: z.coerce.number(),

  candidateName: z.string().trim().min(3),

  email: z.string().email(),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid Mobile Number"),
});

export const createJobApplicationValidator = jobApplicationSchema;