const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Delivery Api",
    description: "Api from delivery fullstack app",
  },
  host: "localhost:3333",
  basePath: "/api-docs",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() =>
  require("./server.ts")
);
