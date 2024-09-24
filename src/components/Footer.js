import React from 'react';
import '../css/Footer.css'; // Make sure you have this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section links">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Online Bookstore | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
