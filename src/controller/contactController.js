
import db from '../config/db.js';
export const getAllContacts = (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(results);
  });
};

export const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)';
  db.query(sql, [name, email, phone], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB insert error' });
    res.status(201).json({ message: 'Contact added', contactId: result.insertId });
  });
};
