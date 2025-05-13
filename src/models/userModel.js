import db from '../config/db.js';
export const getUsers = (callback) => {
  const query = 'SELECT * FROM user'; 

  db.query(query, (err, result) => {

    if (err) {
      console.error('Database query failed: ', err);
      return callback(err, null); 
    }
    callback(null, result); 
  });
};

export const insertUser = (name, email, password, callback) => {

  const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)'; 

  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Failed to insert user:', err);
      return callback(err, null); 
    }
    callback(null, result); 
  });
};
