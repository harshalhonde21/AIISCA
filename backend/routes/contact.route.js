import express from 'express';
import { createContact, getAllContacts } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/add-contacts', createContact);
router.get('/get-contacts', getAllContacts);

export default router;
