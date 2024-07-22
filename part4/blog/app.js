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

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
//Error Handlers

app.use(unknownEndpoint);
app.use(jwtError);
app.use(mongoError);
app.use(errorHandler);

module.exports = app;
