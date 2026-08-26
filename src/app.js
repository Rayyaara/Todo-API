const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger.js")
const cors = require("cors");
const todoRoutes = require("./routes/todo.routes.js");
const authRoutes = require("./routes/auth.routes.js");
const statsRoutes = require("./routes/stats.routes.js");
const categoryRoutes = require("./routes/category.routes.js");
const logger = require("./middlewares/logger.middleware.js");
const notFound = require("./middlewares/notFound.middleware.js");
const errorHandler = require("./middlewares/errorHandler.middleware.js");

const app = express();

app.get("/favicon.ico", (req,res) => res.status(204).end());

app.use(logger);
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Todo API is running" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/categories", categoryRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;