import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/Checkout.css'; // Import the styling

const Checkout = () => {
  const location = useLocation();
  const { book } = location.state; // Retrieve the book data from the state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    addressArea: '',
    state: '',
    country: '',
    pincode: ''
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      book: { id: book.id }  // Include the book ID for the order
    };

    try {
      await axios.post('http://localhost:8080/api/orders', orderData);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing the order.');
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-container">
        {/* Book Summary */}
        <div className="book-summary">
          <h3>Book Details</h3>
          <img src={`http://localhost:8080${book.imageUrl}`} alt={book.title} className="book-image" />
          <h4>{book.title}</h4>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
        </div>

        {/* User Information Form */}
        <div className="checkout-form">
          <h3>Shipping Information</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <label htmlFor="addressArea">Address Area</label>
            <input
              type="text"
              id="addressArea"
              name="addressArea"
              value={formData.addressArea}
              onChange={handleChange}
              required
            />

            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your state</option>
              <option value="Kerala">Kerala</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="TamilNadu">TamilNadu</option>
              <option value="Karnataka">Karnataka</option>
            </select>

            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />

            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />

            <button type="submit" className="confirm-button">
              Confirm Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
