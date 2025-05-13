
import mysql from 'mysql2';
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contactdb',
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
export default db;


