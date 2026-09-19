import {asyncHandler} from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { BadRequestError } from "../utils/error.js";
import {
   createproduct,
   fetchproducts
} from "../services/product.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createProductController = asyncHandler(async (req, res) => {
  const { name, sku, category, unitPrice } = req.body;
  const product = await createproduct({ 
    name,
    sku,
    category,
    unitPrice });

    await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "PRODUCT",
      activity: "Products created successfully",
  });

  res.status(STATUS_CODE.CREATED).json({
    message: "Product created successfully",
    data: product,
  });
});

const fetchProductsController = asyncHandler(async (req, res) => {
  const products = await fetchproducts();

  await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "PRODUCT",
      activity: "Products fetched successfully",
  });

  res.status(STATUS_CODE.SUCCESS).json({
    SUCCESS: true,
    message: "Products fetched successfully",
    data: products,
  });
});

export { createProductController, fetchProductsController };