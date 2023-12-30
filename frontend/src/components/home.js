// Home.js
import React, { useEffect, useState } from "react";
import img2 from './images/hero.jpg';

function Home() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('http://localhost:4000/api/books/');
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
            <div className="books">
                {books && books.map((book) => (
                    <p key={book._id}>{book.author}</p>
                ))}
            </div>
        </>
    );
}

export default Home; // Update export statement to use uppercase 'Home'
