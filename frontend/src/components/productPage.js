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
        <section className="overflow-hidden bg-white py-11 font-poppins ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src={book.imageSrc} alt=""
                                className="object-cover w-full lg:h-full "/>
                        </div>

                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                            
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-grey md:text-4xl">
                            {book.title}</h2>
                            <div className="flex items-center mb-6">
                                <ul className="flex mr-2">
                                    <li>
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        
                                    </li>
                                    <li>
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        
                                    </li>
                                    <li>
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        
                                    </li>
                                    <li>
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        
                                    </li>
                                </ul>
                                <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                            </div>
                            <p className="max-w-md mb-8 text-grey dark:text-grey">
                                {book.description}
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-grey dark:text-grey ">
                                <span>{book.price}</span>
                                
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