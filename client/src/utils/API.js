import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?="+ query);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/apis/books" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/apis/books" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/apis/books", bookData);
  }
};
