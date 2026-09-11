import { z } from "zod";

export const callDiscussionValidator = z.object({
  sales_visit_id: z.coerce
    .number()
    .int()
    .positive("Sales Visit ID is required"),

  call_date: z
    .string()
    .min(1, "Call date is required"),

  call_time: z
    .string()
    .min(1, "Call time is required"),

  call_type: z
    .string()
    .min(1, "Call type is required"),

  duration: z.coerce
    .number()
    .int()
    .nonnegative("Duration cannot be negative"),

  discussion: z
    .string()
    .min(1, "Discussion is required"),

  requirement: z
    .string()
    .min(1, "Requirement is required"),

  solution: z
    .string()
    .min(1, "Solution is required"),

  outcome: z
    .string()
    .min(1, "Outcome is required"),

  expected_amount: z.coerce
    .number()
    .nonnegative("Expected amount cannot be negative"),

  next_followup_date: z
    .string()
    .min(1, "Next follow-up date is required"),

  followup_mode: z
    .string()
    .min(1, "Follow-up mode is required"),

  remarks: z
    .string()
    .optional(),

  status:z
    .string()
    .optional(),
});

export const updateCallDiscussionValidator =
  callDiscussionValidator.partial();