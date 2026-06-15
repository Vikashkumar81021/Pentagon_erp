import { config } from "../config/configuration.js";
import jwt from "jsonwebtoken";
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
    //ADD USER ID ON HEADERS
    // req.headers["x-user-id"] = decoded.id.toString();
    // logger.info(`Userid ${decoded.id} is authentication successfully`);
    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
