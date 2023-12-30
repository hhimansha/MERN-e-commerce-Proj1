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
                    <div key={book._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img src={book.imageSrc} alt={book.title} className="rounded-t-lg" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {book.price}
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
