import express from 'express';
import { addEvent, getAllEvent } from '../controllers/event.controller.js';
import upload from '../middlewares/upload.middleware.js';

const router = express.Router();

router.post('/upload-event', upload.single('image'), addEvent);
router.get('/get-event', getAllEvent);

export default router;
