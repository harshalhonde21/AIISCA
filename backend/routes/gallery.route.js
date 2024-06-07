// routes/gallery.route.js
import express from 'express';
import { uploadImage, getAllImages } from '../controllers/gallery.controller.js';
import upload from '../middlewares/upload.middleware.js';

const router = express.Router();

router.post('/upload-image', upload.single('image'), uploadImage);
router.get('/get-images', getAllImages);

export default router;
