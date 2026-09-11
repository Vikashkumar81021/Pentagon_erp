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
        // url: "http://localhost:4000/api/v1",
        url: "https://pentagon-erp.onrender.com/api/v1",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};
// console.log("options", options.definition.servers[0].url);
const swaggerSpec = swaggerJsdoc(options);
console.log("swager", swaggerSpec);

export default swaggerSpec;
