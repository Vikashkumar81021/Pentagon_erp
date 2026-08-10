import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import{
    createInvoiceController,
  getAllInvoiceController,
  updateInvoiceController
} from "../controllers/InvoiceItem.controller.js";

const router = express.Router();

router.post("/createInvoiceItem", authMiddleware, createInvoiceController);

router.get("/fetchAllInvoiceItem", authMiddleware, getAllInvoiceController);

router.patch("/updateInvoiceItem/:id", authMiddleware, updateInvoiceController);
export default router;