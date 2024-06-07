import Event from "../models/event.model.js";
import cloudinary from "../config/cloudinary.js";

export const addEvent = async (req, res) => {
    try {
        const { title, description, date} = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const uploadedImage = await cloudinary.uploader.upload(file.path);

        const newEvent = new Event({
            title,
            description,
            date,
            imageUrl: uploadedImage.secure_url,
        });

        await newEvent.save();

        res.status(201).json({
            success: true,
            message: "Event created successfully",
            event: newEvent,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllEvent = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
