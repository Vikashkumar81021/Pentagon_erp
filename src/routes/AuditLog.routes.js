import express from "express";
import{
    createAuditLogController,
    getAuditLogsController,
    getAuditLogByIdController,
    updateAuditLogController,
    deleteAuditLogController,
}from "../controllers/AuditLog.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createAuditLog", authMiddleware, createAuditLogController);
router.get("/fetchAuditLog", authMiddleware, getAuditLogsController);
router.get("/fetchAuditLogById/:id", authMiddleware, getAuditLogByIdController);
router.patch("/updateAuditLog/:id", authMiddleware, updateAuditLogController);
router.delete("/deleteAuditLog/:id", authMiddleware, deleteAuditLogController);

export default router;