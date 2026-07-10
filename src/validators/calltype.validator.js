import { z } from "zod";

export const CallTypeEnum = z.enum([
  "PHONE",
  "WHATSAPP",
  "VIDEO_CALL",
  "MEETING",
]);

export const DiscussionOutcomeEnum = z.enum([
  "INTERESTED",
  "FOLLOW_UP",
  "NEGOTIATION",
  "QUOTATION_REQUIRED",
  "NOT_INTERESTED",
  "CONVERTED",
]);

export const FollowupModeEnum = z.enum([
  "PHONE",
  "WHATSAPP",
  "EMAIL",
  "MEETING",
]);

export const ApprovalStatusEnum = z.enum([
  "PENDING",
  "APPROVED",
  "REJECTED",
]);

export const createFollowupValidator = z.object({
  salesVisitId: z.coerce.number(),

  call_type: CallTypeEnum,

  discussion_outcome: DiscussionOutcomeEnum,

  approved_by: z.string().optional(),

  approved_date: z.coerce.date().optional(),

  management_remarks: z.string().optional(),

  followup_mode: FollowupModeEnum.optional(),

  approval_status: ApprovalStatusEnum.optional(),
});