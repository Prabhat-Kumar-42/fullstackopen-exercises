const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  url: String,
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      type: String,
    },
  ],
});

blogSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
