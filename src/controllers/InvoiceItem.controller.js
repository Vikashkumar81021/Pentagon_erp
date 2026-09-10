import { STATUS_CODE } from "../constants/status.code.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {
  createInvoiceservice,
  getAllInvoiceservice,
  updateInvoiceservice,
} from "../services/InvoiceItem.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createInvoiceController = async (req, res, next) => {
  try {
    
    const invoice = await createInvoiceservice(req.body);

    await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "INVOICE_ITEM",
      activity: "Invoice created successfully",
    });

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

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "INVOICE_ITEM",
      activity: "Invoice feched successfully",
    });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: invoices.length,
      data: invoices,
    });
  } catch (error) {
    next(error);
  }
};

const updateInvoiceController = async (req, res, next) => {
  try {
    const invoice = await updateInvoiceservice(
      req.params.id,
      req.body
    );

    await createAuditLog({
      userId: req.user.id,
      action: "PATCH",
      module: "INVOICE_ITEM",
      activity: "Invoice updated successfully",
    });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Invoice updated successfully",
      data: invoice,
    });
  } catch (error) {
    next(error);
  }
};

export {
  createInvoiceController,
  getAllInvoiceController,
  updateInvoiceController
};