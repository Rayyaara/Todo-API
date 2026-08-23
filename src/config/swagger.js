const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Todo List API",
            version: "1.0.0",
            description: "Dokumentasi API Todo List - dibangun bertahap dari seri artikel backend Node.js",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local Development Server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
                apiKeyAuth: {
                    type: "apiKey",
                    in: "header",
                    name: "x-api-key",
                },
            },
            schemas: {
              Todo: {
                type: "object",
                properties: {
                  _id: { type: "string", example: "64a5c7f8d9e8f1a2b3c4d5e6" },
                  title: { type: "string", example: "Belajar Swagger" },
                  description: { type: "string", example: "Menulis dokumentasi endpoint todo" },
                  completed: { type: "boolean", example: false },
                  owner: { type: "string", example: "64a5c7f8d9e8f1a2b3c4d1111" },
                  createdAt: { type: "string", format: "date-time" },
                  updatedAt: { type: "string", format: "date-time" },
                },
             },

            },
        },
    },

    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;