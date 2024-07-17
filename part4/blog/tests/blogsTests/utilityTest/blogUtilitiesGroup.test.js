const { describe } = require("node:test");
const favouriteBlogTest = require("./tests/favouriteBlogTest");
const listHelperTest = require("./tests/list_helperTest");
const mostBlogsTest = require("./tests/mostBlogsTest");
const mostLikesTest = require("./tests/mostLikesTest");
const totalLikesTest = require("./tests/totalLikesTest");

describe("Blog Utilities Group Test", () => {
  favouriteBlogTest();
  mostLikesTest();
  mostBlogsTest();
  totalLikesTest();
  listHelperTest();
});
