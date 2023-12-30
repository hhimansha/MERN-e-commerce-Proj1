// Home.js
import React, { useEffect, useState } from "react";
import img2 from './images/hero.jpg';

function Home() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('http://localhost:9092/api/books/');
            const json = await response.json();
            if (response.ok) {
                setBooks(json);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <img src={img2} alt="Logo" className="max-w-full" />
            <div className="books text-black">
                {books && books.map((book) => (
                    <><h1 key={book._id}>{book.title}</h1><h1 key={book._id}>{book.author}</h1><h1 key={book._id}>{book.publishYear}</h1><img key={book._id} src={book.imageSrc} alt={book.title}/>
                    <h1 key={book._id}>{book.description}</h1></>
                ))}
                </div> 
        </>
    );
}

export default Home; // Update export statement to use uppercase 'Home'
