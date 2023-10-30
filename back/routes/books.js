const express = require('express');
const router = express.Router();
const Book = require('../models/books');

// Create (Add a new book)
router.post('/api/books', async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});




// Read (View a list of all books)
router.get('/api/Allbooks', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Read (View details of a specific book by its ID)
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




// Update (Update a book's details)
router.put('/api/books/:id', async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, summary },
      { new: true }
    );
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete (Delete a book)
router.delete('/api/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (deletedBook) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
