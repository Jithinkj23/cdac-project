import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/BookDetails.css';
import pic1 from '../images/pic1mal.jpg';
import pic2 from '../images/pic7.jpg';

const books = [
    {
    id: 1, 
    title: 'ABRAHAM LINKENTE KUTTIKKALAM', 
    author: 'BUTTERWORTH', 
    price: '₹102.00',
    image: pic1  // Example image link
  },
  { 
    id: 2, 
    title: 'VERUKAL', 
    author: 'Ramakrishnan Malayattoor', 
    price: '₹189.00',
    image: pic2 
  },
];
const handleBuyNow = () => {
    alert('Proceed to payment or checkout!');
    // Navigate to a checkout page, or trigger a payment modal here.
    // navigate('/checkout'); // Uncomment this to redirect to a checkout page
  };

  

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="book-details-page">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Price: {book.price}</p>
        <p>Language:   Malayalam</p>
        <p>  About the Book:
        Verukal tells the story of a family of Tamil speaking Iyers who settled in Kerala. Raghu is the protagonist of the story. The pivotal event on which the novel turns is the return of Raghu to his native village after a lapse of several years, to raise money to build a city mansion for himself by selling his ancestral home. He sets about this reluctantly, under pressure from his shrewish and domineering wife. In the village, as he meets his sisters and others among whom he grew up, a flood of memories overwhelms him, and he abruptly changes his mind about selling the property.</p>
<button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
