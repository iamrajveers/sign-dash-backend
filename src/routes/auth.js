import express from 'express';
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.render('login', { error: 'All fields are required' });
  }

  if (!email.includes('@')) {
    return res.render('login', { error: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.render('login', { error: 'Password too short' });
  }

  res.send('Login successful!');
});

export default router;
