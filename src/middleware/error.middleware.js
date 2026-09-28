import { ApiError } from "../utils/error.js";
import { STATUS_CODE } from "../constants/status.code.js";

const errorMiddleware = (err, req, res, next) => {
  console.error("API ERROR:", err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.code,
      message: err.message,
    });
  }

  return res.status(STATUS_CODE.INTERNALERROR).json({
    success: false,
    error: "INTERNAL_SERVER_ERROR",
    message: err.message || "Something went wrong",
  });
};

export { errorMiddleware };