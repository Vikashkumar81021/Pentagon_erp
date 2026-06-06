import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.middleware.js";
const app = express();

app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  }),
);
app.use(cookieParser());
app.use(errorMiddleware);
export default app;
