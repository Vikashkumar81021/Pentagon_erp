import { STATUS_CODE } from "../constants/status.code.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {
  createInvoiceservice,
  getAllInvoiceservice,
} from "../services/InvoiceItem.service.js";

const createInvoiceController = async (req, res, next) => {
  try {
    const invoice = await createInvoiceservice(req.body);

    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Invoice created successfully",
      data: invoice,
    });
  } catch (error) {
    next(error);
  }
};

const getAllInvoiceController = async (req, res, next) => {
  try {
    const invoices = await getAllInvoiceservice();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: invoices.length,
      data: invoices,
    });
  } catch (error) {
    next(error);
  }
};

export {
  createInvoiceController,
  getAllInvoiceController,
};