import express from "express";
import { getCurrentUser, login } from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.get("/currentUser", authMiddleware, getCurrentUser);
export default router;
