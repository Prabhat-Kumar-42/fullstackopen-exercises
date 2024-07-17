const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const spinUpMongoServer = async () => {
  const mongoServer = await MongoMemoryServer.create();
  return mongoServer;
};

const getServerAndConnection = async () => {
  const mongoServer = await spinUpMongoServer();
  const serverUrl = mongoServer.url;
  const serverConnection = await mongoose.connect(serverUrl);
  return { mongoServer, serverUrl, serverConnection };
};

const tearDownServer = async (mongoServer, serverConnection) => {
  if (serverConnection) {
    await serverConnection.close();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
  return true;
};

module.exports = {
  getServerAndConnection,
  tearDownServer,
};
