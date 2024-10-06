import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="container">
      <div className='left-side'></div>
    <div className='right-side'>
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        
      </form>
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
      Already have an account? <a href="/login">Login</a>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default Register;
