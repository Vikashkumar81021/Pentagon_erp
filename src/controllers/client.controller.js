import { getClientAccount } from "../services/client.account.service.js";

const getClientAccountController = async (req, res) => {
  const accountclient = await getClientAccount();
  return res.status(200).json({
    success: true,
    message: "Client account fetched successfully",
    data: accountclient,
  });
};

export { getClientAccountController };
