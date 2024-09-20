import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let error = '';
    if (name === 'username' && value.length < 3) {
      error = 'Username must be at least 3 characters long';
    }
    if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email address';
    }
    if (name === 'password' && !validatePassword(value)) {
      error = 'Password must be at least 6 characters long';
    }
    if (name === 'confirmPassword' && value !== formData.password) {
      error = 'Passwords do not match';
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formErrors).some((error) => error) || !formData.username || !formData.email || !formData.password) {
      alert('Please correct the errors in the form.');
      return;
    }
    console.log('User data:', formData);
  };

  return (
    <div className="registration-container">
      <div className="form-side">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Create An Account</h1>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {formErrors.username && <span className="error">{formErrors.username}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
          </div>
          <button type="submit">Register</button>
        </form>

        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
          <Link to="/adminpage">admin</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
