// import express from 'express';

// import bodyParser from 'body-parser';

// const app = express();

// const port = 5000;

// app.use(bodyParser.json());

// app.get('/', (req, res) => {

//   res.send('Welcome to the User Management API!');
// });

// let users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
// ];


// app.get('/users', (req, res) => {
//   res.json(users);
// });


// app.get('/users/:id', (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ error: 'User not found' });
//   res.json(user);
// });

// app.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   const newUser = {
//     id: users.length + 1,
//     name,
//     email,
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// app.put('/users/:id', (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (!user) return res.status(404).json({ error: 'User not found' });

//   const { name, email } = req.body;
//   user.name = name || user.name;
//   user.email = email || user.email;

//   res.json(user);
// });

// app.delete('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   users = users.filter(u => u.id !== userId);
//   res.json({ message: 'User deleted successfully' });
// });


// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
