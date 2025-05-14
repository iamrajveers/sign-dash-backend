
import db from '../config/db.js';
import { getUsers, insertUser } from '../models/userModel.js';

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  insertUser(name, email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to register user' });
    }
    return res.status(201).json({ message: 'User registered successfully' });
  });
};

export const getAllUsers = (req, res) => {
  getUsers((err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    return res.status(200).json(result);  
  });

};


export const login = (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password' });
  }

  // Query the user from the database
  const sql = 'SELECT * FROM user WHERE email = ?';

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = results[0];

    // Plain text password comparison (⚠️ insecure for real apps)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Login successful
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  });
};