import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password }); // ✅ Console check

    try {
      const res = await axios.post('http://localhost:4000/register', {
        name,
        email,
        password,
      });
      alert(res.data.message);
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Error: Could not register');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register User</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}
