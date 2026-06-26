import express, { Router } from "express";
import {
  createUserController,
  getUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post("/usercreate", authMiddleware, createUserController);
router.get("/", authMiddleware, getUsersController);
router.put("/:id", authMiddleware, updateUserController);
router.delete("/:id", authMiddleware, deleteUserController);

export default router;