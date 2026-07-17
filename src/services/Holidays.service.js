import prisma from "../config/db.js";
import { NotFoundError } from "../utils/error.js";

const createHoliday = async (data) => {
  return await prisma.holidays.create({
    data: {
      holidayName: data.holidayName,
      holidayDate: data.holidayDate,
      day: data.day,
    },
  });
};

const getAllHolidays = async () => {
  return await prisma.holidays.findMany({
    orderBy: {
      holidayDate: "asc",
    },
  });
};

export {
  createHoliday,
  getAllHolidays,
};