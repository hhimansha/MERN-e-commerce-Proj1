import React, { useEffect, useState } from "react";
import bookSet from './images/bookSet.png';
import BookDetails from './BookDetails';
import Productpage from './productPage';
import HeaderPart from "./headerPart";

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
        <>  <HeaderPart/>
            <section class="bg-grey-light ">
                
                <div class="grid max-w-screen-xl mb-10 px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h3 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-4xl text-grey">Back To School</h3>
                        <h3 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-6xl xl:text-6xl text-grey">SPECIAL <span className="text-primary"> 50% OFF</span></h3>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500">The biggest discount for our student community</p>
                        <a href="#" class="inline-flex items-center justify-center pr-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            To Get Offer
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="px-5 py-3 text-20 text-white bg-grey font-semibold rounded-lg transition duration-1000 ease-in-out hover:text-white hover:bg-grey">
                            Explore Now
                        </a> 
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={bookSet} alt="mockup"/>
                    </div>                
                </div>
            </section>
            <div className="justify-center">
                <div className="books flex justify-center flex-wrap w-4/5 mx-auto">
                    {books && books.map((book, index) => (
                        <BookDetails key={book._id} book={book} index={index} />
                    ))}
                </div>
            </div>

            
            
        </>
    );
}

export default Home;