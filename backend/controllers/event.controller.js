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

export const updateEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date } = req.body;
        const file = req.file;

        let event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        if (file) {
            const uploadedImage = await cloudinary.uploader.upload(file.path);
            event.imageUrl = uploadedImage.secure_url;
        }

        event.title = title || event.title;
        event.description = description || event.description;
        event.date = date || event.date;

        await event.save();

        res.status(200).json({
            success: true,
            message: "Event updated successfully",
            event,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const deleteEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByIdAndDelete(id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Event deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        res.status(200).json({
            success: true,
            event,
        });
    } catch (error) {
        res.status(500).json({
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
