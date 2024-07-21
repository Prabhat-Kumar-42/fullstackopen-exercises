const Blog = require("../../models/blog.model");
const User = require("../../models/blog.model");
const { blogsSampleData } = require("./mockData//blogSampleData");

//mockBlogsList

const getMockBlogList = (modelName) => {
  switch (modelName) {
    case "Blog":
      return blogsSampleData;
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
  const mockBlogsList = getMockBlogList(modelName);
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
  getMockBlogList,
  nonExistingId,
  dataInDB,
};
