import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import UserOrder from './UserOrder';

const User = ({ successMessage }) => {
  const { user } = useAuthContext();

  return (
    <div className=''>
    <main class="flex-1 md:px-20 px-4 sm:px-8 lg:pt-4 lg:px-56  flex flex-col  mx-auto">
  <section class="bg-grey-light shadow rounded-2xl shadow-lg mt-10">

    <div class="md:flex border-b dark:border-gray-300 ">
      <h2 class="text-10 text-gray-500 font-semibold bg-grey-light text-left w-full py-2 pl-10 rounded-t-2xl">User Profile Details</h2>
    </div>
    <form className='p-10'>
      <div class="md:flex mb-8 ">
        <div class="md:w-1/3">
          <legend class="text-base font-bold tracking-tight text-gray-900 dark:text-grey">Account Details</legend>
        </div>
      {user && (
      <div class="md:flex-1  mb:mt-0 md:px-3">
        <div class="md:flex mb-4">
          <div class="md:flex-1 md:pr-3">
            <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">First Name</label>
            <input class="w-full rounded-lg  p-2 border-0" type="text" readOnly  placeholder={user.firstname}/>
          </div>
          <div class="md:flex-1 md:pl-3">
            <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">Last Name</label>
            <input class="w-full rounded-lg p-2 border-0" type="text" readOnly placeholder={user.lastname}/>
          </div>
        </div>
        <div class="md:flex mb-4">
          <div class="md:flex-1 md:pr-3">
              <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">Email Address</label>
              <input class="w-full rounded-lg p-2 border-0" type="text" readOnly placeholder={user.email}/>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">Password</label>
              <input class="w-full rounded-lg p-2 border-0" type="password" readOnly placeholder="********"/>
            </div>
          </div>
          <Link to="/user/update" className="mx-2">
              <button type="button" className="px-5 py-2 bg-primary text-20 text-white  font-semibold rounded-lg border border-primary transition duration-1000 ease-in-out hover:text-white hover:bg-grey -ml-2">Edit Details</button>
          </Link>
        </div>
      )}
      </div>
    
      <div class="md:flex mb-8">
        <div class="md:w-1/3">
          <legend class="text-base font-bold tracking-tight text-gray-900 dark:text-grey">Delivery Address</legend>
        </div>
      {user && user.DeliveryAddress && Object.keys(user.DeliveryAddress).length > 0 && (
        <div class="md:flex-1  mb:mt-0 md:px-3">
          <div class="mb-4">
            <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">Street Address</label>
            <input class="w-full rounded-lg p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.street}/>
          </div>
          <div class="mb-4">
            <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">City</label>
            <input class="w-full rounded-lg p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.city}/>
          </div>
          <div class="mb-4">
            <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">State</label>
            <input class="w-full rounded-lg p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.state}/>
          </div>
      <div class="mb-4">
            <label class="text-base font-semibold tracking-tight text-gray-900 dark:text-grey">Zip Code</label>
            <input class="w-full rounded-lg p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.zipCode}/>
          </div>
          <Link to="/user/address" className="mx-2">
              <button type="button" className="px-5 py-2 bg-primary text-20 text-white  font-semibold rounded-lg border border-primary transition duration-1000 ease-in-out hover:text-white hover:bg-grey -ml-2">Edit Address</button>
          </Link>
        </div>
      )}
      </div>
      
      </form>
  </section>
  <div className='My-orders'>
        <UserOrder />
      </div>
  </main>

  </div>





  );
};

export default User;
