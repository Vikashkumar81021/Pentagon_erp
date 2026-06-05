import app from "./app.js";
import prisma from "./config/db.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await prisma.$connect();

    console.log("Database Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
