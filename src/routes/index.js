import express from 'express';
import contactRoutes from './contacts.js';
import productRoutes from './products.js';
import userRoutes from './user.js';
import authRoutes from './auth.js';  // Import the auth routes

const router = express.Router();

// Mount the routes
router.use('/contacts', contactRoutes);
router.use('/products', productRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);  // Mount auth routes under /auth

export default router;
