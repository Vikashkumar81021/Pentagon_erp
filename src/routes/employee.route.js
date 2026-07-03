import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createEmployeeController,
  getEmployeesController,
  getEmployeeByIdController,
  updateEmployeeController,
  deleteEmployeeController,
  filterEmployeeController,
  searchEmployeController,
  getEmployeController,
} from "../controllers/employee.controller.js";

/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Employee Management APIs
 */

const router = express.Router();

/**
 * @swagger
 * /api/v1/employee/create:
 *   post:
 *     summary: Create Employee
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - full_name
 *               - email
 *               - mobile_number
 *               - desgination
 *               - department
 *               - salary
 *               - Bank_instutuion
 *               - pan_id_card_number
 *               - aadhard_card_number
 *               - bank_account_number
 *             properties:
 *               full_name:
 *                 type: string
 *                 example: Shobhit Rajput
 *               email:
 *                 type: string
 *                 example: shobhit@gmail.com
 *               mobile_number:
 *                 type: string
 *                 example: "9876543210"
 *               desgination:
 *                 type: string
 *                 example: Software Developer
 *               department:
 *                 type: string
 *                 example: IT
 *               salary:
 *                 type: string
 *                 example: "50000"
 *               status_desgnation:
 *                 type: string
 *                 example: Permanent
 *               Bank_instutuion:
 *                 type: string
 *                 example: SBI
 *               pan_id_card_number:
 *                 type: string
 *                 example: ABCDE1234F
 *               aadhard_card_number:
 *                 type: string
 *                 example: "123456789012"
 *               bank_account_number:
 *                 type: string
 *                 example: "123456789123"
 *     responses:
 *       201:
 *         description: Employee created successfully
 *       400:
 *         description: Validation Error
 */
router.post("/employee/create", createEmployeeController);

/**
 * @swagger
 * /api/v1/fetchEmp:
 *   get:
 *     summary: Get All Employees
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Employee List
 */

router.get("/fetchEmp", getEmployeesController);

/**
 * @swagger
 * /api/v1/fetchEmp/{id}:
 *   get:
 *     summary: Get Employee By ID
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Employee Found
 *       404:
 *         description: Employee Not Found
 */

router.get("/fetchEmp/:id", getEmployeeByIdController);

/**
 * @swagger
 * /api/v1/updateEmp/{id}:
 *   put:
 *     summary: Update Employee
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *               email:
 *                 type: string
 *               mobile_number:
 *                 type: string
 *               desgination:
 *                 type: string
 *               department:
 *                 type: string
 *               salary:
 *                 type: string
 *               status_desgnation:
 *                 type: string
 *               Bank_instutuion:
 *                 type: string
 *               pan_id_card_number:
 *                 type: string
 *               aadhard_card_number:
 *                 type: string
 *               bank_account_number:
 *                 type: string
 *     responses:
 *       200:
 *         description: Employee Updated Successfully
 */

router.put("/updateEmp/:id", updateEmployeeController);

/**
 * @swagger
 * /api/v1/deleteEmp/{id}:
 *   delete:
 *     summary: Delete Employee
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Employee Deleted Successfully
 */

router.delete("/deleteEmp/:id", deleteEmployeeController);

/**
 * @swagger
 * /api/v1/filter:
 *   get:
 *     summary: Filter Employees
 *     tags: [Employee]
 *     parameters:
 *       - in: query
 *         name: department
 *         schema:
 *           type: string
 *         example: IT
 *       - in: query
 *         name: status_desgnation
 *         schema:
 *           type: string
 *         example: Permanent
 *     responses:
 *       200:
 *         description: Filtered Employees
 */

router.get("/filter", filterEmployeeController);

/**
 * @swagger
 * /api/v1/search:
 *   get:
 *     summary: Search Employee
 *     tags: [Employee]
 *     parameters:
 *       - in: query
 *         name: full_name
 *         schema:
 *           type: string
 *         example: shobhit
 *     responses:
 *       200:
 *         description: Employee Search Result
 */

router.get("/search", searchEmployeController);

/**
 * @swagger
 * /api/v1/getEmp:
 *   get:
 *     summary: Employee Pagination
 *     tags: [Employee]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Paginated Employees
 */

router.get("/getEmp", getEmployeController);

export default router;
