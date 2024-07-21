const { test, describe } = require("node:test");
const assert = require("node:assert");
const favouriteBlog = require("../../../../utils/blogsUtils/favouriteBlog.js");
const { getMockBlogList } = require("../../../testUtilities/db.testUtility");
const blogs = getMockBlogList("Blog");

const favouriteBlogTest = () => {
  describe("test for favourite blog", () => {
    test("test for 0 blogs", () => {
      assert.strictEqual(favouriteBlog([]), undefined);
    });

    test("test for 1 blogs", () => {
      const blog = blogs[0];
      const res = {
        title: blogs[0].title,
        author: blogs[0].author,
        likes: blogs[0].likes,
      };
      assert.deepStrictEqual(favouriteBlog([blog]), res);
    });

    test("test for n blogs", () => {
      const res = {
        title: blogs[2].title,
        author: blogs[2].author,
        likes: blogs[2].likes,
      };
      assert.deepStrictEqual(favouriteBlog(blogs), res);
    });
  });
};

module.exports = favouriteBlogTest;
