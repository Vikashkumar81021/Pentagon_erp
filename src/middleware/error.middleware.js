import { ApiError } from "../utils/error.js";

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.code,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    error: "INTERNAL_SERVER_ERROR",
    message: err.message || "Something went wrong",
  });
};

export { errorMiddleware };
