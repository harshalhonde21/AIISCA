import express from "express";
import multer from "multer";
import {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from "../controllers/blog.controller.js";
import upload from '../middlewares/upload.middleware.js';

const router = express.Router();

router.post("/add-blog", upload.single("image"), addBlog);
router.get("/get-blogs", getAllBlogs);
router.get("/get-blog/:id", getBlogById);
router.put("/update-blog/:id", upload.single("image"), updateBlogById);
router.delete("/delete-blog/:id", deleteBlogById);

export default router;
