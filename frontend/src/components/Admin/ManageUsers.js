import React, { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [usersList, setUsersList] = useState(null);
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

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
    <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md my-10">
      <form></form>
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* ... your existing code ... */}
          <tbody>
            {usersList && usersList.map((user) => (
              <tr key={user._id} className="my-10">
            <td>{user._id}</td>
  
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            {/*}<td>
              <div className="grid gap-2">
                <Link to={`/admindash/products/update/${user._id}`}>
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
                </td>{*/}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



  );
};

export default ManageUsers;