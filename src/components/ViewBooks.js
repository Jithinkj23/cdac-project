import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/ViewBooks.css';

const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Fetch the books from the backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/books')
      .then(response => {
        setBooks(response.data); // Update with books from the backend
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  // Filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle "Buy Now" button click
  const handleBuyNow = (bookId) => {
    navigate(`/book/${bookId}`);  // Navigate to BookDetails with book ID
  };

  return (
    <div className="view-books-page">
      <h2>Available Books</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={`http://localhost:8080${book.imageUrl}`} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <button 
                className="buy-now-button"
                onClick={() => handleBuyNow(book.id)}  // Pass book ID
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewBooks;
