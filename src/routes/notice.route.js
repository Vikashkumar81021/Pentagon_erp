import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import {
     createNoticeController,
      getNoticesController,
      deleteNoticeController
}from '../controllers/notice.controllers.js';

const router = express.Router();

router.get("/notices", getNoticesController);

router.post("/notice/createNotice", createNoticeController);
router.delete("/notice/:id", deleteNoticeController);
export default router;