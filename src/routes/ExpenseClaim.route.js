import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import{
    createExpenseClaimController,
    getAllExpenseClaimsController,
    getExpenseClaimByIdController,
    updateExpenseClaimController,
    deleteExpenseClaimController,
} from "../controllers/ExpenseClaim.controller.js";
const router = express.Router();

router.post("/createExpenseClaim", authMiddleware, createExpenseClaimController);
router.get("/fetchAllExpenseClaims", authMiddleware, getAllExpenseClaimsController);
router.get("/fetchExpenseClaim/:id", authMiddleware, getExpenseClaimByIdController);
router.patch("/updateExpenseClaim/:id", authMiddleware, updateExpenseClaimController);
router.delete("/deleteExpenseClaim/:id", authMiddleware, deleteExpenseClaimController);
export default router;