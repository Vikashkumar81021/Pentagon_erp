import express from "express";
import { login, getCurrentUser } from "../controllers/auth.controller.js";
const router = express.Router();
router.get("/", protect, getCurrentUser);
router.post("/logout", logout);
export default router;