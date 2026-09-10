import { getClientAccount } from "../services/client.account.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const getClientAccountController = async (req, res) => {
  const accountclient = await getClientAccount();

  await createAuditLog({
    userId: req.user.id,
    action: "CREATE",
    module: "CLIENT",
    activity: "Client account created successfully",
  });

  return res.status(200).json({
    success: true,
    message: "Client account fetched successfully",
    data: accountclient,
  });
};

export { getClientAccountController };
