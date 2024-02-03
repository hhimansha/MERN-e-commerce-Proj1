import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import UserOrder from './UserOrder';

const User = ({ successMessage }) => {
  const { user } = useAuthContext();

  return (
    <div className='py-6 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto'>
    <div className="flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
      <div className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full bg-grey-light rounded-2xl drop-shadow-md">
        <div>
          <Link to="/user/update"><h2 className="text-lg text-primary font-semibold mb-4 text-center">User Profile</h2></Link>
          {user && (
            <div className="flex gap-56">
              <div className='grid'>
                <div className='flex'>
                <strong>First Name:</strong> {user.firstname}
                </div>
                <div className='flex'>
                <strong>Email:</strong> {user.email}
                </div>
                
              </div>
  
              <div className='grid'>
              <div className='flex'>
              <strong>Last Name:</strong> {user.lastname}
              </div>
              <div className='flex'>
                <strong>Password:</strong> ********
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full bg-grey-light rounded-2xl drop-shadow-md">
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
      
    </div>
    <div className='My-orders'>
        <UserOrder />
      </div>
    </div>
  );
};

export default User;
