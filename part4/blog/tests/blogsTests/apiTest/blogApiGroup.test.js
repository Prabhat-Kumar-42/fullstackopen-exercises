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
} = require("../../../utils/mongoMemoryServer");

const assert = require("node:assert");
const supertest = require("supertest");
const app = require("../../../app");
const api = supertest(app);
const baseUrl = "/api/blogs/";
const loginUrl = "/api/users/login";

const {
  dataInDB,
  getMockDataList,
} = require("../../testUtilities/db.testUtility");

const blogModel = "Blog";
const Blog = require("../../../models/blog.model");
const blogsMockData = getMockDataList(blogModel);
const User = require("../../../models/user.model");
const userModel = "User";
const userSampleData = getMockDataList(userModel);

describe("Blogs API Group Test", async () => {
  let mongoServer;
  let serverConnection;
  let blogList = [];
  let authScheme = "Bearer ";
  let author;
  let otherUser;
  let authorLoginToken = authScheme;
  let otherUserLoginToken = authScheme;
  let blogsSampleData;
  let authorData;
  let otherUserData;

  before(async () => {
    const serverInfo = await setUpTestServer();
    mongoServer = serverInfo.mongoServer;
    serverConnection = serverInfo.serverConnection;

    authorData = userSampleData[0];
    otherUserData = userSampleData[1];
    author = await User.create({
      ...authorData,
      hashedPassword: authorData.password,
    });
    otherUser = await User.create({
      ...otherUserData,
      hashedPassword: otherUserData.password,
    });
    const authorLoginResponse = await api
      .post(loginUrl)
      .send(authorData)
      .expect(200);

    authorLoginToken += authorLoginResponse.body.user.authToken;

    const otherUserLoginResponse = await api
      .post(loginUrl)
      .send(otherUserData)
      .expect(200);

    otherUserLoginToken += otherUserLoginResponse.body.user.authToken;
    blogsSampleData = blogsMockData.map((blog) => {
      blog.author = author._id;
      return blog;
    });
  });

  after(async () => {
    await tearDownTestServer(mongoServer, serverConnection);
  });

  beforeEach(async () => {
    const id = author.id;
    for (let blog of blogsSampleData) {
      const createdBlog = await Blog.create({ ...blog, id });
      blogList.push(createdBlog);
    }
  });

  afterEach(async () => {
    await Blog.deleteMany({});
    blogList = [];
  });

  test("fetch all data from server", async () => {
    const response = await api
      .get(baseUrl)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blogsLength = response.body.length;
    assert.strictEqual(blogsLength, blogList.length);
  });

  test("response id field is same is db _id field", async () => {
    const url = baseUrl + blogList[0]._id;
    const response = await api
      .get(url)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    assert.deepStrictEqual(blogList[0]._id.toString(), response.body.id);
  });

  test("post req test", async () => {
    const newBlog = {
      title: "test title",
      url: "testurl.com",
      likes: 7,
    };
    const response = await api
      .post(baseUrl)
      .set("Authorization", authorLoginToken)
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const responseBody = {
      title: response.body.title,
      url: response.body.url,
      likes: response.body.likes,
    };
    assert.deepStrictEqual(newBlog, responseBody);
    const dataDb = await dataInDB(blogModel);
    assert.strictEqual(blogList.length + 1, dataDb.length);
  });
  test("default value of likes is  0", async () => {
    const newBlog = {
      title: "test title",
      url: "testurl.com",
    };
    const response = await api
      .post(baseUrl)
      .set("Authorization", authorLoginToken)
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);
    assert.strictEqual(response.body.likes, 0);
  });
  test("mising title or url results in response status 400", async () => {
    const blogMissingTitle = {
      url: "testurl.com",
    };
    const blogMissingUrl = {
      title: "test-title",
    };
    await api
      .post(baseUrl)
      .set("Authorization", authorLoginToken)
      .send(blogMissingTitle)
      .expect(400);
    await api
      .post(baseUrl)
      .set("Authorization", authorLoginToken)
      .send(blogMissingUrl)
      .expect(400);
  });
  test("update likes", async () => {
    const updateId = blogList[0].id.toString();
    const url = baseUrl + updateId;
    const likes = Math.floor(Math.random() * 10000);
    const updateData = { likes };
    const response = await api
      .put(url)
      .set("Authorization", authorLoginToken)
      .send(updateData)
      .expect(200);
    assert.strictEqual(response.body.likes, likes);
  });
  test("delete blog test", async () => {
    const deleteId = blogList[0]._id.toString();
    const url = baseUrl + deleteId;
    await api.delete(url).set("Authorization", authorLoginToken).expect(200);
    await api.get(url).expect(404);
    const dbBlogs = await dataInDB(blogModel);
    assert.strictEqual(dbBlogs.length, blogList.length - 1);
  });
});
