const Blog = require("../../models/blog.model");
const User = require("../../models/user.model");
const { blogsSampleData } = require("./mockData//blogSampleData");
const { userSampleData } = require("./mockData/userSampleData");

const getMockDataList = (modelName) => {
  switch (modelName) {
    case "Blog":
      return blogsSampleData;
    case "User":
      return userSampleData;
  }
};

const getModel = (modelName) => {
  switch (modelName) {
    case "Blog":
      return Blog;
    case "User":
      return User;
  }
};

const nonExistingId = async (modelName) => {
  const mockBlogsList = getMockDataList(modelName);
  const Model = getModel(modelName);
  const document = new Model(mockBlogsList[0]);
  document.save();
  await document.deleteOne();
  return document._id.toString();
};

const dataInDB = async (modelName) => {
  const Model = getModel(modelName);
  const documents = await Model.find({});
  return documents.map((document) => document.toJSON());
};

module.exports = {
  getMockDataList,
  nonExistingId,
  dataInDB,
};
