const { test, describe } = require("node:test");
const assert = require("node:assert");
const { blogs } = require("../../blogSampleData.js");
const mostLikes = require("../../../../utils/blogsUtils/mostLikes.js");

const mostLikesTest = () => {
  describe("test for most likes", () => {
    test("test for 0 blogs", () => {
      assert.strictEqual(mostLikes([]), undefined);
    });

    test("test for 1 blogs", () => {
      const blog = blogs[0];
      const res = {
        author: blogs[0].author,
        likes: blogs[0].likes,
      };
      assert.deepStrictEqual(mostLikes([blog]), res);
    });

    test("test for n blogs", () => {
      const res = {
        author: "Edsger W. Dijkstra",
        likes: 17,
      };
      assert.deepStrictEqual(mostLikes(blogs), res);
    });
  });
};

module.exports = mostLikesTest;
