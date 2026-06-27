import {asyncHandler} from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { BadRequestError } from "../utils/error.js";
import {
   createproduct,
   fetchproducts
} from "../services/product.service.js";

const createProductController = asyncHandler(async (req, res) => {
  const { name, sku, category, unitPrice } = req.body;
  const product = await createproduct({ 
    name,
    sku,
    category,
    unitPrice });
  res.status(STATUS_CODE.CREATED).json({
    message: "Product created successfully",
    data: product,
  });
});

const fetchProductsController = asyncHandler(async (req, res) => {
  const products = await fetchproducts();
  res.status(STATUS_CODE.SUCCESS).json({
    SUCCESS: true,
    message: "Products fetched successfully",
    data: products,
  });
});

export { createProductController, fetchProductsController };