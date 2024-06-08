import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the blog title"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please upload an image for the blog"],
  },
  author: {
    type: String,
    required: [true, "Please enter the blog author"],
  },
  date: {
    type: Date,
    required: [true, "Please enter the blog date"],
  },
  description: {
    type: String,
    required: [true, "Please enter the blog description"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("AIISCABlog", blogSchema);
export default Blog;
