import { useState, useEffect } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

const Cart = () => {
  const books = useBooksContext();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCarts = JSON.parse(localStorage.getItem("cart")) || [];
    setCarts(storedCarts);
  }, []);

  return (
    <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md my-10 w-96 mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th
                colSpan="3"
                className="text-lg text-primary font-semibold bg-grey mb-4 text-left"
              >
                Stored Books
              </th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.bookId} className="my-10">
                <td>
                  <div className="w-32 h-36">
                    <img
                      src={cart.imageSrc}
                      alt={cart.bookName}
                      className="rounded-t-lg w-32 h-36"
                    />
                  </div>
                </td>
                <td>{cart.bookName}</td>
                <td>{cart.price}</td>
                <td>{/* Add remove from cart action */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
