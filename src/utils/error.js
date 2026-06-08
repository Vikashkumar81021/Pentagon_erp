import { STATUS_CODE } from "../constants/status.code.js";
class ApiError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}
class BadRequestError extends ApiError {
  constructor(message, code = "BAD REQUEST") {
    super(message, STATUS_CODE.BAD_REQUESTS, code);
  }
}

class UnAuthorizedError extends ApiError {
  constructor(message, code = "UNAUTHORIZED") {
    super(message, STATUS_CODE.UNAUTHORIZED, code);
  }
}
class ForBiddenError extends ApiError {
  constructor(message, code = "FORBIDDEN") {
    super(message, STATUS_CODE.FORBIDDEN, code);
  }
}
class NotFoundError extends ApiError {
  constructor(message, code = "NOT FOUND") {
    super(message, STATUS_CODE.NOTFOUND, code);
  }
}
class ConflictError extends ApiError {
  constructor(message, code = "CONFLICT") {
    super(message, STATUS_CODE.CONFLICT, code);
  }
}
class TooManyRequestError extends ApiError {
  constructor(message, code = "TOO MANY REQUEST") {
    super(message, STATUS_CODE.TOOMANYREQUEST, code);
  }
}

export {
  ApiError,
  BadRequestError,
  UnAuthorizedError,
  ForBiddenError,
  NotFoundError,
  ConflictError,
  TooManyRequestError,
};
