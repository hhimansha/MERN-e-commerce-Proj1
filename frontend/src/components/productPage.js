import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      const fetchBook = async () => {
        try {
          const response = await fetch(`http://localhost:9092/api/books/admindash/products/${bookId}`);
          const json = await response.json();
          
          if (response.ok) {
            setBook(json);
          } else {
            // Handle error case, e.g., redirect to home or show an error message
            console.error(`Error fetching book: ${response.status}`);
          }
        } catch (error) {
          console.error('Error fetching book:', error);
        }
      };
  
      fetchBook();
    }, [bookId]);


    return( 
        <div>
        {book ? ( 
            
        <section className="overflow-hidden bg-white py-11 font-poppins mx-auto">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src={book.imageSrc} alt=""
                                className="object-cover w-96 lg:h-full "/>
                        </div>

                    </div>
                </div>
                
                <div className="w-mid bg-grey-light p-10 rounded-3xl drop-shadow-md">
                    <div className="">
                        <div className="mb-8 ">
                            
                            <h2 className="max-w-xl mt-2 text-2xl font-bold dark:text-grey md:text-4xl">
                            {book.title}</h2>
                            <div className="flex items-center mb-6">
                                <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                            </div>
                            <p className="max-w-md mb-8 text-grey dark:text-grey ">
                                {book.description}
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-grey dark:text-grey ">
                                <span>Rs.{book.price}</span>
                                
                            </p>
                            
                        </div>
                        
                        <div className="w-32 mb-8 ">
                            <label for=""
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button
                                    className="w-20 h-full text-gray-600 bg-grey-light rounded-l outline-none cursor-pointer dark:hover:bg-gray-500 dark:text-grey hover:text-gray-300 dark:bg-gray-300 hover:bg-gray-200">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number"
                                    className="flex items-center w-full font-semibold text-center text-grey placeholder-gray-700 bg-grey-light outline-none dark:text-grey dark:placeholder-gray-400 dark:bg-grey-light focus:outline-none text-md hover:text-black"
                                    placeholder="1"/>
                                <button
                                    className="w-20 h-full text-gray-600 bg-grey-light rounded-r outline-none cursor-pointer dark:hover:bg-gray-500 dark:text-grey hover:text-gray-300 dark:bg-gray-300 hover:bg-gray-200">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button
                                    className="flex items-center justify-center w-full p-4 text-base text-black-600 font-semibold rounded-full border border-black transition duration-1000 ease-in-out hover:text-white hover:bg-grey hover:border-black">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                <button
                                    className="flex items-center justify-center w-full p-4 text-base text-white font-semibold rounded-full border focus:outline-none bg-primary">
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;