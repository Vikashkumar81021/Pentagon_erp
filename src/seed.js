import prisma from "./config/db.js";
import bcrypt from "bcrypt";

const users = [
  {
    employeeCode: "SA001",
    password: "123456",
    role: "SUPER_ADMIN",
    name: "Super Admin",
  },
  {
    employeeCode: "DIR001",
    password: "123456",
    role: "DIRECTOR",
    name: "Amit Sharma",
  },
  {
    employeeCode: "MAN001",
    password: "123456",
    role: "MANAGER",
    name: "Priya Verma",
  },
  {
    employeeCode: "EMP001",
    password: "123456",
    role: "EMPLOYEE",
    name: "Rahul Kumar",
  },
  {
    employeeCode: "HR001",
    password: "123456",
    role: "HR_MANAGER",
    name: "Neha Gupta",
  },
  {
    employeeCode: "HR002",
    password: "123456",
    role: "HR_EXECUTIVE",
    name: "Ankit Singh",
  },
  {
    employeeCode: "FIN001",
    password: "123456",
    role: "FINANCE_MANAGER",
    name: "Rohit Agarwal",
  },
  {
    employeeCode: "FIN002",
    password: "123456",
    role: "ACCOUNTANT",
    name: "Sneha Jain",
  },
  {
    employeeCode: "CRM001",
    password: "123456",
    role: "SALES_MANAGER",
    name: "Vikas Malhotra",
  },
  {
    employeeCode: "CRM002",
    password: "123456",
    role: "SALES_EXECUTIVE",
    name: "Karan Mehta",
  },
  {
    employeeCode: "GEM001",
    password: "123456",
    role: "GEM_MANAGER",
    name: "Ajay Tiwari",
  },
  {
    employeeCode: "GEM002",
    password: "123456",
    role: "GEM_EXECUTIVE",
    name: "Ritu Saxena",
  },
  {
    employeeCode: "SCM001",
    password: "123456",
    role: "SCM_MANAGER",
    name: "Manoj Yadav",
  },
  {
    employeeCode: "SCM002",
    password: "123456",
    role: "SCM_EXECUTIVE",
    name: "Deepak Chauhan",
  },
  {
    employeeCode: "OPS001",
    password: "123456",
    role: "OPERATIONS_MANAGER",
    name: "Sandeep Mishra",
  },
  {
    employeeCode: "OPS002",
    password: "123456",
    role: "OPERATIONS_EXECUTIVE",
    name: "Pooja Arora",
  },
];

async function seedUsers() {
  try {
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      const role = await prisma.role.upsert({
        where: {
          name: user.role,
        },
        update: {},
        create: {
          name: user.role,
        },
      });

      const createdUser = await prisma.user.upsert({
        where: {
          empcode: user.employeeCode,
        },
        update: {},
        create: {
          name: user.name,
          email: `${user.employeeCode.toLowerCase()}@erp.com`,
          password: hashedPassword,
          empcode: user.employeeCode,
        },
      });

      await prisma.userRole.upsert({
        where: {
          userId_roleId: {
            userId: createdUser.id,
            roleId: role.id,
          },
        },
        update: {},
        create: {
          userId: createdUser.id,
          roleId: role.id,
        },
      });

      console.log(`✅ ${user.employeeCode} inserted`);
    }

    console.log("🎉 All users seeded successfully");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsers();
