import { asyncHandler } from '../utils/asyncHandler.js';
import { STATUS_CODE } from '../constants/status.code.js';
import { createNotice, fetchNotices } from '../services/notice.service.js';

const createNoticeController = asyncHandler(async (req, res) => {
    const { text } = req.body;
    const notice = await createNotice({ text });
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
export  { createNoticeController, getNoticesController };