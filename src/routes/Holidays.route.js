import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
    createHolidayController,
    getAllHolidaysController,
    getUpcomingHolidayController,
    deleteHolidayController,
} from "../controllers/Holidays.controller.js";
const router = express.Router();



router.post("/createHolidays" ,createHolidayController );

router.get("/fetchHolidays", authMiddleware ,getAllHolidaysController);

router.get("/upcomingHoliday", getUpcomingHolidayController);

router.delete("/deleteHoliday/:id", deleteHolidayController);
export default router;