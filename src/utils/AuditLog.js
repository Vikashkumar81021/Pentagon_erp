import { createAuditLog } from "../services/AuditLog.service.js";

const auditLog = async ({ userId, action, module, activity }) => {
  try {
    await createAuditLog({
      userId,
      action,
      module,
      activity,
    });
  } catch (error) {
    console.error("Audit Log Error:", error.message);
  }
};

export default auditLog;