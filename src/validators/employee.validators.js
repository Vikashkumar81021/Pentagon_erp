import { z } from "zod";

export const StatusDesignationEnum = z.enum([
  "Active",
  "Probation",
  "On Leave",
]);

const employeeSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),

  employeeCode: z.string().optional(),

  workEmail: z.string().email("Invalid email"),

  mobileNumber: z.coerce.bigint(),

  designation: z.string().min(1, "Designation is required"),

  department: z.string().min(1, "Department is required"),

  salary: z.coerce.number().int().positive("Salary must be greater than 0"),

  org_name: z.string().optional(),

 dob: z
  .string()
  .regex(
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "DOB must be in YYYY-MM-DD format"
  )
  .optional(),
  status: StatusDesignationEnum.optional(),

  bankName: z.string().min(1, "Bank Name is required"),

  panNumber: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number"),

  aadhaarNumber: z
    .string()
    .regex(/^[0-9]{12}$/, "Aadhaar must be 12 digits"),

  accountNumber: z.string().min(8, "Invalid Account Number"),
});

export const createEmployeeValidator = employeeSchema;

export const updateEmployeeValidator = employeeSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required for update",
  });