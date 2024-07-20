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
const { dataInDB } = require("./utility.api.blogsTest");

const Blog = require("../../../models/blog.model");
const { blogsSampleData } = require("../blogSampleData");

describe("Blogs API Group Test", async () => {
  let mongoServer;
  let serverConnection;
  let blogList = [];

  before(async () => {
    const serverInfo = await setUpTestServer();
    mongoServer = serverInfo.mongoServer;
    serverConnection = serverInfo.serverConnection;
  });

  after(async () => {
    await tearDownTestServer(mongoServer, serverConnection);
  });

  beforeEach(async () => {
    for (let blog of blogsSampleData) {
      const createdBlog = await Blog.create(blog);
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
      author: "test author",
      url: "testurl.com",
      likes: 7,
    };
    const response = await api
      .post(baseUrl)
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const responseBody = {
      title: response.body.title,
      author: response.body.author,
      url: response.body.url,
      likes: response.body.likes,
    };
    assert.deepStrictEqual(newBlog, responseBody);
    const dataDb = await dataInDB();
    assert.strictEqual(blogList.length + 1, dataDb.length);
  });
});
