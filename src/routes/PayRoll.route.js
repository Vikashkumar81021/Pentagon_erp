import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
    createPayrollController,
    getAllPayrollsController,
    getPayrollByIdController,
    updatePayrollController,
    deletePayrollController,
} from "../controllers/PayRoll.controller.js";

const router = express.Router();

router.post("/createPayRoll", authMiddleware, createPayrollController);
router.get("/fetchAllPayRoll", authMiddleware, getAllPayrollsController);
router.get("/fetchPayRoll/:id", authMiddleware, getPayrollByIdController);
router.patch("/updatePayRoll/:id", authMiddleware, updatePayrollController);
router.delete("/deletePayRoll/:id", authMiddleware, deletePayrollController);
export default router;