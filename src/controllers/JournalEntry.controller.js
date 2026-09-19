import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import path from "path";
import {
  createJournalEntry,
  getAllJournalEntries,
  getJournalEntryById,
  getJournalEntry,
  viewJournalAttachment,
  updateJournalEntry,
  deleteJournalEntry,
} from "../services/JournalEntry.service.js";
import { createAuditLog } from "../services/AuditLog.service.js";

const createJournalEntryController = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      attachment: req.file ? req.file.filename : null,
    };

    const journal = await createJournalEntry(data);

    await createAuditLog({
      userId: req.user.id,
      action: "CREATE",
      module: "JOURNAL_ENTRY",
      activity: "Journal Entry created successfully",
  });

    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Journal Entry created successfully",
      data: {
        ...journal,
        attachment: journal.attachment
          ? `${req.protocol}://${req.get("host")}/uploads/${journal.attachment}`
          : null,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getAllJournalEntriesController = async (req, res, next) => {
  try {
    const journals = await getAllJournalEntries();

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "JOURNAL_ENTRY",
      activity: "Journal Entry fetched successfully",
  });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: journals.length,
      data: journals,
    });
  } catch (error) {
    next(error);
  }
};

const getJournalEntryByIdController = async (req, res, next) => {
  try {
    const journal = await getJournalEntryById(req.params.id);

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "JOURNAL_ENTRY",
      activity: "Journal Entry fetched successfully",
  });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      data: journal,
    });
  } catch (error) {
    next(error);
  }
};

const getJournalEntryController = async (req, res, next) => {
  try {
    const data = await getJournalEntry();

    await createAuditLog({
      userId: req.user.id,
      action: "GET",
      module: "JOURNAL_ENTRY",
      activity: "Journal Entry fetched successfully",
  });
    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const viewJournalAttachmentController = async (req, res) => {
  const journal = await viewJournalAttachment(req.params.id);

  let filePath;

  if (!journal.attachment.includes(":")) {
    filePath = path.join(
      process.cwd(),
      "uploads",
      journal.attachment
    );
  }
  return res.sendFile(filePath);
}; 

const updateJournalEntryController = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      attachment: req.file ? req.file.path : undefined,
    };

    if (req.file) {
      body.attachment = req.file.path;
    }

    const journal = await updateJournalEntry(
      req.params.id,
      data
    );

    await createAuditLog({
      userId: req.user.id,
      action: "PATCH",
      module: "JOURNAL_ENTRY",
      activity: "Journal Entry updated successfully",
  });

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Journal Entry updated successfully",
      data: journal,
    });
  } catch (error) {
    next(error);
  }
};

const deleteJournalEntryController = async (req, res, next) => {
  try {
    await deleteJournalEntry(req.params.id);

    await createAuditLog({
      userId: req.user.id,
      action: "DELETE",
      module: "JOURNAL_ENTRY",
      activity: "Journal Entry deleted successfully",
  });
    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Journal Entry deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export {
  createJournalEntryController,
  getAllJournalEntriesController,
  getJournalEntryByIdController,
  getJournalEntryController,
  viewJournalAttachmentController,
  updateJournalEntryController,
  deleteJournalEntryController,
};