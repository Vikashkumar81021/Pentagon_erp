import prisma from "../config/db.js";
import { BadRequestError } from "../utils/error.js";
import bcrypt from "bcrypt";

import { generateAccessToken } from "../utils/generateToken.js";
const loginService = async (empcode, pasword) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      empcode,
    },
  });

  if (!existingUser) {
    throw new BadRequestError("Invalid  EmpCode or PassWord");
  }
  const isMatchPassword = await bcrypt.compare(pasword, existingUser.password);
  if (!isMatchPassword) {
    throw new BadRequestError("Invalid  EmpCode or PassWord");
  }
  const accessToken = generateAccessToken(existingUser.id);
  return { accessToken, user: existingUser };
};

const getCurrentUserService = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      name: true,
      email: true,
      empcode: true,
      roles: {
        include: {
          role: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new BadRequestError("User not found");
  }

  return user;
};

const logoutService = async (userId) => {
  return { message: "Logout successful" };
};

export { loginService, getCurrentUserService, logoutService };
