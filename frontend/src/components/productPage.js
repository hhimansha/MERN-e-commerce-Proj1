import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ItemAddedCart from './AlertBoxes/ItemAddedCart';
import { motion } from 'framer-motion';

function ProductPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [qty, setQty] = useState(1);
  const [calculatedTotPrice, setCalculatedTotPrice] = useState(0);
  const [success, setSuccess] = useState(false);

  // Add a fake array for demonstration
  const fakeArray = [1];

  const addToCart = () => {
    try {
      // Ensure book.price is a valid number
      const bookPrice = parseFloat(book.price);

      // Calculate TotPrice using the captured quantity
      const updatedCalculatedTotPrice = bookPrice * qty;

      // Generate a unique identifier for the cart item
      const cartItemId = uuidv4();

      // Retrieve existing cart items from local storage
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Add the current item to the cart with a unique identifier
      const updatedCart = [
        ...existingCart,
        {
          id: cartItemId,  // Use the generated unique identifier
          bookId: book._id,
          bookName: book.title,
          qty: qty,  // Use the captured quantity
          imageSrc: book.imageSrc,
          price: book.price,
          TotPrice: updatedCalculatedTotPrice,
        },
      ];

      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update the calculatedTotPrice state
      setCalculatedTotPrice(updatedCalculatedTotPrice);
      setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1500);

      // You may want to add some UI feedback here
      console.log('Item added to cart:', updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle error and show appropriate UI feedback
    }
  };


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    // Update calculatedTotPrice when qty changes
    setCalculatedTotPrice(parseFloat(book?.price || 0) * qty);
  }, [qty, book]);
  
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
  
    const incrementQty = () => {
      setQty((prevQty) => (prevQty < 10 ? prevQty + 1 : prevQty));
    };
  
    const decrementQty = () => {
      setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));
    };


  return (
    <div>
      {book ? (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="overflow-hidden bg-white py-11 font-poppins mx-auto"
        >
          {/* Map through the fake array to use index */}
          {fakeArray.map((item, index) => (
            <div key={index}>
          <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4 justify-center">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0  overflow-hidden ">
                  <div className="flex lg:h-2/4 justify-center mx-auto">
                    <img src={book.imageSrc} alt="" className="object-cover w-96 lg:h-full" />
                  </div>
                </div>
              </div>

              <div className=" w-mid bg-grey-light p-10 rounded-3xl drop-shadow-md mt-10 sm:mt-10 md:mt-0">
                <div className="">
                  <div className="">
                    <h2 className="max-w-xl mt-2 text-2xl font-bold dark:text-grey md:text-4xl">{book.title}</h2>
                    <div className="flex items-center mb-6">
                      <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                    </div>
                    <p className="max-w-md mb-8 text-grey dark:text-grey ">{book.description}</p>
                    <p className="inline-block mb-8 text-4xl font-bold text-grey dark:text-grey ">
                      <span>${book.price}</span>
                    </p>
                  </div>

                    <div className="wrapper h-10 w-28 flex items-center justify-center bg-white rounded-full">
                        <span
                        className="w-full text-center text-black font-semibold cursor-pointer select-none bg-gray-200 hover:bg-gray-300 py-2 rounded-l-full"
                        onClick={decrementQty}
                        >
                        -
                        </span>
                        <span className="w-full text-center text-50 font-semibold   cursor-not-allowed">
                        {qty < 10 ? `0${qty}` : qty}
                        </span>
                        <span className="w-full text-center text-black font-semibold cursor-pointer select-none bg-gray-200 hover:bg-gray-300 py-2 rounded-r-full" 
                        onClick={incrementQty}>
                        +
                        </span>
                    </div>

                  <div className="flex flex-wrap items-center -mx-4 mt-10">
                    <div className="w-full px-4 mb-4 lg:w-full lg:mb-0">
                     <button 
                     onClick={addToCart}
                     type="button" class="group inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-grey">
                        Add To Cart
                        <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>))}
          {success && <ItemAddedCart />}
        </motion.div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;