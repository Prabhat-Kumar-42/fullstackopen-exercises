const app = require("./app");
const mongoConnect = require("./db/mongoDb");
const { PORT } = require("./utils/config");
const { info, error } = require("./utils/logger");

// Function to start express server
const startServer = async () => {
  try {
    await mongoConnect();
    app.listen(PORT, () => info(`Server Started at port: ${PORT}`));
  } catch (err) {
    error(err);
  }
};

startServer();
