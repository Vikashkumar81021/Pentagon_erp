import { z } from "zod";

const createAuditLogValidator = z.object({
  userId: z.coerce.number().int().positive().optional().nullable(),
  action: z.string().optional().nullable(),
  module: z.string().optional().nullable(),
  activity: z.string().optional().nullable(),
});

const updateAuditLogValidator = createAuditLogValidator.partial();

export {
  createAuditLogValidator,
  updateAuditLogValidator,
};