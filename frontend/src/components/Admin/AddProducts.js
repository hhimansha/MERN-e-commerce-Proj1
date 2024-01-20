// AddProducts.js
import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBooksContext } from "../../hooks/useBooksContext";
import ManageBooks from "./ManageBooks"; // Import the ManageBooks component

function AddProducts() {
  const { dispatch } = useBooksContext();
  const { user } = useAuthContext();

  const [books, setBooks] = useState([]); // Add the books state


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
        setError("You must be logged in");
        return;
      }

    const book = { title, author, publishYear, imageSrc, description, price };  

    const response = await fetch(
      "http://localhost:9092/api/books/admindash/products",
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setAuthor("");
      setPublishYear("");
      setDescription("");
      setImageSrc("");
      setPrice("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_BOOK", payload: json });
    }

    // Check if already authenticated and redirect
    /*if (localStorage.getItem("user")) {
      navigate("/admindash");
    }*/

    
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:9092/api/books/");
        if (response.ok) {
          const json = await response.json();
          setBooks(json); // Set the books state
          dispatch({ type: "SET_BOOK", payload: json });
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [dispatch]);

  

  return (
    <div className="mx-auto max-w-fit">
      <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md">
        <h3 className="text-lg text-primary mb-4 font-semibold bg-grey">
          Add a New Book
        </h3>
        <form className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4" onSubmit={handleSubmit}>

        <div className="mr-5 grid">
        <label>Title : </label>
        <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('title') ? 'error' : ''}`}
        />
        </div>

        <div className="mr-5 grid">
        <label>Author : </label>
        <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('author') ? 'error' : ''}`}
        /></div>

        <div className="mr-5 grid">
        <label>Publish Year : </label>
        <input
            type="number"
            onChange={(e) => setPublishYear(e.target.value)}
            value={publishYear}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28 ${emptyFields && emptyFields.includes('publishYear') ? 'error' : ''}`}
        /></div>

        <div className="mr-5 grid">
        <label>Description : </label>
        <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('description') ? 'error' : ''}`}
        /></div>

        <div className="mr-5 grid">
        <label>Image Src : </label>
        <input
            type="text"
            onChange={(e) => setImageSrc(e.target.value)}
            value={imageSrc}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('imageSrc') ? 'error' : ''}`}
        /></div>

        <div className="mr-5 grid">
        <label>Price : </label>
        <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28  ${emptyFields && emptyFields.includes('price') ? 'error' : ''}`}
        /></div>

        <button className="col-span-1 px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-primary">Add Book</button>
        {error && <div className="error ">{error}</div>}
    </form>
      </div>

      <ManageBooks books={books} />
    </div>
  );
}

export default AddProducts;
