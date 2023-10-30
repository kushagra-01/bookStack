
# Node.js Book Management API Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [API Endpoints](#api-endpoints)
   - [Add a New Book](#add-a-new-book)
   - [View All Books](#view-all-books)
   - [View Book Details](#view-book-details)
   - [Update Book Details](#update-book-details)
   - [Delete a Book](#delete-a-book)
3. [Setting Up and Running the Application Locally](#setting-up-and-running-the-application-locally)
4. [Deployment](#deployment)
5. [Decisions and Assumptions](#decisions-and-assumptions)
6. [Video Demonstration](#video-demonstration)

## Introduction
This Node.js RESTful API allows users to manage a collection of books, including creating, reading, updating, and deleting book records. The API is built using Node.js and MongoDB as the database. Below are the details of the API's endpoints and usage.

## API Endpoints

### Add a New Book
- **Endpoint:** `/api/books`
- **HTTP Method:** POST
- **Request Body:** JSON object with the following fields:
   - `title` (string): The title of the book.
   - `author` (string): The author of the book.
   - `summary` (string): A brief summary of the book.
- **Response:** Returns the newly created book as a JSON object.

### View All Books
- **Endpoint:** `/api/books`
- **HTTP Method:** GET
- **Response:** Returns a list of all books in the database as a JSON array.

### View Book Details
- **Endpoint:** `/api/books/:bookId`
- **HTTP Method:** GET
- **Parameters:** `bookId` (string) - The unique identifier of the book.
- **Response:** Returns the details of the specified book as a JSON object.

### Update Book Details
- **Endpoint:** `/api/books/:bookId`
- **HTTP Method:** PUT
- **Parameters:** `bookId` (string) - The unique identifier of the book.
- **Request Body:** JSON object with the following fields (optional):
   - `title` (string): The updated title of the book.
   - `author` (string): The updated author of the book.
   - `summary` (string): The updated summary of the book.
- **Response:** Returns the updated book as a JSON object.

### Delete a Book
- **Endpoint:** `/api/books/:bookId`
- **HTTP Method:** DELETE
- **Parameters:** `bookId` (string) - The unique identifier of the book.
- **Response:** Returns a confirmation message upon successful deletion.

## Setting Up and Running the Application Locally
To set up and run the application locally, follow these steps:

1. Clone the repository from GitHub.
2. Install Node.js and npm if not already installed.
3. Navigate to the project directory in the terminal.
4.  cd to back and npm install
5.  npm start 
 
