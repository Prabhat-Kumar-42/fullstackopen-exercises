const { describe, it, before, after } = require("node:test");
const { spinUpMongoServer } = require("../../../utils/mongoMemoryServer");
const mongoose = require("mongoose");

describe("Blogs API Group Test", () => {
  let mongoServer;
  let serverUrl;

  before(async () => {
    mongoServer = await spinUpMongoServer();
    serverUrl = mongoServer.getUri();
    await mongoose.connect(serverUrl);
  });

  after(async () => {
    await mongoose.connection.close();
    if (mongoServer) {
      await mongoServer.stop();
    }
  });
});

