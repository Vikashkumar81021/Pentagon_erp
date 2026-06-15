import jwt from "jsonwebtoken";
import { config } from "../config/configuration.js";
import { UnAuthorizedError } from "../utils/error.js";
import { ERROR_MESSAGE } from "../constants/error.message.js";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      throw new UnAuthorizedError(ERROR_MESSAGE.UNAUTHORISED);
    }

    const decoded = jwt.verify(token, config.JWT_ACCESS_SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
