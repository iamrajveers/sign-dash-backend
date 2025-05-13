import db from '../config/db.js';
export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products', (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

export const createProduct = (name, price, description) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
      [name, price, description],
      (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      }
    );
  });
};

export const updateProduct = (id, name, price, description) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
      [name, price, description, id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
