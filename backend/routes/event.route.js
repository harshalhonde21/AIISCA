import express from "express";
import {
    addEvent,
    getAllEvent,
    updateEventById,
    deleteEventById,
    getEventById
} from "../controllers/event.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload-event", upload.single("image"), addEvent);
router.get("/get-event", getAllEvent);
router.get("/get-event/:id", getEventById);
router.put("/update-event/:id", upload.single("image"), updateEventById);
router.delete("/delete-event/:id", deleteEventById);

export default router;
