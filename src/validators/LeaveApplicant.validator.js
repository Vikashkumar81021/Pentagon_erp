import { z } from "zod";

export const ApprovedTypeEnum = z.enum([
  "PENDING",
  "APPROVED",
  "REJECTED",
]);

export const createLeaveApplicantValidator = z.object({
  applicant_name: z.string().min(1, "Applicant name is required"),

  leave_category: z.string().min(1, "Leave category is required"),

  from_date: z.coerce.date(),

  to_date: z.coerce.date(),

  leave_approve: ApprovedTypeEnum.default("PENDING"),

  reason_absence: z.string().min(1, "Reason is required"),
});

export const updateLeaveApplicantValidator =
  createLeaveApplicantValidator.partial().refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "At least one field is required for update",
    }
  );