import React, { useEffect, useState } from "react";
import img2 from './images/hero.jpg';
import BookDetails from './BookDetails';

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
            <div className="books flex justify-center flex-wrap ">
                {books && books.map((book) => (
                    <BookDetails key={books._id} book={book}/>
                ))}
            </div>
            
        </>
    );
}

export default Home;
