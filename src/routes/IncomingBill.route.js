import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
    createIncomingBillController,
    getAllIncomingBillsController,
    getIncomingBillByIdController,
    updateIncomingBillController,
    deleteIncomingBillController
} from "../controllers/IncomingBill.controller.js";

const router = express.Router();

router.post("/createIncomingBill", authMiddleware, createIncomingBillController);
router.get("/fetchtAllIncomingBills", authMiddleware, getAllIncomingBillsController);
router.get("/fetchIncomingBillById/:id", authMiddleware, getIncomingBillByIdController);
router.patch("/updateIncomingBill/:id", authMiddleware, updateIncomingBillController);
router.delete("/deleteIncomingBill/:id", authMiddleware, deleteIncomingBillController);
export default router;