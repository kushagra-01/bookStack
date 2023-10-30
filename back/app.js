const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors =require('cors')
app.use(cors())

const connect =require('./config/connection')

// Configure middleware
app.use(bodyParser.json());

// Set up API routes
const booksRouter = require('./routes/books');
app.use('/', booksRouter);

// Start the server
app.listen(port, async () => {
    await connect();
  console.log(`Server is running on port ${port}`);
});
