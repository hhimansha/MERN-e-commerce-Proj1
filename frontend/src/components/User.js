// User.js
import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const User = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    // You can access user details here
    console.log('User details:', user);
  }, [user]);

  return (
    <div className="ml-80 w-fit bg-grey-light rounded-3xl p-8 drop-shadow-md">
      <div>
        <h2 className="text-lg text-primary font-semibold mb-4 text-center">User Profile</h2>
        {user && (
          <div className="grid gap-2">
            <div>
              <strong>User ID:</strong> {user._id}
            </div>
            <div>
              <strong>First Name:</strong> {user.firstname}
            </div>
            <div>
              <strong>Last Name:</strong> {user.lastname}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Phone:</strong> {user.phone}
            </div>
            {/* Add additional fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
