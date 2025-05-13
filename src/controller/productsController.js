import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../models/productModel.js';
export const getAllProductsHandler = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProductHandler = async (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const productId = await createProduct(name, price, description);
    res.status(201).json({ message: 'Product added', productId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProductHandler = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  try {
    await updateProduct(id, name, price, description);
    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProductHandler = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteProduct(id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
