import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBooksContext } from "../hooks/useBooksContext";

const Cart = () => {

    const { dispatch } = useBooksContext();
    const { user } = useAuthContext();
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
  
    const handleClick = async (bookId) => {
      if (!user) {
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:9092/api/books/admindash/products/${bookId}`,
          {
            method: "DELETE",
            headers: {
              'Authorization': `Bearer ${user.token}`,
            },
          }
        );
        forceUpdate()
  
        const json = await response.json();
  
        if (response.ok) {
          dispatch({ type: "DELETE_BOOK", payload: json });
        }
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };

    return (
        <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md my-10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th
                colSpan="8"
                className="text-lg text-primary font-semibold bg-grey mb-4 text-left"
              >
                Stored Books
              </th>
            </tr>
            <tr>
              <th className="w-1/8">Product ID</th>
              <th className="w-1/8">Image</th>
              <th className="w-1/8">Title</th>
              <th className="w-1/8">Author</th>
              <th className="w-1/8">Publish Year</th>
              <th className="w-1/8">Description</th>
              <th className="w-1/8">Price</th>
              <th className="w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="my-10">
                <td>{book._id}</td>
                <td>
                  <div className="w-32 h-36">
                    <img
                      src={book.imageSrc}
                      alt={book.title}
                      className="rounded-t-lg w-32 h-36"
                    />
                  </div>
                </td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td className="w-80">{book.description}</td>
                <td>{book.price}</td>
                <td>
                  <div className="grid gap-2">
                    <Link to={`/admindash/products/update/${book._id}`}>
                    <button className="px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-grey">
                      Update
                    </button>
                    </Link>
                    <button
                      className="px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-red-500"
                      onClick={() => {
                        if (window.confirm("Do you want to delete this book?")) {
                          handleClick(book._id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    
    
      );

}

export default Cart