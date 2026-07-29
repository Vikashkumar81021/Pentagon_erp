import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

import {
  createJournalEntry,
  getAllJournalEntries,
  getJournalEntryById,
  getJournalEntry,
  viewJournalAttachment,
  updateJournalEntry,
  deleteJournalEntry,
} from "../services/JournalEntry.service.js";

const createJournalEntryController = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      attachment: req.file ? req.file.path : null,
    };

    const journal = await createJournalEntry(data);

    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Journal Entry created successfully",
      data: journal,
    });
  } catch (error) {
    next(error);
  }
};

const getAllJournalEntriesController = async (req, res, next) => {
  try {
    const journals = await getAllJournalEntries();

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

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const viewJournalAttachmentController = async (req, res, next) => {
  try {
    const journal = await viewJournalAttachment(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      attachment: journal.attachment,
    });
  } catch (error) {
    next(error);
  }
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