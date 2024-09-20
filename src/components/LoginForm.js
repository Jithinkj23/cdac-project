import React, { useState } from 'react';
import '../css/LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
  };

  return (
    <div className="login-container">
      <div className="form-side">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="login-link">
          <p>Don't have an account? <Link to="/">Register here</Link></p>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
