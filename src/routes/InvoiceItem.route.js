import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
    createInvoiceController,
  getAllInvoiceController
} from "../controllers/InvoiceItem.controller.js";

const router = express.Router();

router.post("/createInvoiceItem", authMiddleware, createInvoiceController);

router.get("/fetchAllInvoiceItem", authMiddleware, getAllInvoiceController);
export default router;