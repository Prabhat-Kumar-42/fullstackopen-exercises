const {
  describe,
  test,
  before,
  after,
  beforeEach,
  afterEach,
} = require("node:test");

const {
  setUpTestServer,
  tearDownTestServer,
} = require("../../utils/mongoMemoryServer");

const assert = require("assert");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const baseUrl = "/api/users/";

const modelName = "User";
const User = require("../../models/user.model");
const {
  getMockDataList,
  dataInDB,
} = require("../testUtilities/db.testUtility");
const userMockData = getMockDataList(modelName);

describe("User Api Group tests", async () => {
  let mongoServer;
  let serverConnection;
  let userList = [];
  let userSampleData;

  before(async () => {
    const serverInfo = await setUpTestServer();
    mongoServer = serverInfo.mongoServer;
    serverConnection = serverInfo.serverConnection;
  });

  after(async () => {
    await tearDownTestServer(mongoServer, serverConnection);
  });

  beforeEach(async () => {
    userSampleData = userMockData.map((user) => ({ ...user }));
    for (let user of userSampleData) {
      const doc = await User.create({
        ...user,
        hashedPassword: user.password,
      });
      userList.push(doc);
    }
  });
  afterEach(async () => {
    userList = [];
    await User.deleteMany({});
  });

  describe("User SignUp Validation", () => {
    test("test user signUp", async () => {
      const newUser = {
        name: "temp",
        username: "temptemp",
        password: "temptemptemp",
      };
      const url = baseUrl + "signup";
      const response = await api.post(url).send(newUser).expect(201);
      const createdUser = response.body.user;
      delete createdUser.id;
      delete newUser.password;
      assert.deepStrictEqual(newUser, createdUser);
      const dataDb = await dataInDB(modelName);
      assert.strictEqual(dataDb.length, userList.length + 1);
    });
    describe("Invalid User SignUp", () => {
      test("test malformed username signup", async () => {
        const newUser = {
          name: "temp",
          username: "a",
          password: "temptemptemp",
        };
        const url = baseUrl + "signup";
        await api.post(url).send(newUser).expect(400);
        const dataDb = await dataInDB(modelName);
        assert.strictEqual(dataDb.length, userList.length);
      });
      test("test duplicate username signup", async () => {
        const newUser = {
          name: "temp",
          username: userList[0].username,
          password: "temptemptemp",
        };
        const url = baseUrl + "signup";
        await api.post(url).send(newUser).expect(400);
        const dataDb = await dataInDB(modelName);
        assert.strictEqual(dataDb.length, userList.length);
      });
      test("test malformed password signup", async () => {
        const newUser = {
          name: "temp",
          username: "temptemptemp",
          password: "1a",
        };
        const url = baseUrl + "signup";
        await api.post(url).send(newUser).expect(400);
        const dataDb = await dataInDB(modelName);
        assert.strictEqual(dataDb.length, userList.length);
      });
    });
  });
  describe("User Login Validation", () => {
    test("test user login", async () => {
      const newUser = userSampleData[0];
      const loginUrl = baseUrl + "login";
      const payload = { ...newUser };
      delete payload.name;
      const response = await api.post(loginUrl).send(payload).expect(200);
      const responseUser = response.body.user;
      delete responseUser.id;
      delete newUser.password;
      assert.deepStrictEqual(newUser, responseUser);
    });
    test("test user invalid login", async () => {
      const newUser = userSampleData[0];
      const loginUrl = baseUrl + "login";
      const payload = { ...newUser, password: "ab" };
      delete payload.name;
      await api.post(loginUrl).send(payload).expect(400);
    });
  });
});
