const { describe, it, before, after } = require("node:test");
const { setUpTestServer, tearDownTestServer } = require("../../../utils/mongoMemoryServer");

describe("Blogs API Group Test", () => {
  let mongoServer;
  let serverConnection;
  before(async () => {
    const serverInfo = await setUpTestServer();
    mongoServer = serverInfo.mongoServer;
    serverConnection = serverInfo.serverConnection;
  });

  after(async () => {
    await tearDownTestServer(mongoServer, serverConnection);
  });
});

