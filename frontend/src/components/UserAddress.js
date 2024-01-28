import React, { useState, useReducer } from "react";
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from "../hooks/useAuthContext";

function UserAddress() {
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();

  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  // New state variables
  const [street, setStreet] = useState(user.DeliveryAddress ? user.DeliveryAddress.street : "");
  const [city, setCity] = useState(user.DeliveryAddress ? user.DeliveryAddress.city : "");
  const [state, setState] = useState(user.DeliveryAddress ? user.DeliveryAddress.state : "");
  const [zipCode, setZipCode] = useState(user.DeliveryAddress ? user.DeliveryAddress.zipCode : "");


  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    // Update userAddress object with new variables
    const DeliveryAddress = {
      street,
      city,
      state,
      zipCode,
    };

    const response = await fetch(`http://localhost:9092/api/users/user/address/${user._id}`, {
    method: "POST",
    body: JSON.stringify(DeliveryAddress),
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
    },
    });

    forceUpdate();

    const json = await response.json();
    console.log('Backend Response:', json);

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);

      setStreet("");
      setCity("");
      setState("");
      setZipCode("");
      setEmptyFields([]);
      dispatch({ type: "UPDATE_DELIVERY_ADDRESS", payload: json.DeliveryAddress });
      navigate("/user");

    }
  };

  return (
    <div className="ml-80 max-w-fit">
      <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md">
        <h3 className="text-lg text-primary mb-4 font-semibold bg-grey">
          Update Address
        </h3>
        <form
          className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4"
          onSubmit={handleSubmit}
        >
         

          {/* New input fields */}
          <div className="mr-5 grid">
            <label>street : </label>
            <input
              type="text"
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${
                emptyFields && emptyFields.includes("street") ? "error" : ""
              }`}
            />
          </div>

          <div className="mr-5 grid">
            <label>city : </label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${
                emptyFields && emptyFields.includes("city") ? "error" : ""
              }`}
            />
          </div>

          <div className="mr-5 grid">
            <label>state : </label>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
              className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28 ${
                emptyFields && emptyFields.includes("state") ? "error" : ""
              }`}
            />
          </div>

          <div className="mr-5 grid">
            <label>zipCode : </label>
            <input
              type="text"
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28 ${
                emptyFields && emptyFields.includes("zipCode") ? "error" : ""
              }`}
            />
          </div>

          <button className="col-span-1 px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-primary">
            Add address
          </button>
          {error && <div className="error ">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default UserAddress;
