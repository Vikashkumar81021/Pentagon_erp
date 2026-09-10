import { asyncHandler } from '../utils/asyncHandler.js';
import { STATUS_CODE } from '../constants/status.code.js';
import { 
    createNotice, 
    fetchNotices,
    updateNotice, 
    deleteNotice,
    fetchNoticesByType 
} from '../services/notice.service.js';
import { createNoticeValidator, updateNoticeValidator } from '../validators/notice.validator.js';
import { createAuditLog } from "../services/AuditLog.service.js";

const createNoticeController = asyncHandler(async (req, res) => {
    const validatedData = createNoticeValidator.parse(req.body);
    const notice = await createNotice(validatedData);

    await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "NOTICE",
      activity: "Notice created successfully",
  });

    return res.status(STATUS_CODE.CREATED).json({
        success: true,
        message: "Notice created successfully",
        data: notice,
    });
});
const getNoticesController = asyncHandler(async (req, res) => {
    const notices = await fetchNotices();
    
    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "NOTICE",
      activity: "Notice fetched successfully",
  });

    return res.status(200).json({
        success: true,
        message: "Notices fetched successfully",
        data: notices,
    });
});

const updateNoticeController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const validatedData = updateNoticeValidator.parse(req.body);

  const notice = await updateNotice(id, validatedData);

  await createAuditLog({
      userId: req.user.id,
      action: "PATCH",
      module: "NOTICE",
      activity: "Notice updated successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Notice updated successfully",
    data: notice,
  });
});

const deleteNoticeController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await deleteNotice(id);

    await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "NOTICE",
      activity: "Notice deleted successfully",
  });

    return res.status(200).json({
        success: true,
        message: "Notice deleted successfully",
    });
});

const getNoticeByTypeController = asyncHandler(async (req, res) => {
  const { type } = req.query;

  const notices = await fetchNoticesByType(type);

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "NOTICE",
      activity: "Notices fetched successfully",
  });

  return res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Notices fetched successfully",
    count: notices.length,
    data: notices,
  });
});
export  { 
    createNoticeController, 
    getNoticesController,
    updateNoticeController, 
    deleteNoticeController, 
    getNoticeByTypeController 
};