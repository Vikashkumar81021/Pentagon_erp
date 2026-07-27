import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import{
    createJournalEntryController,
  getAllJournalEntriesController,
  getJournalEntryByIdController,
  updateJournalEntryController,
  deleteJournalEntryController,
} from "../controllers/JournalEntry.controller.js";

const router = express.Router();

router.post("/createJournalEntry", authMiddleware, createJournalEntryController);

router.get("/fetchJournalEntry", authMiddleware, getAllJournalEntriesController);

router.get("/fetchJournalEntry/:id", authMiddleware, getJournalEntryByIdController);

router.patch("/updateJournalEntry/:id", authMiddleware, updateJournalEntryController);

router.delete("/deleteJournalEntry/:id", authMiddleware, deleteJournalEntryController);
export default router;