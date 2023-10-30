// src/App.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    summary: '',
  });


  useEffect(() => {
    fetchBooks();
  }, []);


  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://bookstack-back.onrender.com/api/Allbooks');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to add a new book using Axios
  const addBook = async () => {
    try {
      await axios.post('https://bookstack-back.onrender.com/api/books', newBook, {
        headers: { 'Content-Type': 'application/json' },
      });
      fetchBooks();
    } catch (error) {
      console.error('Error adding a book:', error);
    }
  };

  // Function to edit a book using Axios
  const editBook = async (book) => {
    console.log(book)
    try {
      await axios.put(`https://bookstack-back.onrender.com/api/books/${book._id}`, book, {
        headers: { 'Content-Type': 'application/json' },
      });
      fetchBooks();
    } catch (error) {
      console.error('Error editing a book:', error);
    }
  };

  // Function to delete a book using Axios
  const deleteBook = async (bookId) => {
    try {
      console.log(bookId)
      await axios.delete(`https://bookstack-back.onrender.com/api/books/${bookId._id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting a book:', error);
    }
  };


  return (
    <div className="App">
      <h1>Book Management App</h1>
      <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <input
        type="text"
        placeholder="Summary"
        value={newBook.summary}
        onChange={(e) => setNewBook({ ...newBook, summary: e.target.value })}
      />
      <button onClick={addBook}>Add Book</button>
      <BookList books={books} onEdit={editBook} onDelete={deleteBook} />
    </div>
  );
}

export default App;
