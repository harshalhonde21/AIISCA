import Blog from "../models/blog.model.js";
import cloudinary from "../config/cloudinary.js";

// Add a new blog post
export const addBlog = async (req, res) => {
  try {
    const { title, author, date, description } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const uploadedImage = await cloudinary.uploader.upload(file.path);

    const newBlog = new Blog({
      title,
      author,
      date,
      description,
      imageUrl: uploadedImage.secure_url,
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog post created successfully",
      blog: newBlog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all blog posts
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a blog post by ID
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a blog post by ID
export const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, date, description } = req.body;
    const file = req.file;

    let blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }

    if (file) {
      const uploadedImage = await cloudinary.uploader.upload(file.path);
      blog.imageUrl = uploadedImage.secure_url;
    }

    blog.title = title || blog.title;
    blog.author = author || blog.author;
    blog.date = date || blog.date;
    blog.description = description || blog.description;

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog post updated successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a blog post by ID
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
