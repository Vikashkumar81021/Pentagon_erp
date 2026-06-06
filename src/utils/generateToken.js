import jwt from "jsonwebtoken";
import { config } from "../config/configuration.js";

const generateAccessToken = (userId) => {
  const payload = {
    id: userId,
  };
  return jwt.sign(payload, config.JWT_ACCESS_SECRET_KEY, {
    expiresIn: config.JWT_ACCESS_TOKEN_EXPIRY,
  });
};

export { generateAccessToken };
