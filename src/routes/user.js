import express from 'express';
import { getAllUsers, login, registerUser } from '../controller/userController.js';
const router = express.Router();
router.get('/', getAllUsers);
router.post('/', registerUser);
router.post('/login', login);
router.get('/new' , (req, res) => {
    res.send("working")
})
export default router;
