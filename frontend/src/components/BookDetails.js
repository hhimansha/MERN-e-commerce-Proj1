import { Link } from "react-router-dom";
import { useState } from "react";

const BookDetails = ({ book }) => {
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    try {
      // Ensure book.price and qty are valid numbers
      const bookPrice = parseFloat(book.price);
      const quantity = parseInt(qty);

      // Calculate TotPrice once
      const calculatedTotPrice = bookPrice * quantity;

      // Retrieve existing cart items from local storage
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Add the current item to the cart
      const updatedCart = [
        ...existingCart,
        {
          bookId: book._id,
          bookName: book.title,
          qty: quantity,
          imageSrc: book.imageSrc,
          price: book.price,
          TotPrice: calculatedTotPrice,
        },
      ];

      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // You may want to add some UI feedback here
      console.log('Item added to cart:', updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Handle error and show appropriate UI feedback
    }
  };

    return(
        <div className="fetchAllBooks w-242">
            <div className="books text-black m-5">
                <div className="max-w-sm bg-grey rounded-lg drop-shadow-md dark:bg-grey-light">
                <Link to={`/product/${book._id}`}>
                        <img src={book.imageSrc} alt={book.title} className="rounded-t-lg w-80 h-72 "/>
                    </Link>
                    <div className="p-5">
                    <Link to={`/product/${book._id}`}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">{book.title}</h5>
                        </Link>
                        <p className="mb-1 font-normal text-gray-700 dark:text-gray-500">{book.author}</p>
                        <p className="mb-2 text-16 font-bold tracking-tight text-primary">{book.price}$</p>
                        <div className="btnSection grid items-center">
                        <button onClick={addToCart} className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black transition duration-1000 ease-in-out hover:text-white hover:bg-grey hover:border-black text-center">
                        Add to cart
                        </button>


                        <Link to={`/product/${book._id}`}>
                            <div className="px-5 py-2 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary text-center mt-2">
                            Buy now

                            </div>
                            </Link>
                        </div>
                        
                </div>
                </div>
            </div>
        </div>

    )
}

export default BookDetails