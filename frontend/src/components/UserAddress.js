// AddProducts.js
import React, { useState, useReducer } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAddressContext} from "../hooks/useAddressContext"

function UserAddress() {
  const { dispatch } = useAddressContext();
  const { user } = useAuthContext();

  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);


  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!user) {
      setError("You must be logged in");
      return;
    }
  
    const userID = user._id; // Move this statement here
  
    const userAddress = { userID, userName, address, phone };
  
    const response = await fetch("http://localhost:9092/api/users/user/address", {
      method: "POST",
      body: JSON.stringify(userAddress),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
  
    forceUpdate();
  
    const json = await response.json();
  
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setUserName("");
      setAddress("");
      setPhone("");
      setEmptyFields([]);
      dispatch({ type: "CREATE_ADDRESS", payload: json });
    }
  };
  

  
  

  return (
    <div className="ml-80 max-w-fit">
      <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md">
        <h3 className="text-lg text-primary mb-4 font-semibold bg-grey">
          Add a New Book
        </h3>
        <form className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4" onSubmit={handleSubmit}>

        <div className="mr-5 grid">
        <label>setUserName : </label>
        <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('userName') ? 'error' : ''}`}
        />
        </div>

        <div className="mr-5 grid">
        <label>address : </label>
        <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('address') ? 'error' : ''}`}
        /></div>

        <div className="mr-5 grid">
        <label>phone : </label>
        <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28 ${emptyFields && emptyFields.includes('phone') ? 'error' : ''}`}
        /></div>

        

        <button className="col-span-1 px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-primary">Add address</button>
        {error && <div className="error ">{error}</div>}
    </form>
      </div>

    </div>
  );
}

export default UserAddress;