import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import { BadRequestError } from "../utils/error.js";
import { generateAccessToken } from "../utils/generateToken.js";

const loginService = async (empcode, password) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      empcode,
    },
    include: {
      roles: {
        include: {
          role: true,
        },
      },
    },
  });

  if (!existingUser) {
    throw new BadRequestError("Invalid EmpCode or Password");
  }

  const isMatchPassword = await bcrypt.compare(password, existingUser.password);

  if (!isMatchPassword) {
    throw new BadRequestError("Invalid EmpCode or Password");
  }

  const roles = existingUser.roles.map((item) => item.role.name);

  const accessToken = generateAccessToken({
    id: existingUser.id,
    roles,
  });

  return {
    accessToken,
    user: existingUser,
  };
};

const getCurrentUserService = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      empcode: true,
      roles: {
        select: {
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

  return {
    ...user,
    roles: user.roles.map((r) => r.role.name),
  };
};

export { loginService, getCurrentUserService };
