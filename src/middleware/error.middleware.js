import { ApiError } from "../utils/error.js";
import { STATUS_CODE } from "../constants/status.code.js";
import { ERROR_MESSAGE } from "../constants/error.message.js";
const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.code,
      message: err.message,
    });
  }

  return res.status(STATUS_CODE.INTERNALERROR).json({
    success: false,
    error: ERROR_MESSAGE.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong",
  });
};

export { errorMiddleware };
