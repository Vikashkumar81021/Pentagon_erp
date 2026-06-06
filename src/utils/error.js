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
    super(message, 400, code);
  }
}

class UnAuthorizedError extends ApiError {
  constructor(message, code = "UNAUTHORIZED") {
    super(message, 401, code);
  }
}
class ForBiddenError extends ApiError {
  constructor(message, code = "FORBIDDEN") {
    super(message, 403, code);
  }
}
class NotFoundError extends ApiError {
  constructor(message, code = "NOT FOUND") {
    super(message, 404, code);
  }
}
class ConflictError extends ApiError {
  constructor(message, code = "CONFLICT") {
    super(message, 409, code);
  }
}
class TooManyRequestError extends ApiError {
  constructor(message, code = "TOO MANY REQUEST") {
    super(message, 429, code);
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
