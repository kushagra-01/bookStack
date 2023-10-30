// src/components/BookList.js

import React from 'react';
import Book from './Book';
import styles from './BookList.module.css'; // Import the CSS module

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className={styles['book-list-container']}>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BookList;
