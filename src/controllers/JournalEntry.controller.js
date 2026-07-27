import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";

import {
  createJournalEntry,
  getAllJournalEntries,
  getJournalEntryById,
  updateJournalEntry,
  deleteJournalEntry,
} from "../services/JournalEntry.service.js";

const createJournalEntryController = async (req, res, next) => {
  try {
    const journal = await createJournalEntry(req.body);

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

const updateJournalEntryController = async (req, res, next) => {
  try {
    const journal = await updateJournalEntry(
      req.params.id,
      req.body
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
  updateJournalEntryController,
  deleteJournalEntryController,
};