const { test, describe } = require("node:test");
const assert = require("node:assert");
const { blogsSampleData: blogs } = require("../../blogSampleData.js");
const mostBlogs = require("../../../../utils/blogsUtils/mostBlogs.js");

const mostBlogsTest = () => {
  describe("test for most blogs", () => {
    test("test for 0 blogs", () => {
      assert.strictEqual(mostBlogs([]), undefined);
    });

    test("test for 1 blogs", () => {
      const blog = blogs[0];
      const res = {
        author: blogs[0].author,
        blogs: 1,
      };
      assert.deepStrictEqual(mostBlogs([blog]), res);
    });

    test("test for n blogs", () => {
      const res = {
        author: "Robert C. Martin",
        blogs: 3,
      };
      assert.deepStrictEqual(mostBlogs(blogs), res);
    });
  });
};

module.exports = mostBlogsTest;
