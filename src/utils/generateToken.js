import jwt from "jsonwebtoken";
import { config } from "../config/configuration.js";

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.JWT_ACCESS_SECRET_KEY, {
    expiresIn: "1d",
  });
};
