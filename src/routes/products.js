import express from 'express';
import {
  getAllProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from '../controller/productsController.js';

const router = express.Router();

router.get('/', getAllProductsHandler);        // GET all products
router.post('/', createProductHandler);        // POST create product
router.put('/:id', updateProductHandler);      // PUT update product
router.delete('/:id', deleteProductHandler);   // DELETE product

export default router;
