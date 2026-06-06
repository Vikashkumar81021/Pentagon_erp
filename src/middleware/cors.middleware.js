import cors from "cors";
import { config } from "../config/configuration.js";

const corsMiddleware = cors({
  origin: config.ALLOWED_OROGINS.split(","),
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
});

export { corsMiddleware };
