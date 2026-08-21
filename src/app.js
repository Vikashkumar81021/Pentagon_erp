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
import billingRoute from "./routes/billingOrder.route.js";
import InstitutionVisitRoute from "./routes/InstitutionVisit.route.js";
import employeeRoute from "./routes/employee.route.js";
import HiringRequirementRoute from "./routes/HiringRequirement.route.js";
import EmployeeOnboardRoute from "./routes/EmployeeOnboard.route.js";
import LeaveApplicantRoute from "./routes/LeaveApplicant.route.js";
import OperationManagementRoute from "./routes/Operation.Management.route.js";
import attendenceRoute from "./routes/attendence.route.js";
import calltypeRoute from "./routes/calltype.route.js";
import TaskChecklistRoute from "./routes/TaskChecklist.route.js";
import JobApplicationRoute from "./routes/JobApplication.route.js";
import HolidaysRoute from "./routes/Holidays.route.js";
import LedgerTransactionRoute from "./routes/LedgerTransaction.route.js";
import ChartAccountRoute from "./routes/ChartAccount.route.js";
import JournalEntryRoute from "./routes/JournalEntry.route.js";
import InvoiceItemRoute from "./routes/InvoiceItem.route.js";
import ExpenseClaimRoute from "./routes/ExpenseClaim.route.js";
import IncomingBillRoute from "./routes/IncomingBill.route.js";
import PayRollRoute from "./routes/PayRoll.route.js";
import AssestsRoute from "./routes/Assets.routes.js";
import teleCallingRoute from "./routes/teleCalling.route.js";
import CallDiscussionRoute from "./routes/CallDiscussion.route.js";
import { reqLogger } from "./middleware/req.middleware.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:4200", "https://pentagon-erp.vercel.app", "https://pentagontech.in"],
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
app.use("/api/v1", billingRoute);
app.use("/api/v1", InstitutionVisitRoute);
app.use("/api/v1", employeeRoute);
app.use("/api/v1", HiringRequirementRoute);
app.use("/api/v1", EmployeeOnboardRoute);
app.use("/api/v1", LeaveApplicantRoute);
app.use("/api/v1", OperationManagementRoute);
app.use("/api/v1", attendenceRoute);
app.use("/api/v1", calltypeRoute);
app.use("/api/v1", TaskChecklistRoute);
app.use("/api/v1", JobApplicationRoute);
app.use("/api/v1", HolidaysRoute);
app.use("/api/v1", LedgerTransactionRoute);
app.use("/api/v1", ChartAccountRoute);
app.use("/api/v1", JournalEntryRoute);
app.use("/api/v1", InvoiceItemRoute);
app.use("/api/v1", ExpenseClaimRoute);
app.use("/api/v1", IncomingBillRoute);
app.use("/api/v1", PayRollRoute);
app.use("/api/v1", AssestsRoute);
app.use("/api/v1", teleCallingRoute);
app.use("/api/v1", CallDiscussionRoute);
export default app;
