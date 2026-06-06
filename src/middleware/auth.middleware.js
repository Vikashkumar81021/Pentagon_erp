import jwt from "jsonwebtoken";
import { UnAuthorizedError } from "../utils/error.js";

const protect = (req, res, next) => {
  try {
    const accessToken = req.cookies?.access_token;

    if (!accessToken) {
      throw new UnAuthorizedError("Access token is required");
    }

    const decoded = jwt.verify(
      accessToken,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    throw new UnAuthorizedError("Invalid or expired access token");
  }
};

export default protect;