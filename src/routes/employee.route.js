import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createEmployeeController,
  getEmployeesController,
  updateEmployeeController,
  deleteEmployeeController,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/employee/create", createEmployeeController);

router.get("/fetchEmp", authMiddleware, getEmployeesController);

router.put("/updateEmp/:id", authMiddleware, updateEmployeeController);

router.delete("/deleteEmp/:id", authMiddleware, deleteEmployeeController);

export default router;
