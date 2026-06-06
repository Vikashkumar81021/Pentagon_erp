import { loginService } from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/error.js";

const login = asyncHandler(async (req, res) => {
  const { empcode, password } = req.body;
  console.log("em", empcode);

  if (!empcode || !password) {
    throw new BadRequestError("Missing fileds are required");
  }
  const { accessToken } = await loginService(empcode, password);

  res
    .cookie("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      success: true,
      message: "Login successfully",
    });
});

export { login };
