import React, { useEffect, useState, useReducer, useContext } from "react";
import img2 from './images/hero.jpg';
import BookDetails from './BookDetails';
import Productpage from './productPage';
import { BooksContext } from "../context/BooksContext";


function Home() {
    const { book } = useContext(BooksContext); // Access the book state from BooksContext

    const [books, setBooks] = useState(null);
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await fetch("http://localhost:9092/api/books/");
            forceUpdate()
            if (response.ok) {
              const json = await response.json();
              setBooks(json); // Set the books state
              //dispatch({ type: "SET_BOOK", payload: json });
            }
          } catch (error) {
            console.error("Error fetching books:", error);
          }
        };
    
        fetchBooks();
      }, [reducerValue]);
    

    return (
        <>
            <img src={img2} alt="Logo" className="max-w-full" />
            <div className="justify-center">
                <div className="books flex justify-center flex-wrap w-4/5 mx-auto">
                    {books && books.map((book) => (
                        <BookDetails key={book._id} book={book}/>
                    ))}
                </div>
            </div>

            
            
        </>
    );
}

export default Home;
