import express from 'express';
import contactRoutes from './contacts.js';
import productRoutes from './products.js';
import userRoutes from './user.js';

const router = express.Router();
router.use('/contacts', contactRoutes);
router.use('/products', productRoutes);
 router.use('/user', userRoutes);  
export default router;
