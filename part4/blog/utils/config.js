require("dotenv").config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3001;

const getMongoUrl = () =>
  ENV === "test" ? process.env.MONGO_URL_TEST : process.env.MONGO_URL;

const MONGO_URL = getMongoUrl();

module.exports = {
  ENV,
  PORT,
  MONGO_URL,
};
