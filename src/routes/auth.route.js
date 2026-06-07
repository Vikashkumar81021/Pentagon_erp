import express from "express";
import { getCurrentUser, login } from "../controllers/auth.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.get("/currentUser", protect, getCurrentUser);
export default router;
