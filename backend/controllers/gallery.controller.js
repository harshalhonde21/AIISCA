import Gallery from '../models/gallery.model.js';
import cloudinary from '../config/cloudinary.js';

export const uploadImage = async (req, res) => {
    try {
        const { imageName, date, year, city } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded',
            });
        }

        const result = await cloudinary.uploader.upload(file.path);

        const image = new Gallery({
            imageUrl: result.secure_url,
            imageName,
            date,
            year,
            city
        });

        await image.save();

        res.status(201).json({
            success: true,
            message: 'Image uploaded successfully',
            image,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const getAllImages = async (req, res) => {
    try {
        const images = await Gallery.find();
        res.status(200).json({
            success: true,
            images,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};