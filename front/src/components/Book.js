// src/components/Book.js

import React, { useState } from 'react';
import styles from './Book.module.css'; // Import the CSS module

const Book = ({ book, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  const handleSave = () => {
    onEdit(editedBook);
    setIsEditing(false);
  };

  return (
    <div className={styles['book-container']}>
      {isEditing ? (
        <div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={editedBook.title}
              onChange={(e) =>
                setEditedBook({ ...editedBook, title: e.target.value })
              }
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={editedBook.author}
              onChange={(e) =>
                setEditedBook({ ...editedBook, author: e.target.value })
              }
            />
          </div>
          <div>
            <label>Summary:</label>
            <textarea
              value={editedBook.summary}
              onChange={(e) =>
                setEditedBook({ ...editedBook, summary: e.target.value })
              }
            />
          </div>
          <button className={styles['save-button']} onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div className={styles['book-details']}>
          <h3 className={styles['book-title']}>Title: {book.title}</h3>
          <p className={styles['book-author']}>Author: {book.author}</p>
          <p className={styles['book-summary']}>Summary: {book.summary}</p>
          <button className={styles['edit-button']} onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className={styles['delete-button']} onClick={() => onDelete(book)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;
