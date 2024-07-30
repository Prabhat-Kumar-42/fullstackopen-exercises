const mongoose = require("mongoose");
const { MONGO_URL } = require("../utils/config");
const { info } = require("../utils/logger");

const mongoUrl = MONGO_URL;
const mongoConnect = async () => {
  await mongoose.connect(mongoUrl);
  info("Connected To Database Successfully");
};

module.exports = mongoConnect;
