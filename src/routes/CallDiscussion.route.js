import express from "express";
import{
    createCallDiscussionController,
    getAllCallDiscussionsController,
    deleteCallDiscussionController,
}from "../controllers/CallDiscussion.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createCallDiscussion", authMiddleware, createCallDiscussionController);
router.get("/fetchCallDiscussions", authMiddleware, getAllCallDiscussionsController);
router.delete("/deleteCallDiscussion/:id", authMiddleware, deleteCallDiscussionController);
export default router;