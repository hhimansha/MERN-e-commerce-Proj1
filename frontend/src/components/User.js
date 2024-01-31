import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import UserOrder from './UserOrder';

const User = ({ successMessage }) => {
  const { user } = useAuthContext();

  return (
    <div className="flex mx-auto justify-center my-10">
      <div className=" bg-grey-light rounded-3xl p-8 drop-shadow-md ">
        <div>
          <Link to="/user/update"><h2 className="text-lg text-primary font-semibold mb-4 text-center">User Profile</h2></Link>
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
          {user && user.DeliveryAddress && Object.keys(user.DeliveryAddress).length > 0 && (
            <div className="grid gap-2">
              <div>
                <strong>Street:</strong> {user.DeliveryAddress.street}
              </div>
              <div>
                <strong>City:</strong> {user.DeliveryAddress.city}
              </div>
              <div>
                <strong>State:</strong> {user.DeliveryAddress.state}
              </div>
              <div>
                <strong>Zip Code:</strong> {user.DeliveryAddress.zipCode}
              </div>
            </div>
          )}
          
        </div>
      </div>
      <div className='My-orders'>
        <UserOrder />
      </div>
    </div>
  );
};

export default User;
