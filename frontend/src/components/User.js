// User.js
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAddressContext } from "../hooks/useAddressContext";

const User = () => {
  const { user } = useAuthContext();
  const { userAddresses, loading } = useAddressContext();

  useEffect(() => {
    console.log('User details:', user);
    console.log('User address:', userAddresses);
  }, [user, userAddresses]);

  return (
    <div className="flex mx-auto justify-center my-10">
      <div className=" bg-grey-light rounded-3xl p-8 drop-shadow-md ">
        <div>
          <h2 className="text-lg text-primary font-semibold mb-4 text-center">User Profile</h2>
          {user && (
            <div className="grid gap-2">
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
                <strong>Password:</strong> ********
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="address  bg-grey-light rounded-3xl p-8 drop-shadow-md ml-4">
        <div>
          <Link to="/user/address">
            <h2 className="text-lg text-primary font-semibold mb-4 text-center">Delivery Address</h2>
          </Link>
          {userAddresses && (
            <div className="grid gap-2">
              <div>
                <strong>Receiver Name:</strong> {userAddresses.userName}
              </div>
              <div>
                <strong>Address:</strong> {userAddresses.address}
              </div>
              <div>
                <strong>Phone:</strong> {userAddresses.phone}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
