// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file for styling

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response && response.data && response.status === 200) {
        onLogin();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data);
      }
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="welcome-section">
        <h1>Welcome To PCS GLOBAL</h1>
        <p className="tagline">Intuition Engineered</p>
      </div>
      <div className="login-section">
        <div className="background-image"></div>
        <div className="content">
          <h3>Login</h3>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
