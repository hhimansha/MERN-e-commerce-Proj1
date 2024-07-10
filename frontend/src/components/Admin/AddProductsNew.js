// AddProducts.js
import React, { useEffect, useState, useReducer } from "react";
//import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useProteinsContext } from "../../hooks/useProteinsContext";
import ManageProteins from "./ManageProteins"; 

function AddProductsNew() {
  const { dispatch } = useProteinsContext();
  const { user } = useAuthContext();

  const [proteins, setProteins] = useState([]);
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);


  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
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

    const protein = { title, company, imageSrc, description, price };  

    const response = await fetch(
      "https://mern-e-commerce-proj1.onrender.com/api/proteins/admindash/products",
      {
        method: "POST",
        body: JSON.stringify(protein),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
      
    );
    forceUpdate()

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setCompany("");
      setDescription("");
      setImageSrc("");
      setPrice("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_PROTEIN", payload: json });
    }

    // Check if already authenticated and redirect
    /*if (localStorage.getItem("user")) {
      navigate("/admindash");
    }*/

    
  };

  useEffect(() => {
    const fetchProteins = async () => {
      try {
        const response = await fetch("https://mern-e-commerce-proj1.onrender.com/api/proteins/");
        forceUpdate()
        if (response.ok) {
          const json = await response.json();
          setProteins(json);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchProteins();
  }, [reducerValue]);

  

  return (
    <div className="ml-[280px] max-w-screen-xl mt-6">
      <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md">
        <h3 className="text-lg text-grey-light mb-4 font-semibold border-b">
          Add Protein
        </h3>
        <form className="grid" onSubmit={handleSubmit}>
          <div className="grid">
            <label>Title:</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="rounded-xl p-2 px-5 mb-4 border border-gray-300"
            />
          </div>

          <div className="grid">
            <label>Company:</label>
            <input
              type="text"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              className="rounded-xl p-2 px-5 mb-4 border border-gray-300"
            />
          </div>

          <div className="grid">
            <label>Description:</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="rounded-xl p-2 px-5 mb-4 border border-gray-300"
            />
          </div>

          <div className="grid">
            <label>Image Src:</label>
            <input
              type="text"
              onChange={(e) => setImageSrc(e.target.value)}
              value={imageSrc}
              className="rounded-xl p-2 px-5 mb-4 border border-gray-300"
            />
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Protein"
                className="mt-4 w-48 h-48 object-cover rounded-xl border border-gray-300"
              />
            )}
          </div>

          <div className="grid">
            <label>Price:</label>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="rounded-xl p-2 px-5 mb-4 border border-gray-300 w-28"
            />
          </div>

          <button className="px-5 w-40 mt-10 py-2 text-lg text-white font-semibold rounded-xl border focus:outline-none bg-primary">
            Add Protein
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default AddProductsNew;