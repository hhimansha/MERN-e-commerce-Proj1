// AddProducts.js
import React, { useEffect, useState, useReducer } from "react";
//import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useProteinsContext } from "../../hooks/useProteinsContext";
import ManageProteins from "./ManageProteins"; 

function AddProducts() {
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
    <div className="ml-[120px] max-w-fit">
      

      <ManageProteins proteins={proteins} />
    </div>
  );
}

export default AddProducts;