// routes/gallery.route.js
import express from 'express';
import {
    uploadImage, 
    getAllImages,
    updateImageById,
    deleteImageById
} from '../controllers/gallery.controller.js';
import upload from '../middlewares/upload.middleware.js';

const router = express.Router();

router.post('/upload-image', upload.single('image'), uploadImage);
router.get('/get-images', getAllImages);
router.put('/update-image/:id', upload.single('image'), updateImageById);
router.delete('/delete-image/:id', deleteImageById);


export default router;
