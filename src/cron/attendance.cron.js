import cron from "node-cron";
import { syncAttendanceService } from "../services/attendence.service.js";

export const startAttendanceCron = () => {
  // Every 1 minute
  cron.schedule("* * * * *", async () => {
    console.log("Attendance Sync Started:", new Date());

    try {
      const result = await syncAttendanceService();

      console.log("Attendance Sync Success:", result);
    } catch (error) {
      console.error("Attendance Sync Failed:", error.message);
    }
  });

  console.log("Attendance Cron Started...");
};
