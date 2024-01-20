// ManageBooks.js
import React from "react";
import { useBooksContext } from "../../hooks/useBooksContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const ManageBooks = ({ books }) => {
  const { dispatch } = useBooksContext();
  const { user } = useAuthContext();

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
      <form></form>
      <table className="w-full">
        <thead>
          <tr>
            <th
              colSpan="7"
              className="text-lg text-primary font-semibold bg-grey mb-4 text-left"
            >
              Stored Books
            </th>
          </tr>
          <tr>
            <th>Product ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book._id}</td>
              <td>
                <div className="w-32 h-36 ">
                  <img
                    src={book.imageSrc}
                    alt={book.title}
                    className="rounded-t-lg w-32 h-36 "
                  />
                </div>
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td className="w-80">{book.description}</td>
              <td>{book.price}</td>
              <td>
                <div className="grid">
                  <button className="px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-grey">
                    Update
                  </button>
                  <button
                    className="px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-red-500"
                    onClick={() => handleClick(book._id)}
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
  );
};

export default ManageBooks;
