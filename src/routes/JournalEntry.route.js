import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";
import{
    createJournalEntryController,
  getAllJournalEntriesController,
  getJournalEntryByIdController,
  getJournalEntryController,
  updateJournalEntryController,
  deleteJournalEntryController,
} from "../controllers/JournalEntry.controller.js";

const router = express.Router();

router.post("/createJournalEntry", authMiddleware, upload.single("attachment"), createJournalEntryController);

router.get("/fetchJournalEntry", authMiddleware, getAllJournalEntriesController);

router.get("/fetchJournalEntry/:id", authMiddleware, getJournalEntryByIdController);

router.get("/fetchJournalEntrys", authMiddleware, getJournalEntryController);

router.patch("/updateJournalEntry/:id", authMiddleware, upload.single("attachment"), updateJournalEntryController);

router.delete("/deleteJournalEntry/:id", authMiddleware, deleteJournalEntryController);
export default router;