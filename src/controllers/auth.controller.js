import {
  getCurrentUserService,
  loginService,
} from "../services/auth.service.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/error.js";
import { STATUS_CODE } from "../constants/status.code.js";

const login = asyncHandler(async (req, res) => {
  const { empcode, password } = req.body;

  if (!empcode || !password) {
    throw new BadRequestError("Empcode and Password are required");
  }

  const { accessToken, user } = await loginService(empcode, password);

  res
    .cookie("access_token", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(STATUS_CODE.SUCCESS)
    .json({
      success: true,
      message: "Login Successfully",
      user: {
        id: user.id,
        name: user.name,
        empcode: user.empcode,
        roles: user.roles.map((item) => item.role.name),
      },
    });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await getCurrentUserService(req.user.id);

  res.status(STATUS_CODE.SUCCESS).json({
    success: true,
    data: user,
  });
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie("access_token").status(STATUS_CODE.SUCCESS).json({
    success: true,
    message: "Logout Successfully",
  });
});

export { login, getCurrentUser, logout };
