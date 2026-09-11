import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createFollowupService,
  getFollowupService,
} from "../services/calltype.service.js";

import { createFollowupValidator } from "../validators/calltype.validator.js";


const createFollowupController = asyncHandler(async (req, res) => {
  const payload = createFollowupValidator.parse(req.body);
  const result = await createFollowupService(payload);

  await createAuditLog({
    userId: req.user.id,
    action: "CREATE",
    module: "CALL_TYPE",
    activity: "Follow Up created successfully",
  });

  return res.status(STATUS_CODE.CREATED).json({
    success: true,
    message: "Follow Up created successfully",
    data: result,
  });
});

const getFollowupController = asyncHandler(async (req, res) => {
  const result = await getFollowupService();

  await createAuditLog({
    userId: req.user.id,
    action: "GET",
    module: "CALL_TYPE",
    activity: "Follow Up created successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: result,
  });
});

export{
    createFollowupController,
    getFollowupController,
}