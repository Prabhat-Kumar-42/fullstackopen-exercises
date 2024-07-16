const { test, describe } = require("node:test");
const assert = require("node:assert");
const totalLikes = require("../../utils/blogsUtils/totalLikes");
const { blogs } = require("./blogSampleData");

describe("test for total likes", () => {
  test("test for 0 blogs", () => {
    assert.strictEqual(totalLikes([]), 0);
  });

  test("test for 1 blogs", () => {
    const blog = blogs[0];
    assert.strictEqual(totalLikes([blog]), blogs[0].likes);
  });

  test("test for n blogs", () => {
    assert.strictEqual(totalLikes(blogs), 36);
  });
});
