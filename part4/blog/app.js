require("dotenv").config();
const express = require("express");
require("express-async-errors");
const cors = require("cors");
const blogRouter = require("./router/api/blogs.router");
const userRouter = require("./router/api/loginSignUp.router");
const {
  unknownEndpoint,
  mongoError,
  errorHandler,
  jwtError,
} = require("./middlewares/errorHandlers.middleware");
const { ENV } = require("./utils/config");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

//test specific routes
if (ENV.toLowerCase() === "test") {
  const { testRouter } = require("./router/testRoutes/test.router");
  app.use("/api/test/", testRouter);
}

//Error Handlers

app.use(unknownEndpoint);
app.use(jwtError);
app.use(mongoError);
app.use(errorHandler);

module.exports = app;
