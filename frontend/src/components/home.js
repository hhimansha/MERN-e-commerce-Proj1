// Home.js
import React, { useEffect, useState, useContext } from "react";
import img2 from './images/hero.jpg';
import BookDetails from './BookDetails';
import Productpage from './productPage';
import { BooksContext } from "../context/BooksContext";

function Home() {
  const { book, dispatch } = useContext(BooksContext);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:9092/api/books/');
      const json = await response.json();
      if (response.ok) {
        // Update the book list in the context when the component mounts
        dispatch({ type: 'UPDATE_BOOK_LIST', payload: json });
      }
    };

    fetchBooks();
  }, [dispatch]);

  return (
    <>
      <img src={img2} alt="Logo" className="max-w-full" />
      <div className="justify-center">
        <div className="books flex justify-center flex-wrap w-4/5 mx-auto">
          {book && book.map((book) => (
            <BookDetails key={book._id} book={book}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
