const express = require("express");
require("express-async-errors");
const cors = require("cors");
const blogRouter = require("./router/api/blogs.router");
const {
  unknownEndpoint,
  mongoError,
  errorHandler,
} = require("./middlewares/errorHandlers.middleware");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/blogs", blogRouter);

//Error Handlers

app.use(unknownEndpoint);
app.use(mongoError);
app.use(errorHandler);

module.exports = app;
