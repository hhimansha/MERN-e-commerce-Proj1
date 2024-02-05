import React, { useEffect, useState, useReducer } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useProteinsContext } from "../../hooks/useProteinsContext";
import { Link } from "react-router-dom";

const ManageUsers = () => {
    const { dispatch } = useProteinsContext();
  const { user } = useAuthContext();
  const [usersList, setUsersList] = useState(null);
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  const handleClick = async (userId) => {
    if (!user) {
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:9092/api/users/admindash/users/${userId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Dispatch the 'DELETE_USER' action with the userId
        dispatch({ type: 'DELETE_USER', payload: { _id: userId } });
      } else {
        const errorJson = await response.json();
        console.error("Error deleting user:", errorJson);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:9092/api/users/admindash/users/");
        forceUpdate();
        if (response.ok) {
          const json = await response.json();
          setUsersList(json);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [reducerValue]);

  return (
    <div className="ml-80 w-fit  bg-grey-light rounded-3xl p-8 drop-shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            <tr>
                <th
                colSpan="6"
                className="text-lg text-primary font-semibold bg-grey mb-4 text-center"
                > 
                Users
                </th>
            </tr>
            <tr>
                <th>User ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
            </tr>
            {usersList && usersList.map((user) => (
              <tr key={user._id} className="my-10">
            <td>{user._id}</td>
  
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <div className="grid gap-2">
                
                <button
                  className=" py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-red-500"
                  onClick={() => {
                    if (window.confirm("Do you want to delete this book?")) {
                      handleClick(user._id);
                    }
                  }}
                >
                  Remove User
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
};

export default ManageUsers;