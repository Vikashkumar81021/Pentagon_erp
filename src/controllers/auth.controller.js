import {
  getCurrentUserService,
  loginService,
} from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/error.js";

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
    .status(200)
    .json({
      success: true,
      message: "Login successfully",
    });
});
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await getCurrentUserService(req.user.id);

  res.status(200).json({
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
    .status(200)
    .json({
      success: true,
      message: "Logout successfully",
    });
});

export { login, getCurrentUser, logout };
