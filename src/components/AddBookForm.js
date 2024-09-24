// import React, { useState } from 'react';

// const AddBookForm = ({ onAddBook }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const[description,setDescription]=useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate form fields if needed

//     // Create new book object
//     const newBook = {
//       title,
//       author,
//       price,
//       image
//     };

//     // Pass the new book object to the parent component (AdminPage)
//     onAddBook(newBook);

//     // Reset form fields after submission (if needed)
//     setTitle('');
//     setAuthor('');
//     setPrice('');
//     setImage('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="add-book-form">
//       <h3>Add New Book</h3>
//       <label htmlFor="title">Title:</label>
//       <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

//       <label htmlFor="author">Author:</label>
//       <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />

//       <label htmlFor="price">Price:</label>
//       <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

//       <label htmlFor="image">Image URL:</label>
//       <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />

//       <label htmlFor="description">Description:</label>
//       <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

//       <button type="submit">Add Book</button>
//     </form>
//   );
// };

// export default AddBookForm;
import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', imageFile);

    try {
      const response = await axios.post('http://localhost:8080/api/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Book added successfully', response.data);
    } catch (error) {
      console.error('Error adding the book', error);
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;







