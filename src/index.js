import express from 'express';
import mysql from 'mysql2';

const app = express();
const PORT = 4000;

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

// Connect to MySQL

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to MySQL database');
});


// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});


// Sample users route

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Query failed' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


