import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, form);
      alert('Registration successful! Please login.');
    } catch (err) {
      console.error(err.response?.data?.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Name" 
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} 
      />
      <input 
        placeholder="Email" 
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })} 
      />
      <button type="submit">Register</button>
    </form>
  );
}
