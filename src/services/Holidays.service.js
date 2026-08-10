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

const getUpcomingHoliday = async () => {
  const today = new Date();
today.setDate(today.getDate() + 2);

const day = today.getDate();

const month = today
  .toLocaleString("en-US", { month: "short" })
  .toLowerCase()
  .slice(0, 2);

const year = today.getFullYear().toString().slice(-2);

const holidayDate = `${day}-${month}-${year}`;

const holiday = await prisma.holidays.findFirst({
  where: {
    holidayDate,
  },
});

  return holiday;
};

const deleteHoliday = async (id) => {
  const holiday = await prisma.holidays.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!holiday) {
    throw new NotFoundError("Holiday not found");
  }

  await prisma.holidays.delete({
    where: {
      id: Number(id),
    },
  });

  return holiday;
};

export {
  createHoliday,
  getAllHolidays,
  getUpcomingHoliday,
  deleteHoliday,
};