import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import {
     createNoticeController,
      getNoticesController,
      deleteNoticeController,
      getNoticeByTypeController
}from '../controllers/notice.controllers.js';

const router = express.Router();

router.get("/notices", getNoticesController);

router.post("/notice/createNotice", createNoticeController);
router.delete("/notice/:id", deleteNoticeController);
router.get("/notice/filter", getNoticeByTypeController);
export default router;