const express = require("express");
const cors = require("cors");
const blogRouter = require("./router/api/blogs.router");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/blogs", blogRouter);

module.exports = app;
