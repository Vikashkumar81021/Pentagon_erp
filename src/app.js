import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.middleware.js";
import compression from "compression";
import authRoute from "./routes/auth.route.js";
import leadRoute from "./routes/lead.route.js";
import dashboardStatsRoute from "./routes/dashboard.route.js";
import noticeRoute from "./routes/notice.route.js";
import clientRoute from "./routes/client.route.js";
import order from "./routes/order.route.js";
import productRoute from "./routes/product.route.js";
import salesVisitRoute from "./routes/salesVisit.route.js";
import userRoute from "./routes/user.route.js";
import { reqLogger } from "./middleware/req.middleware.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
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
app.use("/api/v1", dashboardStatsRoute);
app.use("/api/v1", noticeRoute);
app.use("/api/v1", clientRoute);
app.use("/api/v1", order);
app.use("/api/v1", productRoute);
app.use("/api/v1", salesVisitRoute);
app.use("/api/v1", userRoute);
export default app;
