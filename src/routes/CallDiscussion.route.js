import express from "express";
import{
    createCallDiscussionController,
    getAllCallDiscussionsController,
    updateCallDiscussionController,
    updateCallDiscussionStatusController,
    deleteCallDiscussionController,
}from "../controllers/CallDiscussion.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createCallDiscussion", authMiddleware, createCallDiscussionController);
router.get("/fetchCallDiscussions", authMiddleware, getAllCallDiscussionsController);
router.patch("/updateCallDiscussion/:id", authMiddleware, updateCallDiscussionController);
router.patch("/callDiscussion/:id/status", authMiddleware, updateCallDiscussionStatusController);
router.delete("/deleteCallDiscussion/:id", authMiddleware, deleteCallDiscussionController);
export default router;