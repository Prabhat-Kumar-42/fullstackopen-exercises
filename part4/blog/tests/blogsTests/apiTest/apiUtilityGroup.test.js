const {
  describe,
  it,
  before,
  beforeEach,
  after,
  afterEach,
} = require("node:test");

const {
  getServerAndConnection,
  tearDownServer,
} = require("../../../utils/mongoMemoryServer");

const { info } = require("../../../utils/logger");

describe("Blogs API Group Test", () => {
  let mongoServer;
  let serverUrl;
  let serverConnection;

  before(async () => {
    ({ mongoServer, serverUrl, serverConnection } =
      await getServerAndConnection());
    info(serverUrl);
  });
  after(async () => {
    await tearDownServer(mongoServer, serverConnection);
  });
});
