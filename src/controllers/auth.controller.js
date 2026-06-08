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
    throw new BadRequestError("Missing fileds are required");
  }
  const { accessToken } = await loginService(empcode, password);
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
      message: "Login successfully",
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
  res
    .clearCookie("access_token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .status(STATUS_CODE.SUCCESS)
    .json({
      success: true,
      message: "Logout successfully",
    });
});

export { login, getCurrentUser, logout };
