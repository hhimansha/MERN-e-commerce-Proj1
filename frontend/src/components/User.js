import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const User = () => {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9092/api/users/admindash/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (response.ok) {
          const json = await response.json();
          setUserData(json);
        } else {
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        setError("Error fetching user details. Please try again.");
      }
    };

    fetchUserDetails();
  }, [user.id, user.token]);

  return (
    <div className="grid justify-center bg-grey-light mx-auto my-20 p-5 rounded-3xl max-w-lg drop-shadow-md">
      <h1 className="text-4xl text-black text-center mb-4">
        {user.email}
      </h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="btn section flex m-4 ml-0">
        <button
          type="submit"
          className="mx-auto px-5 py-2 px-10 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default User;
