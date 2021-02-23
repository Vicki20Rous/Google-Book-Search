import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("https://www.googleapis.com/auth/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("https://www.googleapis.com/auth/books" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("https://www.googleapis.com/auth/books" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("https://www.googleapis.com/auth/books", bookData);
  }
};
