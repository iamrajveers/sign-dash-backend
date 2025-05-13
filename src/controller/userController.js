
import { insertUser } from '../models/userModel.js';
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  insertUser(name, email, password, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to register user' });
    }

    return res.status(201).json({ message: 'User registered successfully' });
  });
};
