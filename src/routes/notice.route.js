import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import {
     createNoticeController,
      getNoticesController 
}from '../controllers/notice.controllers.js';

const router = express.Router();
/** * @swagger
 * tags:
 *   name: Notice
 *   description: Notice management APIs
 */

/** * @swagger
 * /api/v1/notices:
 *   get:
 *     summary: Get all notices
 *     tags: [Notice]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *      200:
 *       description: Notices fetched successfully
 */
router.get("/notices", getNoticesController);
/**
 * @swagger
 * /api/notice/createNotice:
 *   post:
 *     summary: Create a new notice
 *     tags: [Notice]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *                 example: Office will remain closed on Sunday.
 *     responses:
 *       201:
 *         description: Notice created successfully
 */
router.post("/notice/createNotice", createNoticeController);
export default router;