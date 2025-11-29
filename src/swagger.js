import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student API Documentation",
      version: "1.0.0",
    },
    servers: [
      { url: process.env.API_URL }
    ],
    components: {
      schemas: {
        Student: {
          type: "object",
          required: ["name", "email", "age", "phone", "skills"],
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            age: { type: "number" },
            phone: { type: "string" },
            skills: {
              type: "array",
              items: { type: "string" },
            },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },

        StudentInput: {
          type: "object",
          required: ["name", "email", "age", "phone"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            age: { type: "number" },
            phone: { type: "string" },
            skills: {
              type: "array",
              items: { type: "string" },
            },
          },
        },
      },

      responses: {
        NotFound: {
          description: "Resource not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Student not found" }
                }
              }
            }
          }
        },
        ServerError: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: { message: { type: "string" } }
              }
            }
          }
        }
      }
    }
  },

  apis: ["src/routes/studentRouter.js"], // ⭐ QUAN TRỌNG
};

export const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
