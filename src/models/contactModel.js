
import db from '../config/db.js';
export const getAllContacts = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM contacts', (err, results) => {
      if (err) {
        reject('DB error');
      }
      resolve(results);
    });
  });
};

export const createContact = (name, email, phone) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)';
    db.query(sql, [name, email, phone], (err, result) => {
      if (err) {
        reject('DB insert error');
      }
      resolve(result.insertId); 
    });
  });
};
