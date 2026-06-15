import { ForBiddenError } from "../utils/error.js";
import { ERROR_MESSAGE } from "../constants/error.message.js";

const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      return next(new ForBiddenError(ERROR_MESSAGE.ROLE_NOT_FOUND));
    }
    if (!allowedRoles.includes(userRole)) {
      return next(new ForBiddenError(ERROR_MESSAGE.NO_PERMISSIONS_FOR_ROLE));
    }
    next();
  };
};

export default roleMiddleware;
