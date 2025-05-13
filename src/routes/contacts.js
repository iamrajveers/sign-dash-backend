import express from 'express';
import { createContact, getAllContacts } from '../controller/contactController.js';
const router = express.Router();
router.get('/', getAllContacts);
router.post('/', createContact);
export default router;

