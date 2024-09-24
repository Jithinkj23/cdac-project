import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  // Fetch book details by ID from the backend
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details: ", error);
      }
    };
    fetchBookDetails();
  }, [id]);
  

  // Handle "Buy Now" action
  const handleBuyNow = () => {
    navigate('/checkout', { state: { book } });  // Redirect to checkout page
  };

  if (!book) {
    return <h2>Book not found</h2>;  // Display if no book found
  }

  return (
    <div className="book-details-page">
      <img src={`http://localhost:8080${book.imageUrl}`} alt={book.title} className="book-image" />
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>Author: <b>{book.author}</b></p>
        <p>Price: <b>{book.price}</b></p>
        <p>Language: <b>{book.language}</b></p>
        <p>About the Book: <b>{book.description}</b></p>
        <p>Category: <b>{book.category}</b></p>
        <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
