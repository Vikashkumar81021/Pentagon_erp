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

  if (!empcode) {
    throw new BadRequestError("Invalid  EmpCode or PassWord");
  }
  const isMatchPassword = await bcrypt.compare(pasword, existingUser.password);
  if (!isMatchPassword) {
    throw new BadRequestError("Invalid  EmpCode or PassWord");
  }
  const accessToken = generateAccessToken(existingUser.empcode);
  return { accessToken, user: existingUser };
};

export { loginService };
