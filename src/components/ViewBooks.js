// import React from 'react';
// import '../css/ViewBooks.css';
// import pic1 from '../images/pic1mal.jpg';
// import pic2 from '../images/pic7.jpg';

// const books = [
//   { 
//     id: 1, 
//     title: 'എബ്രഹാം ലിങ്കന്റെ കുട്ടിക്കാലം', 
//     author: 'BUTTERWORTH', 
//     price: '₹102.00',
//     image: pic1  // Example image link
//   },
//   { 
//     id: 2, 
//     title: 'വേരുകള്‍', 
//     author: 'Ramakrishnan Malayattoor', 
//     price: '₹189.00',
//     image: pic2 
//   },
//  { 
//     id: 3, 
//     title: '1984', 
//     author: 'George Orwell', 
//     price: '$12.99',
//     image: 'https://via.placeholder.com/150' 
//   },
//   { 
//     id: 4, 
//     title: 'Pride and Prejudice', 
//     author: 'Jane Austen', 
//     price: '$7.99',
//     image: 'https://via.placeholder.com/150' 
//   },
//   { 
//     id: 5, 
//     title: 'Moby Dick', 
//     author: 'Herman Melville', 
//     price: '$9.99',
//     image: 'https://via.placeholder.com/150' 
//   },
// ];

// const ViewBooks = () => {
//   return (
//     <div className="view-books-page">
//       <h2>Available Books</h2>
//       <div className="books-grid">
//         {books.map((book) => (
//           <div key={book.id} className="book-card">
//             <img src={book.image} alt={book.title} className="book-image" />
//             <h3>{book.title}</h3>
//             <p>Author: {book.author}</p>
//             <p>Price: {book.price}</p>
//             <button className="buy-now-button">Buy Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewBooks;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ViewBooks.css';
import pic1 from '../images/pic1mal.jpg';
import pic2 from '../images/pic7.jpg';
import pic3 from '../images/pic6.jpg';
import pic4 from '../images/pic5.jpg';

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
          {
            id: 3, 
            title: 'Ettavum Priyappetta Ennodu ', 
            author: 'NIMNA VIJAY', 
            price: '₹315.00 ',
            image: pic3 
          },
          { 
            id: 4, 
            title: 'ARCHER (MALAYALAM) ', 
            author: ' PAULO COELHO', 
            price: '₹225.00 ',
            image: pic4 
          }


          
];


const ViewBooks = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const navigate = useNavigate();

  // Function to handle searching
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);  // Update search term based on input
  };

  // Filter books based on the search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="view-books-page">
      <h2>Available Books</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <button 
                className="buy-now-button"
                onClick={() => handleBuyNow(book.id)}
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