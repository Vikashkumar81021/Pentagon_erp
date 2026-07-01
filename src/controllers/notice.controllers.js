import { asyncHandler } from '../utils/asyncHandler.js';
import { STATUS_CODE } from '../constants/status.code.js';
import { 
    createNotice, 
    fetchNotices, 
    deleteNotice,
    fetchNoticesByType 
} from '../services/notice.service.js';
import { createNoticeValidator } from '../validators/notice.validator.js';

const createNoticeController = asyncHandler(async (req, res) => {
    const validatedData = createNoticeValidator.parse(req.body);
    const notice = await createNotice(validatedData);
    return res.status(STATUS_CODE.CREATED).json({
        success: true,
        message: "Notice created successfully",
        data: notice,
    });
});
const getNoticesController = asyncHandler(async (req, res) => {
    const notices = await fetchNotices();
    
    
    return res.status(200).json({
        success: true,
        message: "Notices fetched successfully",
        data: notices,
    });
});
const deleteNoticeController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await deleteNotice(id);
    return res.status(200).json({
        success: true,
        message: "Notice deleted successfully",
    });
});

const getNoticeByTypeController = asyncHandler(async (req, res) => {
  const { type } = req.query;

  const notices = await fetchNoticesByType(type);

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
    deleteNoticeController, 
    getNoticeByTypeController 
};