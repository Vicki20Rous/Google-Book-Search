import React from 'react';
import BookCard from './bookCard';

const BookList = (props) => {
    return (
       <div className="list">
           {
               props.books.map((book, i) => {
                   return <BookCard 
                                key={i}
                                image={book.volumeInfo.imageLink.thumbnail} 
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.author}
                                published={book.volumeInfo.publishedDate}
                            />
               })
           }
       </div> 
    )
}

export default BookList;