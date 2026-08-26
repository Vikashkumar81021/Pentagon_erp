import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pentagon ERP API",
      version: "1.0.0",
      description: "API Documentation",
    },
   servers: [
  {
    url: "https://pentagon-erp.onrender.com/api/v1",
  },
],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;