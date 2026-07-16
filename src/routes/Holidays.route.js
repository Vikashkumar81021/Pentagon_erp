import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
    createHolidayController,
    getAllHolidaysController,
} from "../controllers/Holidays.controller.js";
const router = express.Router();



router.post("/createHolidays" ,createHolidayController );

router.get("/fetchHolidays", authMiddleware ,getAllHolidaysController);

export default router;