import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import { BadRequestError } from "../utils/error.js";

const createUserService = async (data) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      empcode: data.empcode,
    },
  });
  if (existingUser) {
     throw new BadRequestError("Employee Code already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

const getUsersService = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      empcode: true,
    },
  });
};

const updateUserService = async (id, data) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      empcode: true,
    },
  });
};

const deleteUserService = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  await prisma.user.delete({
    where: { id },
  });
};
export {
  createUserService,
  getUsersService,
  updateUserService,
  deleteUserService,
};
