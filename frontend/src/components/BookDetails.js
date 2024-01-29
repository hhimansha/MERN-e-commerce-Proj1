import { Link } from "react-router-dom"
import { useState } from "react";

const BookDetails = ({ book }) => {
    const [qty, setQty] = useState(1);
    var calculatedTotPrice = 0;
  
    const addToCart = async () => {
        try {
          // Ensure book.price and qty are valid numbers
          const bookPrice = parseFloat(book.price);
          const quantity = parseInt(qty);
      
          // Calculate TotPrice once
          calculatedTotPrice = bookPrice * quantity;
          console.log('book.price:', book.price);
    console.log('qty:', qty);
    console.log('calculatedTotPrice:', calculatedTotPrice);
      
          const response = await fetch('http://localhost:9092/api/order/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              bookId: book._id,
              bookName: book.title,
              qty: quantity,
              imageSrc: book.imageSrc,
              price: book.price,
              TotPrice: calculatedTotPrice, 
            }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            console.log('Item added to cart:', data);
            // You may want to add some UI feedback here
          } else {
            console.error('Error adding to cart:', data.error);
            // Handle error and show appropriate UI feedback
          }
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