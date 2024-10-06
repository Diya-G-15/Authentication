import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('authenticated', true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className='left-side'></div>
    <div className='right-side'>
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
