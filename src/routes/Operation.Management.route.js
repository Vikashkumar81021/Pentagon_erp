import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { 
    getPayrollController,
} from "../controllers/Operation.Management.controller.js";

const router = express.Router();

router.get("/fetchPayrollempDetail/:id", authMiddleware, getPayrollController);

export default router;