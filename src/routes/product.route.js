import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  createProductController,
  fetchProductsController,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/createProduct",authMiddleware,createProductController);
router.get("/fetchProducts",authMiddleware,fetchProductsController);

export default router;