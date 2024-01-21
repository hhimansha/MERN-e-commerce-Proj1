import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function UpdateBook() {
  const { user } = useAuthContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9092/api/books/admindash/products/${id}`);
        if (response.ok) {
          const json = await response.json();
          // Set the state with book details
          setTitle(json.title);
          setAuthor(json.author);
          setPublishYear(json.publishYear);
          setDescription(json.description);
          setImageSrc(json.imageSrc);
          setPrice(json.price);
        } else {
          setError("Error fetching book details");
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        setError("Error fetching book details");
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const updatedBook = {
      title,
      author,
      publishYear,
      description,
      imageSrc,
      price,
    };

    try {
      const response = await fetch(
        `http://localhost:9092/api/books/admindash/products/update/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedBook),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        setError(null);
        // Redirect to the book list page after a successful update
        navigate("/admindash/products");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      setError("Error updating book");
    }
  };
  return (
    <div className="ml-80 max-w-96">
      <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md">
        <h3 className="text-lg text-primary mb-4 font-semibold bg-grey">
          Update Book
        </h3>
        <form
          className="grid "
          onSubmit={handleSubmit}
        >
          <div className="grid">
            <label>Title : </label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className={`rounded-full p-2 px-5 mb-4 border border-gray-300`}
            />
          </div>

          <div className="grid">
        <label>Author : </label>
        <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300`}
        /></div>

        <div className="grid">
        <label>Publish Year : </label>
        <input
            type="number"
            onChange={(e) => setPublishYear(e.target.value)}
            value={publishYear}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28`}
        /></div>

        <div className="grid">
        <label>Description : </label>
        <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300`}
        /></div>

        <div className="grid">
        <label>Image Src : </label>
        <input
            type="text"
            onChange={(e) => setImageSrc(e.target.value)}
            value={imageSrc}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300`}
        /></div>

        <div className="grid">
        <label>Price : </label>
        <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28`}
        /></div>

          <button className="px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-primary">
            Update Book
          </button>
          {error && <div className="error ">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;