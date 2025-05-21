import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../StyleSheets/SharedCSS/login.css";

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      // alert(res.data.message);

      // 👉 Navigate to /home if login is successful
      navigate('/home');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email} onChange={handleChange} placeholder="email" required /><br/>
      <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" required /><br/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
