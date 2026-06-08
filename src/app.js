import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.middleware.js";
import compression from "compression";
import authRoute from "./routes/auth.route.js";
import leadRoute from "./routes/lead.route.js";
import { reqLogger } from "./middleware/req.middleware.js";
const app = express();

app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  }),
);

app.use(cookieParser());
app.use(reqLogger);

app.use(errorMiddleware);
app.use(compression());
app.use("/api/v1", authRoute);
app.use("/api/v1", leadRoute);

export default app;
