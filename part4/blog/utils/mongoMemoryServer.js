const { MongoMemoryServer } = require("mongodb-memory-server");

const spinUpMongoServer = async () => {
  const mongoServer = await MongoMemoryServer.create();
  return mongoServer;
};

module.exports = {
  spinUpMongoServer,
};
