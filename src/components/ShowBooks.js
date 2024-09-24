import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowBooks = () => {
  const [books, setBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    imageUrl: '',
    language:'',
    category:''
  });

  useEffect(() => {
    // Fetch books from the backend
    axios.get('http://localhost:8080/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  const handleEdit = (book) => {
    setIsEditing(true);
    setCurrentBook(book);
    setUpdatedBook({
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      imageUrl: book.imageUrl,
      language:book.language,
      category:book.category
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/books/${currentBook.id}`, updatedBook)
      .then(response => {
        // Update the books list after successfully updating the book
        const updatedBooks = books.map(book =>
          book.id === currentBook.id ? response.data : book
        );
        setBooks(updatedBooks);
        setIsEditing(false);
        setCurrentBook(null);
      })
      .catch(error => {
        console.error('There was an error updating the book!', error);
      });
  };

  return (
    <div className="book-list">
      {isEditing ? (
        <div>
          <h2>Update Book</h2>
          <form>
            <input
              type="text"
              name="title"
              value={updatedBook.title}
              onChange={handleInputChange}
              placeholder="Title"
            />
            <input
              type="text"
              name="author"
              value={updatedBook.author}
              onChange={handleInputChange}
              placeholder="Author"
            />
            <input
              type="text"
              name="description"
              value={updatedBook.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            <input
              type="number"
              name="price"
              value={updatedBook.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            <input
              type="text"
              name="language"
              value={updatedBook.langauge}
              onChange={handleInputChange}
              placeholder="Language"
            />

              <input
              type="text"
              name="category"
              value={updatedBook.category}
              onChange={handleInputChange}
              placeholder="Category"
            />


            
            <button type="button" onClick={handleUpdate}>
              Save
            </button>
          </form>
        </div>
      ) : (
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Language</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <td>Rs:{book.price}</td>

                <td>
                  {book.imageUrl && (
                    <img 
                      src={`http://localhost:8080${book.imageUrl}`} 
                      alt={book.title} 
                      style={{ width: '100px', height: '150px' }} 
                    />
                  )}
                </td>
                <td>{book.language}</td>
                <td>{book.category}</td>
                <td>
                  <button onClick={() => handleEdit(book)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowBooks;
