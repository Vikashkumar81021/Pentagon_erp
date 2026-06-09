import prisma from "./config/db.js";
import bcrypt from "bcrypt";

async function insertUser() {
  try {
    const hashedPassword = await bcrypt.hash("Sales@123", 10);

    // Create SALES role if not exists
    const salesRole = await prisma.role.upsert({
      where: {
        name: "SALES",
      },
      update: {},
      create: {
        name: "SALES",
      },
    });

    // Create Sales User
    const salesUser = await prisma.user.create({
      data: {
        name: "Sales User",
        email: "sales@erp.com",
        password: hashedPassword,
        empcode: "SALES001",
      },
    });

    // Assign SALES role
    await prisma.userRole.create({
      data: {
        userId: salesUser.id,
        roleId: salesRole.id,
      },
    });

    console.log("✅ Sales User Created");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

insertUser();
